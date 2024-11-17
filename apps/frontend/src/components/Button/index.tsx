import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type JSX } from "solid-js";
import { cn } from "../../utils/clsx";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
);

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

function Button(props: ButtonProps): JSX.Element {
	const [local] = splitProps(props, ["class"]);
	return (
		<button
			class={cn(buttonVariants(), local.class)}
			{...props}
		>
			{props.children}
		</button>
	);
}

export { Button, buttonVariants };
export type { ButtonProps };