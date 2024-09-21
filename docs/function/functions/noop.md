[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [function](../README.md) / noop

# Function: noop()

> **noop**(...`args`): `void`

A function that does nothing and accepts any number of arguments. Useful for
writing tests. **This function is sort-of superfluous in plain JavaScript**,
where `Function.prototype` can also serve as a do-nothing function, but
TypeScript users need a proper stand-alone do-nothing function.

Example:

```typescript
noop(); // nothing happened!
noop(42); // still nothing!
```

## Parameters

• ...**args**: `any`[]

## Returns

`void`

## Defined in

[src/function.ts:22](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/function.ts#L22)
