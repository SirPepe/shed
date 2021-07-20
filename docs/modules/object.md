[@sirpepe/shed](../README.md) / object

# Module: object

## Table of contents

### Functions

- [omitted](object.md#omitted)
- [omitter](object.md#omitter)
- [picked](object.md#picked)
- [picker](object.md#picker)

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

[src/object.ts:6](https://github.com/SirPepe/shed/blob/5ac37c8/src/object.ts#L6)

___

### omitter

▸ **omitter**<T, K\>(...`toOmit`): (`obj`: `T`) => `Omit`<T, K\>

Returns a function that returns a new object created from its input object,
but without the keys in `toOmit`. Essentially a factory function for
functions that call `omitted()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `object` |
| `K` | `K`: `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...toOmit` | `K`[] |

#### Returns

`fn`

▸ (`obj`): `Omit`<T, K\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`Omit`<T, K\>

#### Defined in

[src/object.ts:25](https://github.com/SirPepe/shed/blob/5ac37c8/src/object.ts#L25)

___

### picked

▸ **picked**<T, K\>(`obj`, ...`toKeep`): `Pick`<T, K\>

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

`Pick`<T, K\>

#### Defined in

[src/object.ts:46](https://github.com/SirPepe/shed/blob/5ac37c8/src/object.ts#L46)

___

### picker

▸ **picker**<T, K\>(...`toKeep`): (`obj`: `T`) => `Pick`<T, K\>

Returns a function that returns a new object created from its input object,
but with only the keys in `toKeep`. Essentially a factory function for
functions that call `picked()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `object` |
| `K` | `K`: `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...toKeep` | `K`[] |

#### Returns

`fn`

▸ (`obj`): `Pick`<T, K\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`Pick`<T, K\>

#### Defined in

[src/object.ts:62](https://github.com/SirPepe/shed/blob/5ac37c8/src/object.ts#L62)
