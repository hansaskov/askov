// routes/login/github/callback/+server.ts
import { auth } from '$lib/server/lucia.js';
import { googleAuth } from '$lib/server/oath.js';
import { OAuthRequestError } from '@lucia-auth/oauth';

export const GET = async ({ url, cookies, locals }) => {
	const storedState = cookies.get('google_oauth_state');
	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');
	// validate state
	if (!storedState || !state || storedState !== state || !code) {
		return new Response(null, {
			status: 400
		});
	}
	try {
		const { getExistingUser, googleUser, createUser } = await googleAuth.validateCallback(code);

		const getUser = async () => {
			const existingUser = await getExistingUser();
			if (existingUser) return existingUser;
			if (!googleUser.email) return null;
			const user = await createUser({
				attributes: {
					email: googleUser.email,
					name: googleUser.name
				}
			});
			return user;
		};

		const user = await getUser();
		if (!user) throw OAuthRequestError;

		const session = await auth.createSession({
			userId: user.userId,
			attributes: {}
		});
		locals.auth.setSession(session);
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/'
			}
		});
	} catch (e) {
		if (e instanceof OAuthRequestError) {
			// invalid code
			console.log(e.response);
			return new Response(e.response.body, {
				status: 400
			});
		}
		return new Response(null, {
			status: 500
		});
	}
};
