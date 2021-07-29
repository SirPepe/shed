[@sirpepe/shed](../README.md) / types

# Module: types

Utility types for TypeScript. Use this module by importing
`@sirpepe/shed/types`.

## Table of contents

### Type aliases

- [MapDiscriminatedUnion](types.md#mapdiscriminatedunion)

## Type aliases

### MapDiscriminatedUnion

Ƭ **MapDiscriminatedUnion**<`Union`, `Key`\>: { [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value\>}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Union` | extends `Record`<`Key`, `string`\> |
| `Key` | extends keyof `Union` |

#### Defined in

[src/types.ts:15](https://github.com/SirPepe/shed/blob/38b45bb/src/types.ts#L15)
