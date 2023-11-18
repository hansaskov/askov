import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";
dotenv.config();

export default {
	schema: './src/lib/server/schema.js',
	out: './drizzle',
	driver: 'turso',
	dbCredentials: {
    url: process.env.TURSO_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN

	}
} satisfies Config;
