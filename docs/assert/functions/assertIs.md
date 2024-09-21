[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [assert](../README.md) / assertIs

# Function: assertIs()

> **assertIs**\<`T`\>(`x`, `msg`): `asserts x is T`

Throws an exception when the first argument is null or undefined. The second
argument can be used to customize the exception, but is entirely optional.
This function works as a type assertion in TypeScript and is the inverse of
`assertIsNot()`.

Example:

```typescript
assertIs(42, "Oops"); // nothing happens
assertIs(null, , "Oops"); // Error: "Oops"
```

## Type Parameters

• **T**

## Parameters

• **x**: `undefined` \| `null` \| `T`

• **msg**: `string` = `...`

## Returns

`asserts x is T`

## Defined in

[src/assert.ts:24](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/assert.ts#L24)
