[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [BiMap](../README.md) / BiMap

# Class: BiMap\<K, V\>

## Type Parameters

• **K**

• **V**

## Constructors

### new BiMap()

> **new BiMap**\<`K`, `V`\>(`values`): [`BiMap`](BiMap.md)\<`K`, `V`\>

#### Parameters

• **values**: `Iterable`\<[`K`, `V`], `any`, `any`\> = `[]`

#### Returns

[`BiMap`](BiMap.md)\<`K`, `V`\>

#### Defined in

[src/BiMap.ts:16](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L16)

## Accessors

### \[iterator\]

> `get` **\[iterator\]**(): () => `IterableIterator`\<[`K`, `V`], `any`, `any`\>

#### Returns

`Function`

##### Returns

`IterableIterator`\<[`K`, `V`], `any`, `any`\>

#### Defined in

[src/BiMap.ts:75](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L75)

***

### size

> `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[src/BiMap.ts:71](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L71)

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/BiMap.ts:54](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L54)

***

### deleteByKey()

> **deleteByKey**(`key`): `void`

#### Parameters

• **key**: `K`

#### Returns

`void`

#### Defined in

[src/BiMap.ts:42](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L42)

***

### deleteByVal()

> **deleteByVal**(`val`): `void`

#### Parameters

• **val**: `V`

#### Returns

`void`

#### Defined in

[src/BiMap.ts:48](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L48)

***

### entries()

> **entries**(): `Iterable`\<[`K`, `V`], `any`, `any`\>

#### Returns

`Iterable`\<[`K`, `V`], `any`, `any`\>

#### Defined in

[src/BiMap.ts:67](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L67)

***

### getByKey()

> **getByKey**(`key`): `undefined` \| `V`

#### Parameters

• **key**: `K`

#### Returns

`undefined` \| `V`

#### Defined in

[src/BiMap.ts:34](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L34)

***

### getByVal()

> **getByVal**(`val`): `undefined` \| `K`

#### Parameters

• **val**: `V`

#### Returns

`undefined` \| `K`

#### Defined in

[src/BiMap.ts:38](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L38)

***

### hasKey()

> **hasKey**(`key`): `boolean`

#### Parameters

• **key**: `K`

#### Returns

`boolean`

#### Defined in

[src/BiMap.ts:26](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L26)

***

### hasVal()

> **hasVal**(`val`): `boolean`

#### Parameters

• **val**: `V`

#### Returns

`boolean`

#### Defined in

[src/BiMap.ts:30](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L30)

***

### keys()

> **keys**(): `Iterable`\<`K`, `any`, `any`\>

#### Returns

`Iterable`\<`K`, `any`, `any`\>

#### Defined in

[src/BiMap.ts:59](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L59)

***

### set()

> **set**(`key`, `val`): `void`

#### Parameters

• **key**: `K`

• **val**: `V`

#### Returns

`void`

#### Defined in

[src/BiMap.ts:21](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L21)

***

### values()

> **values**(): `Iterable`\<`V`, `any`, `any`\>

#### Returns

`Iterable`\<`V`, `any`, `any`\>

#### Defined in

[src/BiMap.ts:63](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/BiMap.ts#L63)
