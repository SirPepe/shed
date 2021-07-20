[@sirpepe/shed](../README.md) / function

# Module: function

## Table of contents

### Functions

- [debounce](function.md#debounce)
- [debounceRaf](function.md#debounceraf)
- [identity](function.md#identity)
- [noop](function.md#noop)

## Functions

### debounce

▸ **debounce**<T, A\>(`func`, `t?`): (`this`: `T`, ...`args`: `A`) => `void`

Returns a debounced function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | `A`: `any`[] |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | (`this`: `T`, ...`args`: `A`) => `unknown` | `undefined` |
| `t` | `number` | 1000 |

#### Returns

`fn`

▸ (`this`, ...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...args` | `A` |

##### Returns

`void`

#### Defined in

[src/function.ts:36](https://github.com/SirPepe/shed/blob/5ac37c8/src/function.ts#L36)

___

### debounceRaf

▸ **debounceRaf**<T, A\>(`func`): (`this`: `T`, ...`args`: `A`) => `void`

Returns a function that fires `func()` when the next frame renders, at most
once per frame.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | `A`: `any`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | (`this`: `T`, ...`args`: `A`) => `unknown` |

#### Returns

`fn`

▸ (`this`, ...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `...args` | `A` |

##### Returns

`void`

#### Defined in

[src/function.ts:56](https://github.com/SirPepe/shed/blob/5ac37c8/src/function.ts#L56)

___

### identity

▸ **identity**<T\>(`x`): `T`

A unary function that does nothing and returns its argument. Useful for
writing tests or triggering side effects on lazily-evaluated generators.

Example:

```typescript
const input = [42];
const output = identity(input);
input === output // > true
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `T` |

#### Returns

`T`

#### Defined in

[src/function.ts:29](https://github.com/SirPepe/shed/blob/5ac37c8/src/function.ts#L29)

___

### noop

▸ **noop**(...`args`): `void`

A function that does nothing and accepts any number of arguments. Useful for
writing tests. **This function is sort-of superfluous in plain JavaScript**,
where `Function.prototype` can also serve as a do-nothing function, but
TypeScript users need a proper stand-alone do-nothing function.

Example:

```typescript
noop(); // nothing happened!
noop(42); // still nothing!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

[src/function.ts:15](https://github.com/SirPepe/shed/blob/5ac37c8/src/function.ts#L15)
