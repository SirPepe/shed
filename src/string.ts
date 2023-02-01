/**
 * String utilities. Use this module by importing from `@sirpepe/shed/string`
 * or `@sirpepe/shed`.
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
 * Get the number of characters in a string with customizable value for tabs.
 */
export function length(text: string, tabSize: number): number {
  let size = 0;
  for (const char of text) {
    if (char === "\t") {
      size += tabSize;
    } else {
      size++;
    }
  }
  return size;
}
