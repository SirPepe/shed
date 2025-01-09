/**
 * Compress/decompress JSON-serializable objects with native compression streams
 * and encode/decode to/from url-safe base 64. Use this module by importing from
 * `@sirpepe/shed/compress`.
 */

import { fromBase64, toBase64 } from "./base64";

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
    const stream = new Blob([json])
      .stream()
      .pipeThrough(new CompressionStream(format));
    const bytes = await new Response(stream).bytes();
    return toBase64(bytes);
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
    const bytes = fromBase64(inputBase64);
    const stream = new Blob([bytes])
      .stream()
      .pipeThrough(new DecompressionStream(format));
    const jsonText = await new Response(stream).text();
    return JSON.parse(jsonText, reviver);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Unable to decompress input (${message})`, { cause: err });
  }
}
