[@sirpepe/shed](../README.md) / regexp

# Module: regexp

RegExp utilities. Use this module by importing from `@sirpepe/shed/regexp`.

## Table of contents

### Functions

- [escapeRegExpString](regexp.md#escaperegexpstring)
- [isRegExp](regexp.md#isregexp)

## Functions

### escapeRegExpString

▸ **escapeRegExpString**(`string`): `string`

Escapes a string for use in regular expressions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

[src/regexp.ts:32](https://github.com/SirPepe/shed/blob/3aa9cc7/src/regexp.ts#L32)

___

### isRegExp

▸ **isRegExp**(`input`): input is RegExp

Indicates whether `input` is either a regular expression object or a string
containing a valid regular expression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RegExp` |

#### Returns

input is RegExp

#### Defined in

[src/regexp.ts:11](https://github.com/SirPepe/shed/blob/3aa9cc7/src/regexp.ts#L11)

▸ **isRegExp**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`boolean`

#### Defined in

[src/regexp.ts:12](https://github.com/SirPepe/shed/blob/3aa9cc7/src/regexp.ts#L12)

▸ **isRegExp**(`input`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

#### Returns

`boolean`

#### Defined in

[src/regexp.ts:13](https://github.com/SirPepe/shed/blob/3aa9cc7/src/regexp.ts#L13)
