import { isArguments } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isArguments function", () => {
  it("if value is arguments return true", async () => {
    expect(isArguments(function() { return arguments }())).to.equal(true);
  });

  it("if value is not arguments return false", async () => {
    expect(isArguments([1,2,4])).to.equal(false);
  });

  it("if value is null return false", async () => {
    expect(isArguments(null)).to.equal(false);
  });
});
