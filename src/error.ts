/**
 * Error utilities. Use this module by importing from `@sirpepe/shed/error`.
 *
 * @module
 */

/**
 * A function that throws an error when called.
 *
 * Example:
 *
 * ```
 * try {
 *   fail("BOOM!");
 * } catch (error) {
 *   console.log(error.message); // > "BOOM!"
 * }
 * ```
 *
 * This is useful if you want to trigger exceptions in places where only
 * expressions are allowed:
 *
 * ```typescript
 * function argumentRequired(arg = fail("Missing argument")) {}
 * ```
 */

type FailOptions = {
  ErrorConstructor?: new (reason?: string, cause?: Error) => Error;
  cause?: Error;
};

export function fail(
  reason?: string,
  { ErrorConstructor = Error, cause = undefined }: FailOptions = {}
): never {
  throw new ErrorConstructor(reason, cause);
}
