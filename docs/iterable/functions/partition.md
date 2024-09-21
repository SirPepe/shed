[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [iterable](../README.md) / partition

# Function: partition()

## partition(input, predicate)

> **partition**\<`T`\>(`input`, `predicate`): [`T`[], `T`[]]

Splits an iterable into two groups. The first group contains elements
the predicate function returns truthy for, the second group contains elements
the predicate returns falsy for. The predicate is invoked with one argument
(the current value).

Examples:

```typescript
```

### Type Parameters

• **T**

### Parameters

• **input**: `Iterable`\<`T`, `any`, `any`\>

• **predicate**

### Returns

[`T`[], `T`[]]

### Defined in

[src/iterable.ts:112](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/iterable.ts#L112)

## partition(input, predicate)

> **partition**\<`T`, `U`\>(`input`, `predicate`): [`T`[], `U`[]]

### Type Parameters

• **T**

• **U**

### Parameters

• **input**: `Iterable`\<`T` \| `U`, `any`, `any`\>

• **predicate**

### Returns

[`T`[], `U`[]]

### Defined in

[src/iterable.ts:116](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/iterable.ts#L116)
