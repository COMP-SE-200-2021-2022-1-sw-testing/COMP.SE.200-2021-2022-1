import { isBuffer} from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isBuffer function", () => {
  it("if value is null return false", async () => {
    expect(isBuffer(null)).to.equal(false);
  });
  
  it("if value is a buffer return true", async () => {
    expect(isBuffer(new Buffer(2))).to.equal(true);
  });

  it("if value is array of bytes return false", async () => {
    expect(isBuffer(new Uint8Array(2))).to.equal(false);
  });
});
