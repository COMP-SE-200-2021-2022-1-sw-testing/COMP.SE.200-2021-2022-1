import { drop } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("drop function", () => {
  describe("test drop parameters", () => {
    it("it should return empty array if array param is null", async () => {
      expect(drop(null)).to.deep.equal([]);
    });

    it("it should return empty array if array param is undefined", async () => {
      expect(drop(undefined)).to.deep.equal([]);
    });

    it("it should return empty array if array param is 0", async () => {
      expect(drop(0)).to.deep.equal([]);
    });

    // // todo: investigate this part!
    // it("it should return empty array if array param is string 'qwe'", async () => {
    //   expect(drop("qwe")).to.deep.equal([]);
    // });

    it("it should return empty array if array param is number 123", async () => {
      expect(drop(123)).to.deep.equal([]);
    });
  });

  describe("test drop's work", () => {
    it("it should return 2n array if array is 4 and m is 2", async () => {
      const array = [1, 2, 3, 4];
      const m = 2;
      expect(drop(array, m)).to.deep.equal([3, 4]);
    });

    // it("it should return 2n array if array is 4 and m is 2", async () => {
    //     const array = "qwer";
    //     const m = 2;
    //     expect(drop(array, m)).to.deep.equal(['e', 'r']);
    //   });
  });
});
