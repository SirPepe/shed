/**
 * A function that does nothing and accepts any number of arguments. Useful for
 * writing tests. **This function is sort-of superfluous in plain JavaScript**,
 * where `Function.prototype` can also serve as a do-nothing function, but
 * TypeScript users need a proper stand-alone do-nothing function.
 *
 * Example:
 *
 * ```typescript
 * noop(); // nothing happened!
 * noop(42); // still nothing!
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function noop (...args: any[]): void {}

/**
 * A unary function that does nothing and returns its argument. Useful for
 * writing tests or triggering side effects on lazily-evaluated generators.
 *
 * Example:
 *
 * ```typescript
 * const input = [42];
 * const output = identity(input);
 * input === output // > true
 * ```
 */
export function identity<T>(x: T): T {
  return x;
}

/**
 * Returns a function that fires `func()` when the next frame renders, at most
 * once per frame.
 * */
export function debounceRaf<A extends any[]>(
  func: (...args: A) => unknown,
): (...args: A) => void {
  let handle: number | undefined;
  return function(...args: A): void {
    if (typeof handle !== "undefined") {
      cancelAnimationFrame(handle);
    }
    handle = requestAnimationFrame(() => {
      handle = undefined;
      func(...args);
    });
  };
};
