/**
 * Utility types for TypeScript. Use this module by importing from
 * `@sirpepe/shed/types` or `@sirpepe/shed`.
 *
 * @module
 */

/* eslint-disable */

/**
 * Splits a tuple type into a LHS and a RHS on index `I`
 */
export type SplitTuple<R extends unknown[], I extends number, L extends unknown[] = []> =
  L["length"] extends I
    ? [L, R]
    : R extends [infer First, ...infer Rest]
      ? SplitTuple<[...Rest], I, [...L, First]>
      : [L, R];

/**
 * Drops the first element from a tuple type.
 */
export type DropFirst<T extends unknown[]> =
  T extends [any, ...infer Rest]
    ? Rest
    : T;

/**
 * Drops the element at index `I` from a tuple type.
 */
export type Drop<T extends unknown[], I extends number> = [
  ...SplitTuple<T, I>[0],
  ...DropFirst<SplitTuple<T, I>[1]>
];

/**
 * This vile concoction creates an index type that maps the members of
 * union `U` by their discriminant `K` with `MapDiscriminatedUnion<U, K>`
 */
type DiscriminateUnion<Union, Key extends keyof Union, Value extends Union[Key]> = Union extends Record<Key, Value> ? Union : never;
export type MapDiscriminatedUnion<Union extends Record<Key, string>, Key extends keyof Union> = {
    [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value>;
};
