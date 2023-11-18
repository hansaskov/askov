import { google } from '@lucia-auth/oauth/providers';
import { auth } from '$lib/server/lucia';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { base } from '$app/paths';

export const googleAuth = google(auth, {
	redirectUri: base,
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET
});
