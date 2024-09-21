/**
 * Utility types for TypeScript. Use this module by importing from
 * `@sirpepe/shed/types`.
 *
 * @module
 */

/* eslint-disable */

/**
 * Splits a tuple type into a LHS and a RHS on index `I`
 */
export type SplitTuple<
  R extends unknown[],
  I extends number,
  L extends unknown[] = [],
> = L["length"] extends I
  ? [L, R]
  : R extends [infer First, ...infer Rest]
    ? SplitTuple<[...Rest], I, [...L, First]>
    : [L, R];

/**
 * Drops the first element from a tuple type.
 */
export type DropFirst<T extends unknown[]> = T extends [any, ...infer Rest]
  ? Rest
  : T;

/**
 * Drops the element at index `I` from a tuple type.
 */
export type Drop<T extends unknown[], I extends number> = [
  ...SplitTuple<T, I>[0],
  ...DropFirst<SplitTuple<T, I>[1]>,
];

/**
 * This vile concoction creates an index type that maps the members of
 * union `U` by their discriminant `K` with `MapDiscriminatedUnion<U, K>`
 */
type DiscriminateUnion<
  Union,
  Key extends keyof Union,
  Value extends Union[Key],
> = Union extends Record<Key, Value> ? Union : never;
export type MapDiscriminatedUnion<
  Union extends Record<Key, string>,
  Key extends keyof Union,
> = {
  [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value>;
};

/**
 * Makes select keys on `Source` optional
 */
export type Optional<Source, Keys extends keyof Source> = {
  [Key in Keys]?: Source[Key];
} & Pick<Source, Exclude<keyof Source, Keys>>;

/**
 * Makes select keys on `Source` required
 */
export type NonOptional<Source, Keys extends keyof Source> = {
  [Key in Keys]-?: Source[Key];
} & Pick<Source, Exclude<keyof Source, Keys>>;

type SplitPath<
  Path extends string,
  Segments extends string[] = [],
> = Path extends `${infer First}.${infer Rest}`
  ? SplitPath<Rest, [...Segments, First]>
  : [...Segments, Path];

type QuerySegments<T, Segments extends any[]> = Segments extends []
  ? T
  : Segments[0] extends keyof T
    ? QuerySegments<T[Segments[0]], DropFirst<Segments>>
    : unknown;

/**
 * Returns the type of a nested object member
 */
export type QueryPath<T, Path extends string> = QuerySegments<
  T,
  SplitPath<Path>
>;

type Whitespace = " " | "\n";

type TrimLeft<T extends string> = T extends `${Whitespace}${infer Rest}`
  ? TrimLeft<Rest>
  : T;

type TrimRight<T extends string> = T extends `${infer Rest}${Whitespace}`
  ? TrimRight<Rest>
  : T;

export type Trim<T extends string> = TrimLeft<TrimRight<T>>;

export type Split<Str extends string, Last = never> = Str extends any
  ? Trim<Str> extends `${infer First}${Whitespace}${infer Rest}`
    ? Split<Rest, Split<First> | Last>
    : Trim<Str> | Last
  : never;

/*
 * Any non-object
 */
export type Primitive =
  | string
  | boolean
  | number
  | undefined
  | null
  | symbol
  | bigint;
