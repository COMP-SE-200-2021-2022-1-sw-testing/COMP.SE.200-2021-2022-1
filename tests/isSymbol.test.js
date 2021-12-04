import { isSymbol} from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isSymbol function", () => {
  it("if value is symbol return true", async () => {
    expect(isSymbol(Symbol.iterator)).to.equal(true);
  });

  it("if value is not symbol return false", async () => {
    expect(isSymbol('ags')).to.equal(false);
  });

  it("if value is null return false", async () => {
    expect(isSymbol(null)).to.equal(false);
  });
});
