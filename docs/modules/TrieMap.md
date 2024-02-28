[@sirpepe/shed](../README.md) / TrieMap

# Module: TrieMap

A trie (prefix tree) that stores values in maps. Very much inspired by
https://github.com/anko/array-keyed-map, but very different in some regards:
  - additional `prune()` method
  - no `size` (which is hard to implement when `prune()` exists)
  - no support for objects in paths (for fear of memory leaks)
  - no iterator support
Use this module by importing from `@sirpepe/shed/TrieMap`.

## Table of contents

### Classes

- [TrieMap](../classes/TrieMap.TrieMap.md)
