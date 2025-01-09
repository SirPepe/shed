/**
 * Object utilities. Use this module by importing from `@sirpepe/shed/object`.
 */

import type { QueryPath } from "./types";
import { fail } from "./error";

/**
 * Returns an unusable object that throws when accessed in any way.
 */
export function trap<T extends object = any>(
  message: string | ((trap: keyof ProxyHandler<any>) => string),
): T {
  return new Proxy<T>(
    {} as any,
    Object.fromEntries(
      (
        [
          "apply",
          "construct",
          "defineProperty",
          "deleteProperty",
          "get",
          "getOwnPropertyDescriptor",
          "getPrototypeOf",
          "has",
          "isExtensible",
          "ownKeys",
          "preventExtensions",
          "set",
          "setPrototypeOf",
        ] as const
      ).map((trap) => [
        trap,
        () => fail(typeof message === "function" ? message(trap) : message),
      ]),
    ),
  );
}

/**
 * Returns a new object created from the input object, but without the keys in
 * `toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type
 * and the inverse of `picked()`.
 */
export function omitted<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  ...toOmit: K[]
): Omit<T, K> {
  const keysToOmit: Set<any> = new Set(toOmit);
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keysToOmit.has(key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * Returns a function that returns a new object created from its input object,
 * but without the keys in `toOmit`. Essentially a factory function for
 * functions that call `omitted()`.
 */
export function omitter<T extends Record<string, unknown>, K extends keyof T>(
  ...toOmit: K[]
): (obj: T) => Omit<T, K> {
  const keysToOmit: Set<any> = new Set(toOmit);
  return function (obj: T): Omit<T, K> {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (!keysToOmit.has(key)) {
        result[key] = value;
      }
    }
    return result;
  };
}

/**
 * Returns a new object created from the input object, but with only the keys in
 * `toKeep`. Essentially the runtime-variant of TypeScript's `Pick<T, K>` type
 * and the inverse of `omitted()`.
 */
export function picked<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  ...toKeep: K[]
): Pick<T, K> {
  const result: any = {};
  for (const key of new Set(toKeep)) {
    result[key] = obj[key];
  }
  return result;
}

/**
 * Returns a function that returns a new object created from its input object,
 * but with only the keys in `toKeep`. Essentially a factory function for
 * functions that call `picked()`.
 */
export function picker<T extends Record<string, unknown>, K extends keyof T>(
  ...toKeep: K[]
): (obj: T) => Pick<T, K> {
  const keysToKeep = new Set(toKeep);
  return function (obj: T): Pick<T, K> {
    const result: any = {};
    for (const key of keysToKeep) {
      result[key] = obj[key];
    }
    return result;
  };
}

/**
 * Returns a predicate that checks if its input object's "prop" field contains a
 * value equal to "value".
 */
export function where<T, K extends keyof T>(
  prop: K,
  value: T[K],
): (obj: T) => boolean {
  return function comparator(obj: T) {
    return obj[prop] === value;
  };
}

/**
 * Returns a predicate that checks if its input object's "prop" field contains a
 * value not equal to "value".
 */
export function whereNot<T, K extends keyof T>(
  prop: K,
  value: T[K],
): (obj: T) => boolean {
  return function comparator(obj: T) {
    return obj[prop] !== value;
  };
}

/**
 * Returns a getter function that returns every object's "prop" value.
 */
export function select<T, K extends keyof T>(prop: K): (obj: T) => T[K] {
  return function getter(obj: T) {
    return obj[prop];
  };
}

function get(target: any, segments: string[]): any {
  for (let i = 0; i < segments.length; i++) {
    if (!target) {
      return undefined;
    }
    target = target[segments[i]];
  }
  return target;
}

export function getPath<T extends object>(obj: T, path: "."): T;
export function getPath<T extends object, P extends string>(
  obj: T,
  path: P,
): QueryPath<T, P>;
export function getPath<T extends object, P extends string>(
  obj: T,
  path: P,
): any {
  if (path === ".") {
    return obj;
  }
  return get(obj, path.split("."));
}

export function setPath<T extends object>(obj: T, path: ".", value: T): void;
export function setPath<T extends object, P extends string>(
  obj: T,
  path: P,
  val: QueryPath<T, P>,
): void;
export function setPath<T extends object, P extends string>(
  obj: T,
  path: P,
  value: any,
): void {
  if (path === ".") {
    Object.assign(obj, value);
  }
  const segments: any[] = path.split(".");
  const target = get(obj, segments.slice(0, -1));
  if (target) {
    target[segments.at(-1)] = value;
  }
}
