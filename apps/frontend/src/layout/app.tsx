import { createResource } from "solid-js";
import { api } from "../client";
import { Navbar } from "../components/Navbar";
import type { RouteSectionProps } from "@solidjs/router";

export function AppLayout(props: RouteSectionProps) {

	const [hello] = createResource(() => api.api.hello.get());

	return (
		<div class="grid grid-cols-12">
			<Navbar />
			<main class="col-span-11">
				{props.children}
			</main>
			<footer class="bg-white text-black p-4">
				{hello.loading ? "Loading..." : hello()?.data}
			</footer>
		</div>
	);
}