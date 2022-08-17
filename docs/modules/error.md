[@sirpepe/shed](../README.md) / error

# Module: error

Error utilities. Use this module by importing from `@sirpepe/shed/error`
or `@sirpepe/shed`.

## Table of contents

### Functions

- [fail](error.md#fail)

## Functions

### fail

▸ **fail**(`reason?`, `ErrorConstructor?`): `never`

A function that throws an error when called.

Example:

```
try {
  fail("BOOM!");
} catch (error) {
  console.log(error.message); // > "BOOM!"
}
```

This is useful if you want to trigger exceptions in places where only
expressions are allowed:

```typescript
function argumentRequired(arg = fail("Missing argument")) {}
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reason?` | `string` | `undefined` |
| `ErrorConstructor` | `ErrorConstructor` | `Error` |

#### Returns

`never`

#### Defined in

[src/error.ts:28](https://github.com/SirPepe/shed/blob/2ac893f/src/error.ts#L28)
