[@sirpepe/shed](../README.md) / [BiMap](../modules/bimap.md) / BiMap

# Class: BiMap<K, V\>

[BiMap](../modules/bimap.md).BiMap

Maps keys to values and, in contrast to regular maps, also vice versa. Mostly
this is an abstraction over two individual maps with all the bookkeeping
taken care of. The API should be fairly self-explanatory - it is essentially
equal to that of a regular map, just with every operation duplicated to
support both key- and value-oriented approaches.

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](bimap.bimap-1.md#constructor)

### Properties

- [byKey](bimap.bimap-1.md#bykey)
- [byVal](bimap.bimap-1.md#byval)

### Accessors

- [[Symbol.iterator]](bimap.bimap-1.md#[symbol.iterator])
- [size](bimap.bimap-1.md#size)

### Methods

- [clear](bimap.bimap-1.md#clear)
- [deleteByKey](bimap.bimap-1.md#deletebykey)
- [deleteByVal](bimap.bimap-1.md#deletebyval)
- [entries](bimap.bimap-1.md#entries)
- [getByKey](bimap.bimap-1.md#getbykey)
- [getByVal](bimap.bimap-1.md#getbyval)
- [hasKey](bimap.bimap-1.md#haskey)
- [hasVal](bimap.bimap-1.md#hasval)
- [keys](bimap.bimap-1.md#keys)
- [set](bimap.bimap-1.md#set)
- [values](bimap.bimap-1.md#values)

## Constructors

### constructor

• **new BiMap**<K, V\>(`values?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `values` | `Iterable`<[`K`, `V`]\> | [] |

#### Defined in

[src/BiMap.ts:10](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L10)

## Properties

### byKey

• `Private` **byKey**: `Map`<K, V\>

#### Defined in

[src/BiMap.ts:9](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L9)

___

### byVal

• `Private` **byVal**: `Map`<V, K\>

#### Defined in

[src/BiMap.ts:10](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L10)

## Accessors

### [Symbol.iterator]

• `get` **[Symbol.iterator]**(): () => `IterableIterator`<[`K`, `V`]\>

#### Returns

`fn`

▸ (): `IterableIterator`<[`K`, `V`]\>

##### Returns

`IterableIterator`<[`K`, `V`]\>

#### Defined in

[src/BiMap.ts:71](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L71)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/BiMap.ts:67](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L67)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/BiMap.ts:50](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L50)

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

[src/BiMap.ts:38](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L38)

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

[src/BiMap.ts:44](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L44)

___

### entries

▸ **entries**(): `Iterable`<[`K`, `V`]\>

#### Returns

`Iterable`<[`K`, `V`]\>

#### Defined in

[src/BiMap.ts:63](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L63)

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

[src/BiMap.ts:30](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L30)

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

[src/BiMap.ts:34](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L34)

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

[src/BiMap.ts:22](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L22)

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

[src/BiMap.ts:26](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L26)

___

### keys

▸ **keys**(): `Iterable`<K\>

#### Returns

`Iterable`<K\>

#### Defined in

[src/BiMap.ts:55](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L55)

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

[src/BiMap.ts:17](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L17)

___

### values

▸ **values**(): `Iterable`<V\>

#### Returns

`Iterable`<V\>

#### Defined in

[src/BiMap.ts:59](https://github.com/SirPepe/shed/blob/5ac37c8/src/BiMap.ts#L59)
