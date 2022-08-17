[@sirpepe/shed](../README.md) / types

# Module: types

Utility types for TypeScript. Use this module by importing from
`@sirpepe/shed/types` or `@sirpepe/shed`.

## Table of contents

### Type Aliases

- [MapDiscriminatedUnion](types.md#mapdiscriminatedunion)

## Type Aliases

### MapDiscriminatedUnion

Ƭ **MapDiscriminatedUnion**<`Union`, `Key`\>: { [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Union` | extends `Record`<`Key`, `string`\> |
| `Key` | extends keyof `Union` |

#### Defined in

[src/types.ts:15](https://github.com/SirPepe/shed/blob/2ac893f/src/types.ts#L15)
