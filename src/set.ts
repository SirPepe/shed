export function isSet<T>(x: unknown): x is Set<T> {
  return (
    typeof x !== "undefined" &&
    x !== null &&
    Object.prototype.toString.call(x) === "[object Set]"
  );
}
