[@sirpepe/shed](../README.md) / array

# Module: array

Utilities for working with arrays. Access this module by importing from
`@sirpepe/shed/array`.

## Table of contents

### Functions

- [move](array.md#move)
- [moved](array.md#moved)
- [range](array.md#range)

## Functions

### move

▸ **move**\<`T`\>(`arr`, `from`, `to`): `T`[]

Moves an element from one position in an array to another position, operating
in-place. See `moved()` for an immutable variant of this function.

Example:

```javascript
let input = [0, 1, 2, 3, 4];
move(input, 1, 3);
// input is now [0, 2, 3, 1, 4]
```

Negative `from` indices pick an element from the end of the array. Indices
that out of bound are truncated to the nearest valid index - this function
will never yield a sparse array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `from` | `number` |
| `to` | `number` |

#### Returns

`T`[]

#### Defined in

[src/array.ts:24](https://github.com/SirPepe/shed/blob/a2b2848/src/array.ts#L24)

___

### moved

▸ **moved**\<`T`\>(`arr`, `from`, `to`): `T`[]

Moves an element from one position in an array to another position, creating
a new array. See `move()` for a mutating variant of this function.

Example:

```javascript
let input = [0, 1, 2, 3, 4];
output = moved(input, 1, 3);
// output is [0, 2, 3, 1, 4], input stays the same
```

Negative `from` indices pick an element from the end of the array. Indices
that out of bound are truncated to the nearest valid index - this function
will never yield a sparse array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `from` | `number` |
| `to` | `number` |

#### Returns

`T`[]

#### Defined in

[src/array.ts:45](https://github.com/SirPepe/shed/blob/a2b2848/src/array.ts#L45)

___

### range

▸ **range**(`from`): `number`[]

Returns an inclusive range of numbers. If one one argument is provided, the
range starts at 0 if the argument is positive. If the argument is negative,
the range ends at 0.

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |

#### Returns

`number`[]

#### Defined in

[src/array.ts:56](https://github.com/SirPepe/shed/blob/a2b2848/src/array.ts#L56)

▸ **range**(`from`, `to`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `number` |
| `to` | `number` |

#### Returns

`number`[]

#### Defined in

[src/array.ts:57](https://github.com/SirPepe/shed/blob/a2b2848/src/array.ts#L57)
