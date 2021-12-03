import { isTypedArray } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isTypedArray function", () => {
  it("if value is new Uint8Array return true", async () => {
    expect(isTypedArray(new Uint8Array)).to.equal(true);
  });

  it("if value is [1,2,3] return false", async () => {
    expect(isTypedArray([1,2,3])).to.equal(false);
  });
});
