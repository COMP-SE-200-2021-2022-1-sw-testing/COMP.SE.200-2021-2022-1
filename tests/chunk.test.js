import { chunk } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("chunk function", () => {
  it("if value is ['a', 'b', 'c', 'd'] and 2 return ['a', 'b'] and ['c', 'd']", async () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).to.deep.equal([['a', 'b'], ['c', 'd']]);
  });

  it("if value is [] and 2 return []", async () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it("if value is [1,2,3] and 0 return []", async () => {
    expect(chunk([1,2,3], 0)).to.deep.equal([]);
  });

  it("if value is null and 2 return []", async () => {
    expect(chunk(null, 2)).to.deep.equal([]);
  });
});
