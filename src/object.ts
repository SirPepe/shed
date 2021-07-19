/**
 * Returns a new object created from the input object, but without the keys in
 * `toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type
 * and the inverse of `picked()`.
 */
export function omitted<T extends object, K extends keyof T>(
  obj: T,
  ...toOmit: K[]
): Omit<T, K> {
  const keysToOmit: Set<any> = new Set(toOmit);
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keysToOmit.has(key)) {
      result[key] = value;
    }
  }
  return result;
};

/**
 * Returns a new object created from the input object, but with only the keys in
 * `toKeep`. Essentially the runtime-variant of TypeScript's `Pick<T, K>` type
 * and the inverse of `omitted()`.
 */
 export function picked<T extends object, K extends keyof T>(
  obj: T,
  ...toKeep: K[]
): Omit<T, K> {
  const keysToKeep: Set<any> = new Set(toKeep);
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (keysToKeep.has(key)) {
      result[key] = value;
    }
  }
  return result;
};
