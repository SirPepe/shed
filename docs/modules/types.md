[@sirpepe/shed](../README.md) / types

# Module: types

Utility types for TypeScript. Use this module by importing from
`@sirpepe/shed/types` or `@sirpepe/shed`.

## Table of contents

### Type Aliases

- [Drop](types.md#drop)
- [DropFirst](types.md#dropfirst)
- [MapDiscriminatedUnion](types.md#mapdiscriminatedunion)
- [SplitTuple](types.md#splittuple)

## Type Aliases

### Drop

Ƭ **Drop**<`T`, `I`\>: [...SplitTuple<T, I\>[0], ...DropFirst<SplitTuple<T, I\>[1]\>]

Drops the element at index `I` from a tuple type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |
| `I` | extends `number` |

#### Defined in

[src/types.ts:31](https://github.com/SirPepe/shed/blob/af754f8/src/types.ts#L31)

___

### DropFirst

Ƭ **DropFirst**<`T`\>: `T` extends [`any`, ...(infer Rest)] ? `Rest` : `T`

Drops the first element from a tuple type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Defined in

[src/types.ts:23](https://github.com/SirPepe/shed/blob/af754f8/src/types.ts#L23)

___

### MapDiscriminatedUnion

Ƭ **MapDiscriminatedUnion**<`Union`, `Key`\>: { [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Union` | extends `Record`<`Key`, `string`\> |
| `Key` | extends keyof `Union` |

#### Defined in

[src/types.ts:41](https://github.com/SirPepe/shed/blob/af754f8/src/types.ts#L41)

___

### SplitTuple

Ƭ **SplitTuple**<`R`, `I`, `L`\>: `L`[``"length"``] extends `I` ? [`L`, `R`] : `R` extends [infer First, ...(infer Rest)] ? [`SplitTuple`](types.md#splittuple)<[...Rest], `I`, [...L, `First`]\> : [`L`, `R`]

Splits a tuple type into a LHS and a RHS on index `I`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `unknown`[] |
| `I` | extends `number` |
| `L` | extends `unknown`[] = [] |

#### Defined in

[src/types.ts:13](https://github.com/SirPepe/shed/blob/af754f8/src/types.ts#L13)
