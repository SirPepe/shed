import { toBase64, fromBase64 } from "../src/base64";

describe.only("base64", () => {
  it("encodes and decodes data", async () => {
    const encode1 = toBase64(new Uint8Array([0]));
    expect(encode1).toEqual("AA");
    const decode1 = fromBase64(encode1);
    expect(decode1).toEqual(new Uint8Array([0]));
    const encode2 = toBase64(new Uint8Array([8, 2, 4, 1]));
    expect(encode2).toEqual("CAIEAQ");
    const decode2 = fromBase64(encode2);
    expect(decode2).toEqual(new Uint8Array([8, 2, 4, 1]));
  });
});
