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

[src/FRDY.ts:62](https://github.com/SirPepe/shed/blob/0fa77b2/src/FRDY.ts#L62)

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

[src/FRDY.ts:46](https://github.com/SirPepe/shed/blob/0fa77b2/src/FRDY.ts#L46)
