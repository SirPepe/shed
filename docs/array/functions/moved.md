[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [array](../README.md) / moved

# Function: moved()

> **moved**\<`T`\>(`arr`, `from`, `to`): `T`[]

Moves an element from one position in an array to another position, creating
a new array. See `move()` for a mutating variant of this function.

Example:

```javascript
let input = [0, 1, 2, 3, 4];
output = moved(input, 1, 3);
// output is [0, 2, 3, 1, 4], input stays the same
```

Negative `from` indices pick an element from the end of the array. Indices
that out of bound are truncated to the nearest valid index - this function
will never yield a sparse array.

## Type Parameters

• **T**

## Parameters

• **arr**: `T`[]

• **from**: `number`

• **to**: `number`

## Returns

`T`[]

## Defined in

[src/array.ts:45](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/array.ts#L45)
