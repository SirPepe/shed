[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [function](../README.md) / identity

# Function: identity()

> **identity**\<`T`\>(`x`): `T`

A unary function that does nothing and returns its argument. Useful for
writing tests or triggering side effects on lazily-evaluated generators.

Example:

```typescript
const input = [42];
const output = identity(input);
input === output // > true
```

## Type Parameters

• **T**

## Parameters

• **x**: `T`

## Returns

`T`

## Defined in

[src/function.ts:36](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/function.ts#L36)
