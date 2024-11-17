import type { ServerApp } from "@apps/backend";
import { treaty } from "@elysiajs/eden";

const client = treaty<ServerApp>("localhost:3000");
