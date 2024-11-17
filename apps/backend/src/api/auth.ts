import { t } from "elysia";

const AuthPostBody = t.Object({
	email: t.String({
		format: "email"
	}),
	password: t.String(),
});

const AuthPutBody = t.Object({
	email: t.String({
		format: "email"
	}),
	password: t.String(),
	newPassword: t.String(),
});

const AuthDeleteBody = t.Object({
	
});