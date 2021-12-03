import { isDate} from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isDate function", () => {
  it("if value is new Date return true", async () => {
    expect(isDate(new Date)).to.equal(true);
  });


  it("if value is '22.12.2003' return false", async () => {
    expect(isDate('22.12.2003')).to.equal(false);
  });

  it("if value is {} return false", async () => {
    expect(isDate({})).to.equal(false);
  });

  it("if value is null return false", async () => {
    expect(isDate(null)).to.equal(false);
  });
});
