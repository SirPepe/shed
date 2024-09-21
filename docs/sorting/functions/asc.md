[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [sorting](../README.md) / asc

# Function: asc()

> **asc**\<`T`\>(`a`, `b`): `1` \| `0` \| `-1`

Callback for `sort()` to sort numeric input in ascending order.

Example:

```javascript
[1, 12, 0, 10, 2].sort(asc);
// Result: [0, 1, 2, 10, 12];
```

## Type Parameters

• **T** *extends* `number` \| `bigint`

## Parameters

• **a**: `T`

• **b**: `T`

## Returns

`1` \| `0` \| `-1`

## Defined in

[src/sorting.ts:18](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/sorting.ts#L18)
