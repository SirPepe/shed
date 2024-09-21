[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [assert](../README.md) / assertIsPrimitive

# Function: assertIsPrimitive()

> **assertIsPrimitive**(`x`, `msg`): `asserts x is Primitive`

Throws an exception when the first argument is not not a primitive. The
second argument can be used to customize the exception, but is entirely
optional. This function works as a type assertion in TypeScript.

Example:

```typescript
assertIsPrimitive(null, , "Oops"); // nothing happens
assertIsPrimitive([42], "Oops"); // TypeError: "Oops"
```

## Parameters

• **x**: `any`

• **msg**: `string` = `...`

## Returns

`asserts x is Primitive`

## Defined in

[src/assert.ts:68](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/assert.ts#L68)
