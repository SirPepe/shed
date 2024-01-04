[@sirpepe/shed](../README.md) / UnsafeMap

# Module: UnsafeMap

A map that works just like a regular map, but throws when attempting to get a
key that is not in the map (effectively adding a type assertion to `get()`).
Because `get()` returns `V` instead of `V | undefined` this makes life in
TypeScript somewhat easier. Use this module by importing from
`@sirpepe/shed/UnsafeMap`.

## Table of contents

### Classes

- [UnsafeMap](../classes/UnsafeMap.UnsafeMap.md)
