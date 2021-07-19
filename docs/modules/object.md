[@sirpepe/shed](../README.md) / object

# Module: object

## Table of contents

### Functions

- [omitted](object.md#omitted)
- [picked](object.md#picked)

## Functions

### omitted

▸ **omitted**<T, K\>(`obj`, ...`toOmit`): `Omit`<T, K\>

Returns a new object created from the input object, but without the keys in
`toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type
and the inverse of `picked()`.

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

[src/object.ts:6](https://github.com/SirPepe/shed/blob/bf37162/src/object.ts#L6)

___

### picked

▸ **picked**<T, K\>(`obj`, ...`toKeep`): `Omit`<T, K\>

Returns a new object created from the input object, but with only the keys in
`toKeep`. Essentially the runtime-variant of TypeScript's `Pick<T, K>` type
and the inverse of `omitted()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `object` |
| `K` | `K`: `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `...toKeep` | `K`[] |

#### Returns

`Omit`<T, K\>

#### Defined in

[src/object.ts:25](https://github.com/SirPepe/shed/blob/bf37162/src/object.ts#L25)
