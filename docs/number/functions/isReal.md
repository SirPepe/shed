[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [number](../README.md) / isReal

# Function: isReal()

> **isReal**(`x`): `boolean`

Returns `true` if `x` is a real number (ie finite and not NaN), be that a
BigInt or plain number.

Examples:

```javascript
let yup1 = isReal(7); // true
let yup2 = isReal(-1n); // true
let nope1 = isReal(NaN); // false
let nope2 = isReal(Infinity); // false
let nope3 = isReal("Hello"); // false
```

## Parameters

• **x**: `unknown`

## Returns

`boolean`

## Defined in

[src/number.ts:22](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/number.ts#L22)
