import { FRDY } from "../src";
import { compressToBase64, decompressFromBase64 } from "../src/compress";

describe("compress", () => {
  describe("base64", () => {
    it("compresses and decompresses data", async () => {
      const input = { foo: 42, bar: [1, 2, 3], baz: true };
      const output = await decompressFromBase64(
        await compressToBase64(input, undefined, "gzip"),
        undefined,
        "gzip",
      );
      expect(output).toEqual(input);
    });

    it("uses replacers and revivers", async () => {
      const input = { foo: new Map([["foo", 42]]) };
      const output = await decompressFromBase64(
        await compressToBase64(input, FRDY.replacer, "gzip"),
        FRDY.reviver,
        "gzip",
      );
      expect(output).toEqual(input);
    });
  });
});
