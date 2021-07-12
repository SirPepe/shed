[@sirpepe/shed](../README.md) / object

# Module: object

## Table of contents

### Functions

- [omitted](object.md#omitted)

## Functions

### omitted

▸ **omitted**<T, K\>(`obj`, ...`toOmit`): `Omit`<T, K\>

Returns a new object created from the input object, but without the keys in
`toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `object` |
| `K` | `K`: `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `...toOmit` | `K`[] |

#### Returns

`Omit`<T, K\>

#### Defined in

src/object.ts:5
