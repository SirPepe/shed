[@sirpepe/shed](../README.md) / error

# Module: error

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

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |
| `ErrorConstructor` | `ErrorConstructor` |

#### Returns

`never`

#### Defined in

[src/error.ts:21](https://github.com/SirPepe/shed/blob/1c0eb31/src/error.ts#L21)
