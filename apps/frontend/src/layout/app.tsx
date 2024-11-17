import { Navbar } from "../components/Navbar";
import type { RouteSectionProps } from "@solidjs/router";

export function AppLayout(props: RouteSectionProps) {

	return (
		<div class="grid grid-cols-12">
			<Navbar />
			<main class="col-span-11">
				{props.children}
			</main>
		</div>
	);
}