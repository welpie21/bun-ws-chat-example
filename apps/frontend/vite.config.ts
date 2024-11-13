import { defineConfig } from 'vite';
import deno from '@deno/vite-plugin';
import solid from 'vite-plugin-solid';
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [deno(), solid()],
	build: {
		outDir: resolve(__dirname, '../../.deno/frontend/dist')
	}
});
