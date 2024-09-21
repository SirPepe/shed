[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [types](../README.md) / NonOptional

# Type Alias: NonOptional\<Source, Keys\>

> **NonOptional**\<`Source`, `Keys`\>: `{ [Key in Keys]-?: Source[Key] }` & `Pick`\<`Source`, `Exclude`\<keyof `Source`, `Keys`\>\>

Makes select keys on `Source` required

## Type Parameters

• **Source**

• **Keys** *extends* keyof `Source`

## Defined in

[src/types.ts:64](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/types.ts#L64)
