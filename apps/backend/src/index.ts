import {
	type ServerApp,
	initializeHttpServer
} from "./server.js";

import {
	initializeDB
} from "./db.js";

initializeHttpServer();
initializeDB();

export type { ServerApp };