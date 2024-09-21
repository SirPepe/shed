[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [object](../README.md) / omitted

# Function: omitted()

> **omitted**\<`T`, `K`\>(`obj`, ...`toOmit`): `Omit`\<`T`, `K`\>

Returns a new object created from the input object, but without the keys in
`toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type
and the inverse of `picked()`.

## Type Parameters

• **T** *extends* `Record`\<`string`, `unknown`\>

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **obj**: `T`

• ...**toOmit**: `K`[]

## Returns

`Omit`\<`T`, `K`\>

## Defined in

[src/object.ts:14](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/object.ts#L14)
