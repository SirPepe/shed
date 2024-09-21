[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [object](../README.md) / picker

# Function: picker()

> **picker**\<`T`, `K`\>(...`toKeep`): (`obj`) => `Pick`\<`T`, `K`\>

Returns a function that returns a new object created from its input object,
but with only the keys in `toKeep`. Essentially a factory function for
functions that call `picked()`.

## Type Parameters

• **T** *extends* `Record`\<`string`, `unknown`\>

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• ...**toKeep**: `K`[]

## Returns

`Function`

### Parameters

• **obj**: `T`

### Returns

`Pick`\<`T`, `K`\>

## Defined in

[src/object.ts:69](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/object.ts#L69)
