[**@sirpepe/shed**](../../README.md) • **Docs**

***

[@sirpepe/shed](../../README.md) / [iterable](../README.md) / mapBy

# Function: mapBy()

## mapBy(values, selector)

> **mapBy**\<`T`, `Key`\>(`values`, `selector`): `Map`\<`T`\[`Key`\], `T`\>

Organizes the elements of an iterable in a map. The map's keys are generated
by a selector which can either be a function or a key for any property on the
elements. The selector function (if provided) is invoked with one argument
(the current value). If the selector function produces the same key twice, it
will throw an error.

Examples:

```typescript
```

### Type Parameters

• **T**

• **Key** *extends* `string` \| `number` \| `symbol`

### Parameters

• **values**: `Iterable`\<`T`, `any`, `any`\>

• **selector**: `Key`

### Returns

`Map`\<`T`\[`Key`\], `T`\>

### Defined in

[src/iterable.ts:76](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/iterable.ts#L76)

## mapBy(values, selector)

> **mapBy**\<`T`, `Key`\>(`values`, `selector`): `Map`\<`Key`, `T`\>

### Type Parameters

• **T**

• **Key**

### Parameters

• **values**: `Iterable`\<`T`, `any`, `any`\>

• **selector**

### Returns

`Map`\<`Key`, `T`\>

### Defined in

[src/iterable.ts:80](https://github.com/SirPepe/shed/blob/36009fde0fee9ee53321ca81309876bbb49851e3/src/iterable.ts#L80)
