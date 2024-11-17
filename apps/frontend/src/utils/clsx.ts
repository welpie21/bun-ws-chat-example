import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string
 * and makes sure certain tailwind classes are merged together.
 * @param classes 
 * @returns string
 */
export function cn(...classes: ClassValue[]): string {
	return twMerge(clsx(classes));
}