import Elysia from "elysia";
import AuthService from "../services/auth";

const UserController = new Elysia()
	.use(AuthService)
	.get("/profile", ({ Auth }) => {
		return Auth.user;
	}, { isSignIn: true });

export default UserController;