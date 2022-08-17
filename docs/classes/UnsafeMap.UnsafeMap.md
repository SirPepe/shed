[@sirpepe/shed](../README.md) / [UnsafeMap](../modules/UnsafeMap.md) / UnsafeMap

# Class: UnsafeMap<K, V\>

[UnsafeMap](../modules/UnsafeMap.md).UnsafeMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<`K`, `V`\>

  ↳ **`UnsafeMap`**

## Table of contents

### Constructors

- [constructor](UnsafeMap.UnsafeMap.md#constructor)

### Properties

- [[toStringTag]](UnsafeMap.UnsafeMap.md#[tostringtag])
- [errorFactory](UnsafeMap.UnsafeMap.md#errorfactory)
- [size](UnsafeMap.UnsafeMap.md#size)
- [[species]](UnsafeMap.UnsafeMap.md#[species])

### Methods

- [[iterator]](UnsafeMap.UnsafeMap.md#[iterator])
- [clear](UnsafeMap.UnsafeMap.md#clear)
- [delete](UnsafeMap.UnsafeMap.md#delete)
- [entries](UnsafeMap.UnsafeMap.md#entries)
- [forEach](UnsafeMap.UnsafeMap.md#foreach)
- [get](UnsafeMap.UnsafeMap.md#get)
- [has](UnsafeMap.UnsafeMap.md#has)
- [keys](UnsafeMap.UnsafeMap.md#keys)
- [set](UnsafeMap.UnsafeMap.md#set)
- [values](UnsafeMap.UnsafeMap.md#values)

## Constructors

### constructor

• **new UnsafeMap**<`K`, `V`\>(`entries?`, `errorFactory?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entries` | `Iterable`<[`K`, `V`]\> | `[]` |
| `errorFactory` | (`key`: `K`) => `Error` | `undefined` |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/UnsafeMap.ts:13](https://github.com/SirPepe/shed/blob/2ac893f/src/UnsafeMap.ts#L13)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag@27

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### errorFactory

• **errorFactory**: (`key`: `K`) => `Error`

#### Type declaration

▸ (`key`): `Error`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

##### Returns

`Error`

#### Defined in

[src/UnsafeMap.ts:12](https://github.com/SirPepe/shed/blob/2ac893f/src/UnsafeMap.ts#L12)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species@606

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator@89

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### get

▸ **get**(`key`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

#### Overrides

Map.get

#### Defined in

[src/UnsafeMap.ts:21](https://github.com/SirPepe/shed/blob/2ac893f/src/UnsafeMap.ts#L21)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): `IterableIterator`<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [`UnsafeMap`](UnsafeMap.UnsafeMap.md)<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[`UnsafeMap`](UnsafeMap.UnsafeMap.md)<`K`, `V`\>

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
