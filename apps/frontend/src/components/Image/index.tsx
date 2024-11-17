import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type JSX } from "solid-js";
import { cn } from "../../utils/clsx";

const imageVariants = cva("", {
	variants: {
		radius: {
			sm: "rounded-sm",
			md: "rounded-md",
			lg: "rounded-lg",
			full: "rounded-full"
		}
	},
	defaultVariants: {
		radius: "md"
	}
});

type ImageProps = JSX.ImgHTMLAttributes<HTMLImageElement> &
	VariantProps<typeof imageVariants>;

function Image(props: ImageProps): JSX.Element {
	const [local, others] = splitProps(props, ["class", "radius"]);
	// biome-ignore lint/a11y/useAltText: <explanation>
	return (
		<img
			class={cn(imageVariants({ radius: local.radius }), local.class)}
			{...others}
		/>
	);
}

export { Image, imageVariants };
export type { ImageProps };