[@sirpepe/shed](../README.md) / FRDY

# Module: FRDY

A JSON-based protocol that allows stringification and parsing of ECMAScript
maps and sets, in addition to everything else that's valid ECMAScript. Freddy
is way less universal than JSON, but that is the price for at least allowing
the exchange of maps and sets between ECMAScript environments. Use this
module by importing from `@sirpepe/shed/FRDY` or `@sirpepe/shed`.

## Table of contents

### Functions

- [parse](FRDY.md#parse)
- [replacer](FRDY.md#replacer)
- [reviver](FRDY.md#reviver)
- [stringify](FRDY.md#stringify)

## Functions

### parse

▸ **parse**(`input`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`any`

#### Defined in

[src/FRDY.ts:62](https://github.com/SirPepe/shed/blob/dd181a6/src/FRDY.ts#L62)

___

### replacer

▸ **replacer**(`_`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `value` | `unknown` |

#### Returns

`any`

#### Defined in

[src/FRDY.ts:30](https://github.com/SirPepe/shed/blob/dd181a6/src/FRDY.ts#L30)

___

### reviver

▸ **reviver**(`_`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `string` |
| `value` | `unknown` |

#### Returns

`any`

#### Defined in

[src/FRDY.ts:50](https://github.com/SirPepe/shed/blob/dd181a6/src/FRDY.ts#L50)

___

### stringify

▸ **stringify**(`input`, `space?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `space?` | `string` \| `number` |

#### Returns

`string`

#### Defined in

[src/FRDY.ts:46](https://github.com/SirPepe/shed/blob/dd181a6/src/FRDY.ts#L46)
