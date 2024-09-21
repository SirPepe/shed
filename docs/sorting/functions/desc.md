[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [sorting](../README.md) / desc

# Function: desc()

> **desc**\<`T`\>(`a`, `b`): `1` \| `0` \| `-1`

Callback for `sort()` to sort numeric input in descending order.

Example:

```javascript
[1, 12, 0, 10, 2].sort(desc);
Result: [12, 10, 2, 1, 0];
```

## Type Parameters

• **T** *extends* `number` \| `bigint`

## Parameters

• **a**: `T`

• **b**: `T`

## Returns

`1` \| `0` \| `-1`

## Defined in

[src/sorting.ts:38](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/sorting.ts#L38)
