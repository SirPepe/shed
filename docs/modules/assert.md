[@sirpepe/shed](../README.md) / assert

# Module: assert

Collection of assert functions that not only throw errors at runtime, but
also work as assertions in TypeScript. Use this module by importing from
`@sirpepe/shed/assert`.

## Table of contents

### Functions

- [assertIs](assert.md#assertis)
- [assertIsNot](assert.md#assertisnot)

## Functions

### assertIs

▸ **assertIs**\<`T`\>(`x`, `msg?`): asserts x is T

Throws an exception when the first argument is null or undefined. The second
argument can be used to customize the exception, but is entirely optional.
This function works as a type assertion in TypeScript and is the inverse of
`assertIsNot()`.

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
| `x` | `undefined` \| ``null`` \| `T` |
| `msg` | `string` |

#### Returns

asserts x is T

#### Defined in

[src/assert.ts:22](https://github.com/SirPepe/shed/blob/a2b2848/src/assert.ts#L22)

___

### assertIsNot

▸ **assertIsNot**\<`T`\>(`x`, `msg?`): asserts x is undefined \| null

Throws an exception when the first argument is not null or undefined. The
second argument can be used to customize the exception, but is entirely
optional. This function works as a type assertion in TypeScript and is the
inverse of `assertIs()`.

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
| `x` | `undefined` \| ``null`` \| `T` |
| `msg` | `string` |

#### Returns

asserts x is undefined \| null

#### Defined in

[src/assert.ts:43](https://github.com/SirPepe/shed/blob/a2b2848/src/assert.ts#L43)
