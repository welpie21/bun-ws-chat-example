import type { ServerApp } from "@apps/backend";
import { treaty } from "@elysiajs/eden";

const client = treaty<ServerApp>("http://127.0.0.1:8001", { 
	keepDomain: true
});

export { client as api };