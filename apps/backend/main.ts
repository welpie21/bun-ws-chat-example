import { Hono } from "@hono/hono";

const app = new Hono({ strict: true });

app.get('/api/hello', (c) => {

	// allow cross all origins
	c.status(200);
	c.header("Access-Control-Allow-Origin", "*");

	return c.text("Hello world");
});

Deno.serve(
	{ port: 3000 },
	app.fetch
);