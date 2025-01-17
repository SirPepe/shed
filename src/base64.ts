/**
 * URL-safe base64 functionality. Use this module by importing from
 * `@sirpepe/shed/compress`.
 */

const encodeTo: Record<string, string> = { "+": "-", "/": "_", "=": "" };
const decodeFrom: Record<string, string> = { "-": "+", _: "/" };

// Strips padding and encodes replacement characters
export function toBase64(input: Uint8Array): string {
  return btoa(String.fromCodePoint(...input)).replace(
    /[=+/]/g,
    (x) => encodeTo[x],
  );
}

// Re-adds removed padding and decodes replacement characters
export function fromBase64(input: string) {
  if (input === "") {
    return new Uint8Array();
  }
  let padded = input + "===".slice((input.length + 3) % 4);
  padded = padded.replace(/[-_]/g, (x) => decodeFrom[x]);
  const binString = atob(padded);
  return Uint8Array.from(binString, (s): number => s.codePointAt(0) as number);
}
