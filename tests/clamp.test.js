import { clamp } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("clamp function", () => {
  it("if it claps -10 with -5 and 5 return -5", async () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

//   it("if it clamps 10 with -5 and 5 return 5", async () => {
//     expect(clamp(10, -5, 5)).to.equal(5);
//   });
});
