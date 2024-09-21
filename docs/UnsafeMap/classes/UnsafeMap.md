[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [UnsafeMap](../README.md) / UnsafeMap

# Class: UnsafeMap\<K, V\>

## Extends

- `Map`\<`K`, `V`\>

## Type Parameters

• **K**

• **V**

## Constructors

### new UnsafeMap()

> **new UnsafeMap**\<`K`, `V`\>(`entries`, `errorFactory`): [`UnsafeMap`](UnsafeMap.md)\<`K`, `V`\>

#### Parameters

• **entries**: `Iterable`\<[`K`, `V`], `any`, `any`\> = `[]`

• **errorFactory** = `...`

#### Returns

[`UnsafeMap`](UnsafeMap.md)\<`K`, `V`\>

#### Overrides

`Map<K, V>.constructor`

#### Defined in

[src/UnsafeMap.ts:13](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/UnsafeMap.ts#L13)

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Map.[toStringTag]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:137

***

### errorFactory()

> **errorFactory**: (`key`) => `Error`

#### Parameters

• **key**: `K`

#### Returns

`Error`

#### Defined in

[src/UnsafeMap.ts:12](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/UnsafeMap.ts#L12)

***

### size

> `readonly` **size**: `number`

#### Inherited from

`Map.size`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:45

***

### \[species\]

> `readonly` `static` **\[species\]**: `MapConstructor`

#### Inherited from

`Map.[species]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:319

## Methods

### \[iterator\]()

> **\[iterator\]**(): `MapIterator`\<[`K`, `V`]\>

Returns an iterable of entries in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.[iterator]`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:143

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

`Map.clear`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

***

### delete()

> **delete**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### entries()

> **entries**(): `MapIterator`\<[`K`, `V`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`MapIterator`\<[`K`, `V`]\>

#### Inherited from

`Map.entries`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:148

***

### forEach()

> **forEach**(`callbackfn`, `thisArg`?): `void`

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

• **callbackfn**

• **thisArg?**: `any`

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### get()

> **get**(`key`): `V`

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

• **key**: `K`

#### Returns

`V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Overrides

`Map.get`

#### Defined in

[src/UnsafeMap.ts:21](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/UnsafeMap.ts#L21)

***

### has()

> **has**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### keys()

> **keys**(): `MapIterator`\<`K`\>

Returns an iterable of keys in the map

#### Returns

`MapIterator`\<`K`\>

#### Inherited from

`Map.keys`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:153

***

### set()

> **set**(`key`, `value`): `this`

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

• **key**: `K`

• **value**: `V`

#### Returns

`this`

#### Inherited from

`Map.set`

#### Defined in

node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### values()

> **values**(): `MapIterator`\<`V`\>

Returns an iterable of values in the map

#### Returns

`MapIterator`\<`V`\>

#### Inherited from

`Map.values`

#### Defined in

node\_modules/typescript/lib/lib.es2015.iterable.d.ts:158

***

### groupBy()

> `static` **groupBy**\<`K`, `T`\>(`items`, `keySelector`): `Map`\<`K`, `T`[]\>

Groups members of an iterable according to the return value of the passed callback.

#### Type Parameters

• **K**

• **T**

#### Parameters

• **items**: `Iterable`\<`T`, `any`, `any`\>

An iterable.

• **keySelector**

A callback which will be invoked for each item in items.

#### Returns

`Map`\<`K`, `T`[]\>

#### Inherited from

`Map.groupBy`

#### Defined in

node\_modules/typescript/lib/lib.esnext.collection.d.ts:25
