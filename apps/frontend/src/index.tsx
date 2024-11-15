/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App.tsx';
import "./index.css";
import { Router } from '@solidjs/router';

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root element not found');
}

render(() => (
	<Router root={App}>

	</Router>
), root);
