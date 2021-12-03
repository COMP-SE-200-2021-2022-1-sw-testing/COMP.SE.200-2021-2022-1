import { compact } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("compact function", () => {
  it("if value is ['a', 'b', null, 0, undefined, '',NaN], it will return ['a', 'b','c']", async () => {
    expect(compact(['a', 'b', null, 0, undefined, '', NaN])).to.deep.equal(['a', 'b']);
  });

});
