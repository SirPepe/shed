/**
 * Just like a regular map, but throws when attempting to get a key that is not
 * in the map (effectively adding a type assertion to `get()`). Because `get()`
 * returns `V` instead of `V | undefined` this makes life in TypeScript somewhat
 * easier.
 */
export class UnsafeMap<K, V> extends Map<K, V> {
  public errorFactory: (key: K) => Error;
  constructor(
    entries: Iterable<[K, V]> = [],
    errorFactory = (key: K): Error => new Error(`UnsafeMap missing key ${key}`)
  ) {
    super(entries);
    this.errorFactory = errorFactory;
  }

  public get(key: K): V {
    if (!this.has(key)) {
      throw this.errorFactory(key);
    }
    return super.get(key) as V;
  }
}
