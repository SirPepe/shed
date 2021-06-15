[@sirpepe/shed](../README.md) / assert

# Module: assert

## Table of contents

### Functions

- [assertIs](assert.md#assertis)
- [assertIsNot](assert.md#assertisnot)

## Functions

### assertIs

▸ **assertIs**<T\>(`x`, `msg?`): asserts x is T

Throws an exceptions when the first argument is null or undefined. Works
as a type assertion in TypeScript. The inverse of `assertIsNot()`.

Example:

```typescript
assertIs(42, "Oops"); // nothing happens
assertIs(null, , "Oops"); // Error: "Oops"
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` \| `undefined` \| ``null`` |
| `msg` | `string` |

#### Returns

asserts x is T

#### Defined in

[assert.ts:12](https://github.com/SirPepe/shed/blob/09bef43/src/assert.ts#L12)

___

### assertIsNot

▸ **assertIsNot**<T\>(`x`, `msg?`): asserts x is undefined \| null

Throws an exceptions when the first argument is not null or undefined. Works
as a type assertion in TypeScript. The inverse of `assertIs()`.

Example:

```typescript
assertIsNot(null, , "Oops"); // nothing happens
assertIsNot(42, "Oops"); // Error: "Oops"
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` \| `undefined` \| ``null`` |
| `msg` | `string` |

#### Returns

asserts x is undefined \| null

#### Defined in

[assert.ts:32](https://github.com/SirPepe/shed/blob/09bef43/src/assert.ts#L32)
