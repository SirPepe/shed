[@sirpepe/shed](../README.md) / [SortedArray](../modules/SortedArray.md) / SortedArray

# Class: SortedArray<T\>

[SortedArray](../modules/SortedArray.md).SortedArray

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](SortedArray.SortedArray-1.md#constructor)

### Properties

- [#array](SortedArray.SortedArray-1.md##array)
- [#compare](SortedArray.SortedArray-1.md##compare)

### Accessors

- [length](SortedArray.SortedArray-1.md#length)

### Methods

- [[iterator]](SortedArray.SortedArray-1.md#[iterator])
- [at](SortedArray.SortedArray-1.md#at)
- [insert](SortedArray.SortedArray-1.md#insert)
- [insertAll](SortedArray.SortedArray-1.md#insertall)
- [remove](SortedArray.SortedArray-1.md#remove)
- [search](SortedArray.SortedArray-1.md#search)
- [shift](SortedArray.SortedArray-1.md#shift)
- [toArray](SortedArray.SortedArray-1.md#toarray)

## Constructors

### constructor

• **new SortedArray**<`T`\>(`init`, `compare`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `init` | `Iterable`<`T`\> |
| `compare` | (`a`: `T`, `b`: `T`) => `number` |

#### Defined in

[src/SortedArray.ts:12](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L12)

## Properties

### #array

• `Private` **#array**: `T`[] = `[]`

#### Defined in

[src/SortedArray.ts:9](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L9)

___

### #compare

• `Private` **#compare**: (`a`: `T`, `b`: `T`) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

##### Returns

`number`

#### Defined in

[src/SortedArray.ts:10](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L10)

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/SortedArray.ts:97](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L97)

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Defined in

[src/SortedArray.ts:93](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L93)

___

### at

▸ **at**(`index`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `T`

#### Defined in

[src/SortedArray.ts:105](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L105)

___

### insert

▸ **insert**(`element`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Defined in

[src/SortedArray.ts:23](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L23)

___

### insertAll

▸ **insertAll**(...`elements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...elements` | `T`[] |

#### Returns

`void`

#### Defined in

[src/SortedArray.ts:17](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L17)

___

### remove

▸ **remove**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`void`

#### Defined in

[src/SortedArray.ts:82](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L82)

___

### search

▸ **search**(`element`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `T` |

#### Returns

`number`

#### Defined in

[src/SortedArray.ts:62](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L62)

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/SortedArray.ts:101](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L101)

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/SortedArray.ts:89](https://github.com/SirPepe/shed/blob/dd181a6/src/SortedArray.ts#L89)
