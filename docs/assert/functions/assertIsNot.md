[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [assert](../README.md) / assertIsNot

# Function: assertIsNot()

> **assertIsNot**\<`T`\>(`x`, `msg`): asserts x is undefined \| null

Throws an exception when the first argument is not null or undefined. The
second argument can be used to customize the exception, but is entirely
optional. This function works as a type assertion in TypeScript and is the
inverse of `assertIs()`.

Example:

```typescript
assertIsNot(null, , "Oops"); // nothing happens
assertIsNot(42, "Oops"); // Error: "Oops"
```

## Type Parameters

• **T**

## Parameters

• **x**: `undefined` \| `null` \| `T`

• **msg**: `string` = `...`

## Returns

asserts x is undefined \| null

## Defined in

[src/assert.ts:46](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/assert.ts#L46)
