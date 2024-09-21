[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [guard](../README.md) / isNot

# Function: isNot()

> **isNot**\<`T`\>(`x`): x is undefined \| null

Returns true when the argument is null or undefined. Works as a type guard in
TypeScript. The inverse of `is()`.

Example:

```typescript
isNot(42); // false
isNot(0); // false
isNot(null); // true
isNot(undefined); // true
```

## Type Parameters

• **T**

## Parameters

• **x**: `undefined` \| `null` \| `T`

## Returns

x is undefined \| null

## Defined in

[src/guard.ts:41](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/guard.ts#L41)
