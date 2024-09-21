[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [object](../README.md) / omitter

# Function: omitter()

> **omitter**\<`T`, `K`\>(...`toOmit`): (`obj`) => `Omit`\<`T`, `K`\>

Returns a function that returns a new object created from its input object,
but without the keys in `toOmit`. Essentially a factory function for
functions that call `omitted()`.

## Type Parameters

• **T** *extends* `Record`\<`string`, `unknown`\>

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• ...**toOmit**: `K`[]

## Returns

`Function`

### Parameters

• **obj**: `T`

### Returns

`Omit`\<`T`, `K`\>

## Defined in

[src/object.ts:33](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/object.ts#L33)
