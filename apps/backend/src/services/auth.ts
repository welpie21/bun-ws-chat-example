import Elysia from "elysia";

const AuthService = new Elysia({ name: "Service.Auth" })
	.derive({ as: "scoped" }, ({ cookie: { session } }) => ({
		Auth: {
			user: session.value
		}
	}))
	.macro(({ onBeforeHandle }) => ({
		isSignIn(value: boolean) {
			onBeforeHandle(({ Auth, error }) => {
				if (!Auth?.user) {
					return error(401);
				}
			});
		}
	}));

export default AuthService;