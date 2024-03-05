[@sirpepe/shed](../README.md) / object

# Module: object

Object utilities. Use this module by importing from `@sirpepe/shed/object`.

## Table of contents

### Functions

- [getPath](object.md#getpath)
- [omitted](object.md#omitted)
- [omitter](object.md#omitter)
- [picked](object.md#picked)
- [picker](object.md#picker)
- [select](object.md#select)
- [setPath](object.md#setpath)
- [where](object.md#where)
- [whereNot](object.md#wherenot)

## Functions

### getPath

▸ **getPath**\<`T`, `P`\>(`obj`, `path`): [`QueryPath`](types.md#querypath)\<`T`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `path` | `P` |

#### Returns

[`QueryPath`](types.md#querypath)\<`T`, `P`\>

#### Defined in

[src/object.ts:127](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L127)

___

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

[src/object.ts:14](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L14)

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

[src/object.ts:33](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L33)

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

[src/object.ts:53](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L53)

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

[src/object.ts:69](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L69)

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

[src/object.ts:111](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L111)

___

### setPath

▸ **setPath**\<`T`, `P`\>(`obj`, `path`, `value`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `path` | `P` |
| `value` | [`QueryPath`](types.md#querypath)\<`T`, `P`\> |

#### Returns

`void`

#### Defined in

[src/object.ts:131](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L131)

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

[src/object.ts:86](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L86)

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

[src/object.ts:99](https://github.com/SirPepe/shed/blob/3f21ef8/src/object.ts#L99)
