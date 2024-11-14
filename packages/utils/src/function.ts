/**
 * Returns the first argument passed to it.
 * @param value The value to return.
 */
export function identity<T>(value: T): T {
	return value;
}