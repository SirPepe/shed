[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [compress](../README.md) / decompressFromBase64

# Function: decompressFromBase64()

> **decompressFromBase64**\<`T`\>(`inputBase64`, `reviver`?, `format`?): `Promise`\<`T`\>

Decompress the output of `compressToBase64()`  using the JSON reviver
`reviver` and the data format `format`.

## Type Parameters

• **T** = `any`

## Parameters

• **inputBase64**: `string`

• **reviver?**

• **format?**: `CompressionFormat` = `"deflate-raw"`

## Returns

`Promise`\<`T`\>

## Defined in

[src/compress.ts:57](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/compress.ts#L57)
