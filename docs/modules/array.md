[@sirpepe/shed](../README.md) / array

# Module: array

Utilities for working with arrays. Access this module by importing
`@sirpepe/shed/array`.

## Table of contents

### Functions

- [move](array.md#move)
- [moved](array.md#moved)

## Functions

### move

▸ **move**<`T`\>(`arr`, `from`, `to`): `T`[]

Moves an element from one position in an array to another position, operating
in-place. See `moved()` for an immutable variant of this function.

Example:

```javascript
let input = [0, 1, 2, 3, 4];
move(input, 1, 3);
// input is now [0, 2, 3, 1, 4]
```

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

[src/array.ts:20](https://github.com/SirPepe/shed/blob/7fa7472/src/array.ts#L20)

___

### moved

▸ **moved**<`T`\>(`arr`, `from`, `to`): `T`[]

Moves an element from one position in an array to another position, creating
a new array. See `move()` for a mutating variant of this function.

Example:

```javascript
let input = [0, 1, 2, 3, 4];
output = moved(input, 1, 3);
// output is [0, 2, 3, 1, 4], input stays the same
```

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

[src/array.ts:37](https://github.com/SirPepe/shed/blob/7fa7472/src/array.ts#L37)
