[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [types](../README.md) / Optional

# Type Alias: Optional\<Source, Keys\>

> **Optional**\<`Source`, `Keys`\>: `{ [Key in Keys]?: Source[Key] }` & `Pick`\<`Source`, `Exclude`\<keyof `Source`, `Keys`\>\>

Makes select keys on `Source` optional

## Type Parameters

• **Source**

• **Keys** *extends* keyof `Source`

## Defined in

[src/types.ts:57](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/types.ts#L57)
