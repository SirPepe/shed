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
- [insert](SortedArray.SortedArray-1.md#insert)
- [remove](SortedArray.SortedArray-1.md#remove)
- [search](SortedArray.SortedArray-1.md#search)
- [shift](SortedArray.SortedArray-1.md#shift)
- [toArray](SortedArray.SortedArray-1.md#toarray)

## Constructors

### constructor

• **new SortedArray**<`T`\>(`array`, `compare`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `compare` | (`a`: `T`, `b`: `T`) => `number` |

#### Defined in

src/SortedArray.ts:12

## Properties

### #array

• `Private` **#array**: `T`[] = `[]`

#### Defined in

src/SortedArray.ts:9

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

src/SortedArray.ts:10

## Accessors

### length

• `get` **length**(): `number`

#### Returns

`number`

#### Defined in

src/SortedArray.ts:101

## Methods

### [iterator]

▸ **[iterator]**(): `Iterator`<`T`, `any`, `undefined`\>

#### Returns

`Iterator`<`T`, `any`, `undefined`\>

#### Defined in

src/SortedArray.ts:97

___

### insert

▸ **insert**(...`elements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...elements` | `T`[] |

#### Returns

`void`

#### Defined in

src/SortedArray.ts:19

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

src/SortedArray.ts:86

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

src/SortedArray.ts:66

___

### shift

▸ **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

src/SortedArray.ts:105

___

### toArray

▸ **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

src/SortedArray.ts:93
