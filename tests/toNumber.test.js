import { toNumber } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("toNumber function", () => {
  it("if value is null return 0", async () => {
    expect(toNumber(null)).to.equal(0);
  });

  it("if value 3.4 return 3", async () => {
    expect(toNumber(3.4)).to.equal(3.4);
  });

  it("if value Symbol return NaN", async () => {
    expect(toNumber(Symbol.iterator)).to.deep.equal(NaN);
  });

  it("if value {active:true} return `{active:true}`", async () => {
    expect(toNumber({active:true})).to.deep.equal(NaN);
  });

  it("if value '123' return 123", async () => {
    expect(toNumber('123')).to.equal(123);
  });
});
