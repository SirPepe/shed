/**
 * String utilities. Use this module by importing from `@sirpepe/shed/string`.
 *
 * @module
 */

/**
 * Turn a string's first character to upper case.
 */
export function uppercaseFirst(str: string): string {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest.join("");
}

/**
 * Turn a string's first character to lower case.
 */
export function lowercaseFirst(str: string): string {
  const [first, ...rest] = str;
  return first.toLowerCase() + rest.join("");
}

/**
 * Get the number of characters/graphemes in a string.
 */
export function countGraphemes(text: string): number {
  return Array.from(new Intl.Segmenter().segment(text)).length;
}

/**
 * Get the number of characters/graphemes in a string.
 */
export function length(text: string, tabSize: number): number {
  let size = 0;
  for (const { segment } of new Intl.Segmenter().segment(text)) {
    if (segment === "\t") {
      size += tabSize;
    } else {
      size++;
    }
  }
  return size;
}
