export function addAll<T>(target: Set<T>, ...groups: Iterable<T>[]): void {
  for (const group of groups) {
    for (const item of group) {
      target.add(item);
    }
  }
}
