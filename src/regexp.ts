/**
 * Indicates whether `input` is either a regular expression object or a string
 * containing a valid regular expression.
 */
export function isRegExp(input: RegExp | any): input is RegExp;
export function isRegExp(input: any): boolean;
export function isRegExp(input: any): boolean {
  try {
    new RegExp(input);
    return true;
  } catch (e) {
    return false;
  }
}

