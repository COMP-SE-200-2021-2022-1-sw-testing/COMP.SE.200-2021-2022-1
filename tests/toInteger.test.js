import { toInteger } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("toInteger function", () => {
  it("if value is null return 0", async () => {
    expect(toInteger(null)).to.equal(0);
  });

  it("if value 3.4 null return 3", async () => {
    expect(toInteger(3.4)).to.equal(3);
  });
});
