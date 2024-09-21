[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [types](../README.md) / SplitTuple

# Type Alias: SplitTuple\<R, I, L\>

> **SplitTuple**\<`R`, `I`, `L`\>: `L`\[`"length"`\] *extends* `I` ? [`L`, `R`] : `R` *extends* [infer First, `...(infer Rest)`] ? [`SplitTuple`](SplitTuple.md)\<[`...Rest`], `I`, [`...L`, `First`]\> : [`L`, `R`]

Splits a tuple type into a LHS and a RHS on index `I`

## Type Parameters

• **R** *extends* `unknown`[]

• **I** *extends* `number`

• **L** *extends* `unknown`[] = []

## Defined in

[src/types.ts:13](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/types.ts#L13)
