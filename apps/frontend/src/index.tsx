/* @refresh reload */
import { render } from 'solid-js/web';
import { type RouteDefinition, Router } from '@solidjs/router';
import { AuthLayout } from './layout/auth.tsx';
import { LoginPage } from './pages/auth/login.tsx';
import { RegisterPage } from './pages/auth/register.tsx';
import { AppPage } from './pages/app/index.tsx';
import { AppLayout } from './layout/app.tsx';
import "./index.css";

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root element not found');
}

const routes: RouteDefinition[] = [
	{
		path: "/",
		component: (props) => <AppLayout {...props} />,
		children: [
			{
				path: "/",
				component: (props) => <AppPage {...props} />
			}
		]
	},
	{
		path: "/",
		component: (props) => <AuthLayout {...props} />,
		children: [
			{
				path: "/login",
				component: (props) => <LoginPage {...props} />
			},
			{
				path: "/register",
				component: (props) => <RegisterPage {...props} />
			}
		]
	}
];

render(() => (
	<Router>
		{routes}
	</Router>
), root);
