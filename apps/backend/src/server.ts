import { Elysia } from 'elysia';

export function initializeServer() {
	
	const app = new Elysia()
		.listen(8001);

	return app;
}

export type ServerApp = ReturnType<typeof initializeServer>;