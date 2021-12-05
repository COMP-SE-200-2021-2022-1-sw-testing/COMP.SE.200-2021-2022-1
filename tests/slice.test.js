import { slice } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("slice function", () => {
  it("if value is null return []", async () => {
    expect(slice(null)).to.deep.equal([]);
  });

  it("if start is -1 of 4th length array [1,2,3,4] then return [4]", async () => {
    expect(slice([1,2,3,4],-1)).to.deep.equal([4]);
  });

  it("if end is -1 and start is 0 of 4th length array [1,2,3,4] then return [1,2,3]", async () => {
    expect(slice([1,2,3,4],0, -1)).to.deep.equal([1,2,3]);
  });

  it("if end is -6 and start is 0 of 4th length array [1,2,3,4] then return []", async () => {
    expect(slice([1,2,3,4],0, -6)).to.deep.equal([]);
  });

  it("if start is null of 4th length array [1,2,3,4] then return [1,2,3,4]", async () => {
    expect(slice([1,2,3,4],null)).to.deep.equal([1,2,3,4]);
  });
});
