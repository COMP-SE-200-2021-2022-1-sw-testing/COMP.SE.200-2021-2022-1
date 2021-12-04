import { isBuffer} from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isBuffer function", () => {
  it("if value is null return false", async () => {
    expect(isBuffer(null)).to.equal(false);
  });
  
  it("if value is a buffer return true", async () => {
    const buffer = new ArrayBuffer(8);

    expect(isBuffer(buffer)).to.equal(true);
  });

  it("if value is array of bytes return false", async () => {
    expect(isBuffer(new Uint8Array(2))).to.equal(false);
  });
});
