import { countBy } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("countBy function", () => {
  it("if collection has a match return findings", async () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
      { user: "tutu", active: false },
    ];

    expect(countBy(users, (value) => value.active)).to.deep.equal({
      true: 1,
      false: 2,
    });
  });

  it("if collection is null return {}", async () => {
    expect(countBy(null, (value) => value.active)).to.deep.equal({});
  });
});
