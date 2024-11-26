/**
 * Compress/decompress JSON-serializable objects with native compression streams
 * and encode/decode to/from url-safe base 64. Use this module by importing from
 * `@sirpepe/shed/compress`.
 */

const encodeTo: Record<string, string> = { "+": "-", "/": "_" };
const decodeFrom: Record<string, string> = { "-": "+", _: "/", ".": "=" };

// Required for chrome: https://issues.chromium.org/issues/40612900
(ReadableStream.prototype as any)[Symbol.asyncIterator] ??= async function* () {
  const reader = this.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
};

/**
 * Compress a JSON-serializable object to url-safe base64 using the JSON
 * replacer `replacer` and the data format `format`.
 */
export async function compressToBase64(
  inputData: any,
  replacer?: (this: any, key: string, value: any) => any,
  format: ConstructorParameters<typeof CompressionStream>[0] = "deflate-raw",
): Promise<string> {
  try {
    const json = JSON.stringify(inputData, replacer);
    const compressionStream = new Blob([json])
      .stream()
      .pipeThrough(new CompressionStream(format));
    let binString = "";
    for await (const bytes of compressionStream as any) {
      binString += String.fromCodePoint(...bytes);
    }
    return btoa(binString).replace(/[+/]/g, (x) => encodeTo[x]);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Unable to compress input (${message})`, { cause: err });
  }
}

/**
 * Decompress the output of `compressToBase64()`  using the JSON reviver
 * `reviver` and the data format `format`.
 */
export async function decompressFromBase64<T = any>(
  inputBase64: string,
  reviver?: (this: any, key: string, value: any) => any,
  format: ConstructorParameters<typeof DecompressionStream>[0] = "deflate-raw",
): Promise<T> {
  try {
    inputBase64 = inputBase64.replace(/[-_.]/g, (x) => decodeFrom[x]);
    const binString = atob(inputBase64);
    const inputBytes = Uint8Array.from(
      binString,
      (s): number => s.codePointAt(0) as number,
    );
    const decompressionStream = new Blob([inputBytes])
      .stream()
      .pipeThrough(new DecompressionStream(format));
    let json = "";
    for await (const bytes of decompressionStream as any) {
      json += new TextDecoder().decode(bytes);
    }
    return JSON.parse(json, reviver);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Unable to decompress input (${message})`, { cause: err });
  }
}
