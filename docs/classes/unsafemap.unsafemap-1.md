[@sirpepe/shed](../README.md) / [UnsafeMap](../modules/unsafemap.md) / UnsafeMap

# Class: UnsafeMap<K, V\>

[UnsafeMap](../modules/unsafemap.md).UnsafeMap

Just like a regular map, but throws when attempting to get a key that is not
in the map (effectively adding a type assertion to `get()`). Because `get()`
returns `V` instead of `V | undefined` this makes life in TypeScript somewhat
easier.

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- `Map`<K, V\>

  ↳ **UnsafeMap**

## Table of contents

### Constructors

- [constructor](unsafemap.unsafemap-1.md#constructor)

### Properties

- [[Symbol.toStringTag]](unsafemap.unsafemap-1.md#[symbol.tostringtag])
- [errorFactory](unsafemap.unsafemap-1.md#errorfactory)
- [size](unsafemap.unsafemap-1.md#size)
- [[Symbol.species]](unsafemap.unsafemap-1.md#[symbol.species])

### Methods

- [[Symbol.iterator]](unsafemap.unsafemap-1.md#[symbol.iterator])
- [clear](unsafemap.unsafemap-1.md#clear)
- [delete](unsafemap.unsafemap-1.md#delete)
- [entries](unsafemap.unsafemap-1.md#entries)
- [forEach](unsafemap.unsafemap-1.md#foreach)
- [get](unsafemap.unsafemap-1.md#get)
- [has](unsafemap.unsafemap-1.md#has)
- [keys](unsafemap.unsafemap-1.md#keys)
- [set](unsafemap.unsafemap-1.md#set)
- [values](unsafemap.unsafemap-1.md#values)

## Constructors

### constructor

• **new UnsafeMap**<K, V\>(`entries?`, `errorFactory?`)

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `entries` | `Iterable`<[`K`, `V`]\> | [] |
| `errorFactory` | (`key`: `K`) => `Error` | `undefined` |

#### Overrides

Map&lt;K, V\&gt;.constructor

#### Defined in

[src/UnsafeMap.ts:8](https://github.com/SirPepe/shed/blob/a77f48a/src/UnsafeMap.ts#L8)

## Properties

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: `string`

#### Inherited from

Map.\_\_@toStringTag

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

[src/UnsafeMap.ts:8](https://github.com/SirPepe/shed/blob/a77f48a/src/UnsafeMap.ts#L8)

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Map.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### [Symbol.species]

▪ `Static` `Readonly` **[Symbol.species]**: `MapConstructor`

#### Inherited from

Map.\_\_@species

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): `IterableIterator`<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`K`, `V`]\>

#### Inherited from

Map.\_\_@iterator

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
| `callbackfn` | (`value`: `V`, `key`: `K`, `map`: `Map`<K, V\>) => `void` |
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

[src/UnsafeMap.ts:17](https://github.com/SirPepe/shed/blob/a77f48a/src/UnsafeMap.ts#L17)

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

▸ **keys**(): `IterableIterator`<K\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<K\>

#### Inherited from

Map.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### set

▸ **set**(`key`, `value`): [UnsafeMap](unsafemap.unsafemap-1.md)<K, V\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `V` |

#### Returns

[UnsafeMap](unsafemap.unsafemap-1.md)<K, V\>

#### Inherited from

Map.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): `IterableIterator`<V\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<V\>

#### Inherited from

Map.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
