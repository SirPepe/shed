/**
 * Maps keys to values and, in contrast to regular maps, also vice versa. Mostly
 * this is an abstraction over two individual maps with all the bookkeeping
 * taken care of. The API should be fairly self-explanatory - it is essentially
 * equal to that of a regular map, just with every operation duplicated to
 * support both key- and value-oriented approaches.
 */
export class BiMap<K, V> {
  private byKey: Map<K, V>;
  private byVal: Map<V, K>;

  constructor(values: Iterable<[K, V]> = []) {
    this.byKey = new Map(values);
    this.byVal = new Map(Array.from(values, ([k, v]) => [v, k]));
  }

  public set(key: K, val: V): void {
    this.byKey.set(key, val);
    this.byVal.set(val, key);
  }

  public hasKey(key: K): boolean {
    return this.byKey.has(key);
  }

  public hasVal(val: V): boolean {
    return this.byVal.has(val);
  }

  public getByKey(key: K): V | undefined {
    return this.byKey.get(key);
  }

  public getByVal(val: V): K | undefined {
    return this.byVal.get(val);
  }

  public deleteByKey(key: K): void {
    const val = this.byKey.get(key) as V;
    this.byKey.delete(key);
    this.byVal.delete(val);
  }

  public deleteByVal(val: V): void {
    const key = this.byVal.get(val) as K;
    this.byVal.delete(val);
    this.byKey.delete(key);
  }

  public clear(): void {
    this.byKey.clear();
    this.byVal.clear();
  }

  public keys(): Iterable<K> {
    return this.byKey.keys();
  }

  public values(): Iterable<V> {
    return this.byVal.keys();
  }

  public entries(): Iterable<[K, V]> {
    return this.byKey.entries();
  }

  public get size(): number {
    return this.byKey.size;
  }

  public get [Symbol.iterator](): () => IterableIterator<[K, V]> {
    return () => this.byKey.entries();
  }
}
