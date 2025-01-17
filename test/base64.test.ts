import { toBase64, fromBase64 } from "../src/base64";

describe("base64", () => {
  it("encodes and decodes data", async () => {
    const encode0 = toBase64(new Uint8Array([]));
    expect(encode0).toEqual("");
    const decode0 = fromBase64(encode0);
    expect(decode0).toEqual(new Uint8Array([]));
    const encode1 = toBase64(new Uint8Array([0]));
    expect(encode1).toEqual("AA");
    const decode1 = fromBase64(encode1);
    expect(decode1).toEqual(new Uint8Array([0]));
    const encode2 = toBase64(new Uint8Array([1]));
    expect(encode2).toEqual("AQ");
    const decode2 = fromBase64(encode2);
    expect(decode2).toEqual(new Uint8Array([1]));
    const encode3 = toBase64(new Uint8Array([1, 1, 1]));
    expect(encode3).toEqual("AQEB");
    const decode3 = fromBase64(encode3);
    expect(decode3).toEqual(new Uint8Array([1, 1, 1]));
    const encode4 = toBase64(new Uint8Array([8, 2, 4, 1]));
    expect(encode4).toEqual("CAIEAQ");
    const decode4 = fromBase64(encode4);
    expect(decode4).toEqual(new Uint8Array([8, 2, 4, 1]));
  });
});
