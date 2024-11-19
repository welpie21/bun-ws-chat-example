import type { RecordId } from "@surrealdb/surrealdb";
import type { Optional } from "../types";
import { createStore } from "solid-js/store";
import { PasswordNotSpecifiedError, UsernameNotSpecifiedError } from "../utils/error";
import { api } from "../client";

export interface IAuthStore {
	token: Optional<string>;
	user: Optional<RecordId>;
}

const [store, setStore] = createStore<IAuthStore>({
	token: undefined,
	user: undefined,
});

export async function login(
	username: string,
	password: string
) {

	if(username.length === 0) {
		throw UsernameNotSpecifiedError
	}

	if(password.length === 0) {
		throw PasswordNotSpecifiedError
	}

	api
}

export async function register(
	username: string,
	password: string
) {

	if (username.length === 0) {
		throw UsernameNotSpecifiedError
	} 
	
	if (password.length === 0) {
		throw PasswordNotSpecifiedError
	}


}

export async function logout(): Promise<boolean> {
	return false;
}

export const authStore = store;
export const setAuthStore = setStore;