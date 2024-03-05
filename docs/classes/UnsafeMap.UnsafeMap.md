[@sirpepe/shed](../README.md) / [UnsafeMap](../modules/UnsafeMap.md) / UnsafeMap

# Class: UnsafeMap\<K, V\>

[UnsafeMap](../modules/UnsafeMap.md).UnsafeMap

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`\<`K`, `V`\>

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

• **new UnsafeMap**\<`K`, `V`\>(`entries?`, `errorFactory?`): [`UnsafeMap`](UnsafeMap.UnsafeMap.md)\<`K`, `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entries` | `Iterable`\<[`K`, `V`]\> | `[]` |
| `errorFactory` | (`key`: `K`) => `Error` | `undefined` |

#### Returns

[`UnsafeMap`](UnsafeMap.UnsafeMap.md)\<`K`, `V`\>

#### Overrides

Map\&lt;K, V\&gt;.constructor

#### Defined in

[src/UnsafeMap.ts:13](https://github.com/SirPepe/shed/blob/3f21ef8/src/UnsafeMap.ts#L13)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Map.[toStringTag]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

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

[src/UnsafeMap.ts:12](https://github.com/SirPepe/shed/blob/3f21ef8/src/UnsafeMap.ts#L12)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:45

___

### [species]

▪ `Static` `Readonly` **[species]**: `MapConstructor`

#### Inherited from

Map.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

Map.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:119

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Map.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:20

___

### delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

Map.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### entries

▸ **entries**(): `IterableIterator`\<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

#### Inherited from

Map.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:124

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`\<`K`, `V`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Map.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

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

[src/UnsafeMap.ts:21](https://github.com/SirPepe/shed/blob/3f21ef8/src/UnsafeMap.ts#L21)

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

Map.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:37

___

### keys

▸ **keys**(): `IterableIterator`\<`K`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`K`\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:129

___

### set

▸ **set**(`key`, `value`): `this`

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

`this`

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:41

___

### values

▸ **values**(): `IterableIterator`\<`V`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`V`\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:134
