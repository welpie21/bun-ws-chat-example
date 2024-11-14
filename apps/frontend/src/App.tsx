import './App.css';
import { createSignal } from 'solid-js';
// @ts-expect-error Unable to infer type at the moment
import solidLogo from './assets/solid.svg';
import { createResource } from "solid-js";

async function getHelloWorld() {
	await new Promise((r) => setTimeout(r, 3000));
	return fetch("http://localhost:3000/api/hello").then(x => x.text());
}

function App() {
	const [count, setCount] = createSignal(0);
	const [r] = createResource(getHelloWorld, { initialValue: "loading..." });

	return (
		<div class="App">
			<img src="/vite-deno.svg" alt="Vite with Deno" />
			{r()}
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src="/vite.svg" class="logo" alt="Vite logo" />
				</a>
				<a href="https://www.solidjs.com" target="_blank">
					<img src={solidLogo} class="logo solid" alt="Solid logo" />
				</a>
			</div>
			<h1>Vite + Solid</h1>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count()}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Solid logos to learn more
			</p>
		</div>
	);
}

export default App;
