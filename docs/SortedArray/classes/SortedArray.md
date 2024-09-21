[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [SortedArray](../README.md) / SortedArray

# Class: SortedArray\<T\>

## Type Parameters

• **T**

## Constructors

### new SortedArray()

> **new SortedArray**\<`T`\>(`init`, `compare`): [`SortedArray`](SortedArray.md)\<`T`\>

#### Parameters

• **init**: `Iterable`\<`T`, `any`, `any`\>

• **compare**

#### Returns

[`SortedArray`](SortedArray.md)\<`T`\>

#### Defined in

[src/SortedArray.ts:12](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L12)

## Accessors

### length

> `get` **length**(): `number`

#### Returns

`number`

#### Defined in

[src/SortedArray.ts:97](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L97)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`T`, `any`, `any`\>

#### Returns

`Iterator`\<`T`, `any`, `any`\>

#### Defined in

[src/SortedArray.ts:93](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L93)

***

### at()

> **at**(`index`): `undefined` \| `T`

#### Parameters

• **index**: `number`

#### Returns

`undefined` \| `T`

#### Defined in

[src/SortedArray.ts:105](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L105)

***

### insert()

> **insert**(`element`): `number`

#### Parameters

• **element**: `T`

#### Returns

`number`

#### Defined in

[src/SortedArray.ts:23](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L23)

***

### insertAll()

> **insertAll**(...`elements`): `void`

#### Parameters

• ...**elements**: `T`[]

#### Returns

`void`

#### Defined in

[src/SortedArray.ts:17](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L17)

***

### remove()

> **remove**(`element`): `void`

#### Parameters

• **element**: `T`

#### Returns

`void`

#### Defined in

[src/SortedArray.ts:82](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L82)

***

### search()

> **search**(`element`): `number`

#### Parameters

• **element**: `T`

#### Returns

`number`

#### Defined in

[src/SortedArray.ts:62](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L62)

***

### shift()

> **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/SortedArray.ts:101](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L101)

***

### toArray()

> **toArray**(): `T`[]

#### Returns

`T`[]

#### Defined in

[src/SortedArray.ts:89](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/SortedArray.ts#L89)
