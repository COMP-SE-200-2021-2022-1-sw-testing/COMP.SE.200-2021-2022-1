import { isArrayLikeObject} from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isArrayLikeObject function", () => {
  it("if value is [1,2,4] return true", async () => {
    expect(isArrayLikeObject([1, 2, 4])).to.equal(true);
  });

  it("if value is '1,2,4' return false", async () => {
    expect(isArrayLikeObject('1,2,4')).to.equal(false);
  });
});
