import { isEmpty } from "./entryFileForDepsTree.js";
import chai from "chai";

const expect = chai.expect;

describe("isEmpty function", () => {
  it("if value is null return true", async () => {
    expect(isEmpty(null)).to.equal(true);
  });

  it("if value is undefined return true", async () => {
    expect(isEmpty(undefined)).to.equal(true);
  });

  it("if value is 0 return false", async () => {
    expect(isEmpty(0)).to.equal(false);
  });

  it("if value is '' return true", async () => {
    expect(isEmpty("")).to.equal(true);
  });

  it("if value is [] return true", async () => {
    expect(isEmpty([])).to.equal(true);
  });

  it("if value is {} return true", async () => {
    expect(isEmpty({})).to.equal(true);
  });

  it("if value is {name: 'diyaz'} return false", async () => {
    expect(isEmpty({ name: "diyaz" })).to.equal(false);
  });

  it("if value is empty map return true", async () => {
    expect(isEmpty(new Map())).to.equal(true);
  });

  it("if prototype is seeded return false", async () => {
    let animal = {
      eats: true,
    };

    function Rabbit(name) {
      this.name = name;
    }

    Rabbit.prototype = animal;

    let rabbit = new Rabbit("White Rabbit");

    expect(isEmpty(rabbit.prototype).to.equal(false));
  });
});
