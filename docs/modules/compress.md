[@sirpepe/shed](../README.md) / compress

# Module: compress

Compress/decompress JSON-serializable objects with native compression streams
and encode/decode to/from url-safe base 64. Use this module by importing from
`@sirpepe/shed/compress`.

## Table of contents

### Functions

- [compressToBase64](compress.md#compresstobase64)
- [decompressFromBase64](compress.md#decompressfrombase64)

## Functions

### compressToBase64

▸ **compressToBase64**(`inputData`, `replacer?`, `format?`): `Promise`\<`string`\>

Compress a JSON-serializable object to url-safe base64 using the JSON
replacer `replacer` and the data format `format`.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputData` | `any` | `undefined` |
| `replacer?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | `undefined` |
| `format` | `CompressionFormat` | `"deflate-raw"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/compress.ts:32](https://github.com/SirPepe/shed/blob/92a10f4/src/compress.ts#L32)

___

### decompressFromBase64

▸ **decompressFromBase64**\<`T`\>(`inputBase64`, `reviver?`, `format?`): `Promise`\<`T`\>

Decompress the output of `compressToBase64()`  using the JSON reviver
`reviver` and the data format `format`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputBase64` | `string` | `undefined` |
| `reviver?` | (`this`: `any`, `key`: `string`, `value`: `any`) => `any` | `undefined` |
| `format` | `CompressionFormat` | `"deflate-raw"` |

#### Returns

`Promise`\<`T`\>

#### Defined in

[src/compress.ts:57](https://github.com/SirPepe/shed/blob/92a10f4/src/compress.ts#L57)
