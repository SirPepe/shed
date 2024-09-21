[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [types](../README.md) / Split

# Type Alias: Split\<Str, Last\>

> **Split**\<`Str`, `Last`\>: `Str` *extends* `any` ? [`Trim`](Trim.md)\<`Str`\> *extends* \`$\{infer First\}$\{Whitespace\}$\{infer Rest\}\` ? [`Split`](Split.md)\<`Rest`, [`Split`](Split.md)\<`First`\> \| `Last`\> : [`Trim`](Trim.md)\<`Str`\> \| `Last` : `never`

## Type Parameters

• **Str** *extends* `string`

• **Last** = `never`

## Defined in

[src/types.ts:101](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/types.ts#L101)
