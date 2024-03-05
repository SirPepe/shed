[@sirpepe/shed](../README.md) / [TrieMap](../modules/TrieMap.md) / TrieMap

# Class: TrieMap\<K, V\>

[TrieMap](../modules/TrieMap.md).TrieMap

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`Primitive`](../modules/types.md#primitive) |
| `V` | `V` |

## Table of contents

### Constructors

- [constructor](TrieMap.TrieMap.md#constructor)

### Properties

- [#backend](TrieMap.TrieMap.md##backend)

### Accessors

- [[toStringTag]](TrieMap.TrieMap.md#[tostringtag])

### Methods

- [clear](TrieMap.TrieMap.md#clear)
- [delete](TrieMap.TrieMap.md#delete)
- [get](TrieMap.TrieMap.md#get)
- [has](TrieMap.TrieMap.md#has)
- [hasPrefix](TrieMap.TrieMap.md#hasprefix)
- [prune](TrieMap.TrieMap.md#prune)
- [set](TrieMap.TrieMap.md#set)
- [toJSON](TrieMap.TrieMap.md#tojson)

## Constructors

### constructor

• **new TrieMap**\<`K`, `V`\>(`initialEntries?`): [`TrieMap`](TrieMap.TrieMap.md)\<`K`, `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends [`Primitive`](../modules/types.md#primitive) |
| `V` | `V` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `initialEntries` | [`K`[], `V`][] | `[]` |

#### Returns

[`TrieMap`](TrieMap.TrieMap.md)\<`K`, `V`\>

#### Defined in

[src/TrieMap.ts:23](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L23)

## Properties

### #backend

• `Private` **#backend**: `Backend`\<`K`, `V`\>

#### Defined in

[src/TrieMap.ts:21](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L21)

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

[src/TrieMap.ts:121](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L121)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/TrieMap.ts:117](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L117)

___

### delete

▸ **delete**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K`[] |

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:81](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L81)

___

### get

▸ **get**(`path`): `undefined` \| `V` \| `Backend`\<`K`, `V`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K`[] |

#### Returns

`undefined` \| `V` \| `Backend`\<`K`, `V`\>

#### Defined in

[src/TrieMap.ts:69](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L69)

___

### has

▸ **has**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K`[] |

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:43](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L43)

___

### hasPrefix

▸ **hasPrefix**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K`[] |

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:57](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L57)

___

### prune

▸ **prune**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K`[] |

#### Returns

`boolean`

#### Defined in

[src/TrieMap.ts:105](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L105)

___

### set

▸ **set**(`path`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `K`[] |
| `value` | `V` |

#### Returns

`void`

#### Defined in

[src/TrieMap.ts:29](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L29)

___

### toJSON

▸ **toJSON**(): `never`

#### Returns

`never`

#### Defined in

[src/TrieMap.ts:125](https://github.com/SirPepe/shed/blob/3f21ef8/src/TrieMap.ts#L125)
