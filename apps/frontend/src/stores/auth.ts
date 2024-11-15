import type { RecordId } from "@surrealdb/surrealdb";
import type { Optional } from "../types";
import { createStore } from "solid-js/store";

export interface IAuthStore {
	token: Optional<string>;
	user: Optional<RecordId>;
}

const [store, setStore] = createStore<IAuthStore>({
	token: undefined,
	user: undefined,
});

export async function login(
	_username: string,
	_password: string
) {

}

export async function register(
	_username: string,
	_password: string
) {

}

export async function logout(): Promise<boolean> {
	return false;
}

export const authStore = store;
export const setAuthStore = setStore;