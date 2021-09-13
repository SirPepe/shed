/**
 * Indicates whether `input` is either a regular expression object or a string
 * containing a valid regular expression.
 */
export function isRegExp(input: RegExp): input is RegExp;
export function isRegExp(input: string): boolean;
export function isRegExp(input: unknown): boolean;
export function isRegExp(input: unknown): boolean {
  if (typeof input === "string") {
    try {
      new RegExp(input);
      return true;
    } catch (e) {
      return false;
    }
  }
  if (
    typeof input === "object" &&
    Object.prototype.toString.call(input) === "[object RegExp]"
  ) {
    return true;
  }
  return false;
}

/**
 * Escapes a string for use in regular expressions.
 */
export function escapeRegExpString(string: string): string {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

