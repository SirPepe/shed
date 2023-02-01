[@sirpepe/shed](../README.md) / guard

# Module: guard

Collection of type guards. Use this module by importing from
`@sirpepe/shed/guard` or `@sirpepe/shed`.

## Table of contents

### Functions

- [is](guard.md#is)
- [isNot](guard.md#isnot)

## Functions

### is

▸ **is**<`T`\>(`x`): x is T

Returns true when the argument is neither null nor undefined. Works as a type
guard in TypeScript. The inverse of `isNot()`.

Example:

```typescript
is(42); // true
is(0); // true
is(null); // false
is(undefined); // false
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `undefined` \| ``null`` \| `T` |

#### Returns

x is T

#### Defined in

[src/guard.ts:21](https://github.com/SirPepe/shed/blob/af754f8/src/guard.ts#L21)

___

### isNot

▸ **isNot**<`T`\>(`x`): x is undefined \| null

Returns true when the argument is null or undefined. Works as a type guard in
TypeScript. The inverse of `is()`.

Example:

```typescript
isNot(42); // false
isNot(0); // false
isNot(null); // true
isNot(undefined); // true
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `undefined` \| ``null`` \| `T` |

#### Returns

x is undefined \| null

#### Defined in

[src/guard.ts:41](https://github.com/SirPepe/shed/blob/af754f8/src/guard.ts#L41)
