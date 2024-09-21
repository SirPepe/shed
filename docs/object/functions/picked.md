[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [object](../README.md) / picked

# Function: picked()

> **picked**\<`T`, `K`\>(`obj`, ...`toKeep`): `Pick`\<`T`, `K`\>

Returns a new object created from the input object, but with only the keys in
`toKeep`. Essentially the runtime-variant of TypeScript's `Pick<T, K>` type
and the inverse of `omitted()`.

## Type Parameters

• **T** *extends* `Record`\<`string`, `unknown`\>

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **obj**: `T`

• ...**toKeep**: `K`[]

## Returns

`Pick`\<`T`, `K`\>

## Defined in

[src/object.ts:53](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/object.ts#L53)
