[@sirpepe/shed](../README.md) / [BiMap](../modules/BiMap.md) / BiMap

# Class: BiMap<K, V\>

[BiMap](../modules/BiMap.md).BiMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](BiMap.BiMap-1.md#constructor)

### Properties

- [byKey](BiMap.BiMap-1.md#bykey)
- [byVal](BiMap.BiMap-1.md#byval)

### Accessors

- [[iterator]](BiMap.BiMap-1.md#[iterator])
- [size](BiMap.BiMap-1.md#size)

### Methods

- [clear](BiMap.BiMap-1.md#clear)
- [deleteByKey](BiMap.BiMap-1.md#deletebykey)
- [deleteByVal](BiMap.BiMap-1.md#deletebyval)
- [entries](BiMap.BiMap-1.md#entries)
- [getByKey](BiMap.BiMap-1.md#getbykey)
- [getByVal](BiMap.BiMap-1.md#getbyval)
- [hasKey](BiMap.BiMap-1.md#haskey)
- [hasVal](BiMap.BiMap-1.md#hasval)
- [keys](BiMap.BiMap-1.md#keys)
- [set](BiMap.BiMap-1.md#set)
- [values](BiMap.BiMap-1.md#values)

## Constructors

### constructor

• **new BiMap**<`K`, `V`\>(`values?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `values` | `Iterable`<[`K`, `V`]\> | `[]` |

#### Defined in

[src/BiMap.ts:16](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L16)

## Properties

### byKey

• `Private` **byKey**: `Map`<`K`, `V`\>

#### Defined in

[src/BiMap.ts:13](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L13)

___

### byVal

• `Private` **byVal**: `Map`<`V`, `K`\>

#### Defined in

[src/BiMap.ts:14](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L14)

## Accessors

### [iterator]

• `get` **[iterator]**(): () => `IterableIterator`<[`K`, `V`]\>

#### Returns

`fn`

▸ (): `IterableIterator`<[`K`, `V`]\>

##### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

[src/BiMap.ts:75](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L75)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/BiMap.ts:71](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L71)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/BiMap.ts:54](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L54)

___

### deleteByKey

▸ **deleteByKey**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`void`

#### Defined in

[src/BiMap.ts:42](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L42)

___

### deleteByVal

▸ **deleteByVal**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `V` |

#### Returns

`void`

#### Defined in

[src/BiMap.ts:48](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L48)

___

### entries

▸ **entries**(): `Iterable`<[`K`, `V`]\>

#### Returns

`Iterable`<[`K`, `V`]\>

#### Defined in

[src/BiMap.ts:67](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L67)

___

### getByKey

▸ **getByKey**(`key`): `undefined` \| `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `V`

#### Defined in

[src/BiMap.ts:34](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L34)

___

### getByVal

▸ **getByVal**(`val`): `undefined` \| `K`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `V` |

#### Returns

`undefined` \| `K`

#### Defined in

[src/BiMap.ts:38](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L38)

___

### hasKey

▸ **hasKey**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Defined in

[src/BiMap.ts:26](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L26)

___

### hasVal

▸ **hasVal**(`val`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `V` |

#### Returns

`boolean`

#### Defined in

[src/BiMap.ts:30](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L30)

___

### keys

▸ **keys**(): `Iterable`<`K`\>

#### Returns

`Iterable`<`K`\>

#### Defined in

[src/BiMap.ts:59](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L59)

___

### set

▸ **set**(`key`, `val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `val` | `V` |

#### Returns

`void`

#### Defined in

[src/BiMap.ts:21](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L21)

___

### values

▸ **values**(): `Iterable`<`V`\>

#### Returns

`Iterable`<`V`\>

#### Defined in

[src/BiMap.ts:63](https://github.com/SirPepe/shed/blob/e5c0819/src/BiMap.ts#L63)
