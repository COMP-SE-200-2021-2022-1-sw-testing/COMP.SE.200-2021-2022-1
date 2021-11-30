import drop from "../src/drop.js";
import chai from "chai";

const expect = chai.expect;

describe("drop function", () => {
  describe("test drop parameters", () => {
    it("it should return empty array if array param is null", async () => {
      expect(drop(null)).to.deep.equal([]);
    });
  });
});
