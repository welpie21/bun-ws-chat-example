import { Accessor } from "solid-js";

export interface AuthContextInterface {
	token: Accessor<string | null>;
	user: Accessor<string | null>;
}