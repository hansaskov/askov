import { google } from '@lucia-auth/oauth/providers';
import { auth } from '$lib/server/lucia';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import { dev } from '$app/environment';

export const googleAuth = google(auth, {
	redirectUri: dev ? 'http://localhost:5173/login/google/callback' : 'https://askov.dk/login/google/callback',
	clientId: GOOGLE_CLIENT_ID,
	clientSecret: GOOGLE_CLIENT_SECRET,
	scope: ['https://www.googleapis.com/auth/userinfo.email']
});
