import { Elysia } from 'elysia';

const app = new Elysia()
	.get('/', () => 'Hello Elysia')
	.get('/hello', 'Do you miss me?')
	.listen(8001);