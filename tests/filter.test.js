import { filter } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("filter function", () => {
  it("if collection has a match return it", async () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];

    expect(filter(users, ({ active }) => active)).to.deep.equal([users[0]]);
  });

  it("if collection is null return [[]]", async () => {
    expect(filter(null, ({ active }) => active)).to.deep.equal([[]]);
  });
});
