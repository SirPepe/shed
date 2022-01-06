[@sirpepe/shed](../README.md) / sorting

# Module: sorting

Callback functions for use with Array.prototype.sort(). Use this module by
importing from `@sirpepe/shed/string` or `@sirpepe/shed`.

## Table of contents

### Functions

- [asc](sorting.md#asc)
- [desc](sorting.md#desc)

## Functions

### asc

▸ **asc**<`T`\>(`a`, `b`): ``1`` \| ``0`` \| ``-1``

Callback for `sort()` to sort numeric input in ascending order.

Example:

```javascript
[1, 12, 0, 10, 2].sort(asc);
// Result: [0, 1, 2, 10, 12];
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

``1`` \| ``0`` \| ``-1``

#### Defined in

[src/sorting.ts:18](https://github.com/SirPepe/shed/blob/e03719b/src/sorting.ts#L18)

___

### desc

▸ **desc**<`T`\>(`a`, `b`): ``1`` \| ``0`` \| ``-1``

Callback for `sort()` to sort numeric input in descending order.

Example:

```javascript
[1, 12, 0, 10, 2].sort(desc);
Result: [12, 10, 2, 1, 0];
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `bigint` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |
| `b` | `T` |

#### Returns

``1`` \| ``0`` \| ``-1``

#### Defined in

[src/sorting.ts:38](https://github.com/SirPepe/shed/blob/e03719b/src/sorting.ts#L38)
