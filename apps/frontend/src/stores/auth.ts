import type { RecordId } from "@surrealdb/surrealdb";
import type { Optional } from "../types";

export interface AuthStore {
	token: Optional<string>;
	user: Optional<RecordId>;
}