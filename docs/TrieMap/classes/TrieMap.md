[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [TrieMap](../README.md) / TrieMap

# Class: TrieMap\<K, V\>

## Type Parameters

• **K** *extends* [`Primitive`](../../types/type-aliases/Primitive.md)

• **V**

## Constructors

### new TrieMap()

> **new TrieMap**\<`K`, `V`\>(`initialEntries`): [`TrieMap`](TrieMap.md)\<`K`, `V`\>

#### Parameters

• **initialEntries**: [`K`[], `V`][] = `[]`

#### Returns

[`TrieMap`](TrieMap.md)\<`K`, `V`\>

#### Defined in

[src/TrieMap.ts:23](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L23)

## Accessors

### \[toStringTag\]

> `get` **\[toStringTag\]**(): `string`

#### Returns

`string`

#### Defined in

[src/TrieMap.ts:121](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L121)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/TrieMap.ts:117](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L117)

***

### delete()

> **delete**(`path`): `boolean`

#### Parameters

• **path**: `K`[]

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:81](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L81)

***

### get()

> **get**(`path`): `undefined` \| `V` \| `Backend`\<`K`, `V`\>

#### Parameters

• **path**: `K`[]

#### Returns

`undefined` \| `V` \| `Backend`\<`K`, `V`\>

#### Defined in

[src/TrieMap.ts:69](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L69)

***

### has()

> **has**(`path`): `boolean`

#### Parameters

• **path**: `K`[]

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:43](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L43)

***

### hasPrefix()

> **hasPrefix**(`path`): `boolean`

#### Parameters

• **path**: `K`[]

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:57](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L57)

***

### prune()

> **prune**(`path`): `boolean`

#### Parameters

• **path**: `K`[]

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:105](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L105)

***

### set()

> **set**(`path`, `value`): `void`

#### Parameters

• **path**: `K`[]

• **value**: `V`

#### Returns

`void`

#### Defined in

[src/TrieMap.ts:29](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L29)

***

### toJSON()

> **toJSON**(): `never`

#### Returns

`never`

#### Defined in

[src/TrieMap.ts:125](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/TrieMap.ts#L125)
