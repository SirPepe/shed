[@sirpepe/shed](../README.md) / number

# Module: number

Utilities for numbers of all types. Use this module by importing from
`@sirpepe/shed/number` or `@sirpepe/shed`.

## Table of contents

### Functions

- [isReal](number.md#isreal)
- [roundFloat](number.md#roundfloat)

## Functions

### isReal

▸ **isReal**(`x`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/number.ts:22](https://github.com/SirPepe/shed/blob/e855f2d/src/number.ts#L22)

___

### roundFloat

▸ **roundFloat**(`value`, `digits`): `number`

Round a float value to `digits` decimal places. Examples:

```javascript
roundFloat(1.555, 2); // > 1.56
roundFloat(1.005, 2); // 1.01
roundFloat(2 / 3, 4); // 0.6667
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `digits` | `number` |

#### Returns

`number`

#### Defined in

[src/number.ts:47](https://github.com/SirPepe/shed/blob/e855f2d/src/number.ts#L47)