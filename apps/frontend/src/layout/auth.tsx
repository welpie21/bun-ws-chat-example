import type { RouteSectionProps } from "@solidjs/router";

export function AuthLayout(props: RouteSectionProps) {

	return (
		<div>
			{props.children}
		</div>
	);
}