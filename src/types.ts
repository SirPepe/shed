/**
 * Utility types for TypeScript. Use this module by importing from
 * `@sirpepe/shed/types` or `@sirpepe/shed`.
 *
 * @module
 */

/* eslint-disable */

/**
 * This vile concoction creates an index type that maps the members of
 * union `U` by their discriminant `K` with `MapDiscriminatedUnion<U, K>`
 */
type DiscriminateUnion<Union, Key extends keyof Union, Value extends Union[Key]> = Union extends Record<Key, Value> ? Union : never;
export type MapDiscriminatedUnion<Union extends Record<Key, string>, Key extends keyof Union> = {
    [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value>;
};
