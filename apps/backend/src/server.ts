import cors from '@elysiajs/cors';
import { Elysia } from 'elysia';
import UserController from './controllers/user';


export function initializeHttpServer() {

	const api = new Elysia({ prefix: "/api" })
		.use(UserController);

	const app = new Elysia()
		.use(api)
		.use(
			cors({
				credentials: true,
				origin: /localhost.*/
			})
		)
		.listen(8001);

	return app;
}

export type ServerApp = ReturnType<typeof initializeHttpServer>;