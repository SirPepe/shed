export function isMap<K, V>(x: unknown): x is Map<K, V> {
  return typeof x !== "undefined" && x !== null && Object.prototype.toString.call(x) === "[object Map]";
}
