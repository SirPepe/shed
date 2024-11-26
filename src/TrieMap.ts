/**
 * A trie (prefix tree) that stores values in maps. Very much inspired by
 * https://github.com/anko/array-keyed-map, but very different in some regards:
 *   - additional `prune()` method
 *   - no `size` (which is hard to implement when `prune()` exists)
 *   - no support for objects in paths (for fear of memory leaks)
 * Use this module by importing from `@sirpepe/shed/TrieMap`.
 *
 * @module
 */

import { assertIsPrimitive } from "./assert";
import type { Primitive } from "./types";

const DATA_KEY: unique symbol = Symbol();

type Backend<K, V> = Map<K | typeof DATA_KEY, V | Backend<K, V>>;

export class TrieMap<K extends Primitive, V> {
  #backend: Backend<K, V> = new Map();

  static *#unwrapBackend<K, V>(
    backend: Backend<K, V>,
  ): IterableIterator<V, undefined, undefined> {
    for (const [key, value] of backend) {
      if (key === DATA_KEY) {
        yield value as V;
      } else {
        yield* this.#unwrapBackend(value as Backend<K, V>);
      }
    }
  }

  [Symbol.iterator]() {
    return TrieMap.#unwrapBackend(this.#backend);
  }

  constructor(initialEntries: [K[], V][] = []) {
    for (const [path, value] of initialEntries) {
      this.set(path, value);
    }
  }

  set(path: K[], value: V) {
    path.forEach((p) => assertIsPrimitive(p));
    let map = this.#backend;
    for (const item of path) {
      let nextMap = map.get(item) as Backend<K, V> | undefined;
      if (!nextMap) {
        nextMap = new Map();
        map.set(item, nextMap);
      }
      map = nextMap;
    }
    map.set(DATA_KEY, value);
  }

  has(path: K[]) {
    path.forEach((p) => assertIsPrimitive(p));
    let map = this.#backend;
    for (const item of path) {
      const nextMap = map.get(item) as Backend<K, V> | undefined;
      if (nextMap) {
        map = nextMap;
      } else {
        return false;
      }
    }
    return map.has(DATA_KEY);
  }

  hasPrefix(path: K[]) {
    path.forEach((p) => assertIsPrimitive(p));
    let map: Backend<K, V> | undefined = this.#backend;
    for (const item of path) {
      map = map.get(item) as Backend<K, V> | undefined;
      if (!map) {
        return false;
      }
    }
    return true;
  }

  get(path: K[]) {
    path.forEach((p) => assertIsPrimitive(p));
    let map: Backend<K, V> | undefined = this.#backend;
    for (const item of path) {
      map = map.get(item) as Backend<K, V> | undefined;
      if (!map) {
        return undefined;
      }
    }
    return map.get(DATA_KEY);
  }

  delete(path: K[]) {
    path.forEach((p) => assertIsPrimitive(p));
    let map = this.#backend;
    const stack = [];
    for (const item of path) {
      const nextMap = map.get(item) as Backend<K, V> | undefined;
      if (nextMap) {
        stack.unshift({ parent: map, child: nextMap, item });
        map = nextMap;
      } else {
        return false; // Nothing to delete
      }
    }
    const actuallyDeletedSomething = map.delete(DATA_KEY);
    if (actuallyDeletedSomething) {
      for (const { parent, child, item } of stack) {
        if (child.size === 0) {
          parent.delete(item);
        }
      }
    }
    return actuallyDeletedSomething;
  }

  prune(path: K[]) {
    path.forEach((p) => assertIsPrimitive(p));
    let map: Backend<K, V> | undefined = this.#backend;
    for (const item of path.slice(0, -1)) {
      map = map.get(item) as Backend<K, V> | undefined;
      if (!map) {
        return false;
      }
    }
    return map.delete(path.at(-1)!);
  }

  clear(): void {
    this.#backend.clear();
  }

  get [Symbol.toStringTag]() {
    return "TrieMap";
  }

  toJSON(): never {
    throw new TypeError("Can't convert TrieMap to JSON");
  }
}
