export function isSet<T>(x: unknown): x is Set<T> {
  return (
    typeof x !== "undefined" &&
    x !== null &&
    Object.prototype.toString.call(x) === "[object Set]"
  );
}

export function addAll<T>(target: Set<T>, ...groups: Iterable<T>[]): void {
  for (const group of groups) {
    for (const item of group) {
      target.add(item);
    }
  }
}
