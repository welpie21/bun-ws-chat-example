import { Surreal } from "@surrealdb/surrealdb";

const db = new Surreal();
await db.connect("http://localhost:8080");

export default db;