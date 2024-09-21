[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [types](../README.md) / MapDiscriminatedUnion

# Type Alias: MapDiscriminatedUnion\<Union, Key\>

> **MapDiscriminatedUnion**\<`Union`, `Key`\>: `{ [Value in Union[Key]]: DiscriminateUnion<Union, Key, Value> }`

## Type Parameters

• **Union** *extends* `Record`\<`Key`, `string`\>

• **Key** *extends* keyof `Union`

## Defined in

[src/types.ts:47](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/types.ts#L47)
