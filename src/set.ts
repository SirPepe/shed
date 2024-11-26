/**
 * Set utilities. Use this module by importing from `@sirpepe/shed/set`.
 */

/**
 * Bulk-add iterable contents to a target set.
 */
export function addAll<T>(target: Set<T>, ...groups: Iterable<T>[]): void {
  for (const group of groups) {
    for (const item of group) {
      target.add(item);
    }
  }
}
