import { Surreal } from "@surrealdb/surrealdb";

export async function initializeDB() {

	const db = new Surreal();
	const url = new URL("http://127.0.0.1:8000/rpc");

	await db.connect(url, { 
		namespace: "app",
		database: "ws-chat"
	});

	return db;
}