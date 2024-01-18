[@sirpepe/shed](../README.md) / object

# Module: object

Object utilities. Use this module by importing from `@sirpepe/shed/object`.

## Table of contents

### Functions

- [omitted](object.md#omitted)
- [omitter](object.md#omitter)
- [picked](object.md#picked)
- [picker](object.md#picker)
- [select](object.md#select)
- [where](object.md#where)
- [whereNot](object.md#wherenot)

## Functions

### omitted

▸ **omitted**\<`T`, `K`\>(`obj`, `...toOmit`): `Omit`\<`T`, `K`\>

Returns a new object created from the input object, but without the keys in
`toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type
and the inverse of `picked()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `...toOmit` | `K`[] |

#### Returns

`Omit`\<`T`, `K`\>

#### Defined in

[src/object.ts:12](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L12)

___

### omitter

▸ **omitter**\<`T`, `K`\>(`...toOmit`): (`obj`: `T`) => `Omit`\<`T`, `K`\>

Returns a function that returns a new object created from its input object,
but without the keys in `toOmit`. Essentially a factory function for
functions that call `omitted()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...toOmit` | `K`[] |

#### Returns

`fn`

▸ (`obj`): `Omit`\<`T`, `K`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`Omit`\<`T`, `K`\>

#### Defined in

[src/object.ts:31](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L31)

___

### picked

▸ **picked**\<`T`, `K`\>(`obj`, `...toKeep`): `Pick`\<`T`, `K`\>

Returns a new object created from the input object, but with only the keys in
`toKeep`. Essentially the runtime-variant of TypeScript's `Pick<T, K>` type
and the inverse of `omitted()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `...toKeep` | `K`[] |

#### Returns

`Pick`\<`T`, `K`\>

#### Defined in

[src/object.ts:51](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L51)

___

### picker

▸ **picker**\<`T`, `K`\>(`...toKeep`): (`obj`: `T`) => `Pick`\<`T`, `K`\>

Returns a function that returns a new object created from its input object,
but with only the keys in `toKeep`. Essentially a factory function for
functions that call `picked()`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `unknown`\> |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...toKeep` | `K`[] |

#### Returns

`fn`

▸ (`obj`): `Pick`\<`T`, `K`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`Pick`\<`T`, `K`\>

#### Defined in

[src/object.ts:67](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L67)

___

### select

▸ **select**\<`T`, `K`\>(`prop`): (`obj`: `T`) => `T`[`K`]

Returns a getter function that returns every object's "prop" value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `K` |

#### Returns

`fn`

▸ (`obj`): `T`[`K`]

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`T`[`K`]

#### Defined in

[src/object.ts:109](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L109)

___

### where

▸ **where**\<`T`, `K`\>(`prop`, `value`): (`obj`: `T`) => `boolean`

Returns a predicate that checks if its input object's "prop" field contains a
value equal to "value".

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `K` |
| `value` | `T`[`K`] |

#### Returns

`fn`

▸ (`obj`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`boolean`

#### Defined in

[src/object.ts:84](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L84)

___

### whereNot

▸ **whereNot**\<`T`, `K`\>(`prop`, `value`): (`obj`: `T`) => `boolean`

Returns a predicate that checks if its input object's "prop" field contains a
value not equal to "value".

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prop` | `K` |
| `value` | `T`[`K`] |

#### Returns

`fn`

▸ (`obj`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

##### Returns

`boolean`

#### Defined in

[src/object.ts:97](https://github.com/SirPepe/shed/blob/40637e0/src/object.ts#L97)
