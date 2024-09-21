[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [object](../README.md) / whereNot

# Function: whereNot()

> **whereNot**\<`T`, `K`\>(`prop`, `value`): (`obj`) => `boolean`

Returns a predicate that checks if its input object's "prop" field contains a
value not equal to "value".

## Type Parameters

• **T**

• **K** *extends* `string` \| `number` \| `symbol`

## Parameters

• **prop**: `K`

• **value**: `T`\[`K`\]

## Returns

`Function`

### Parameters

• **obj**: `T`

### Returns

`boolean`

## Defined in

[src/object.ts:99](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/object.ts#L99)
