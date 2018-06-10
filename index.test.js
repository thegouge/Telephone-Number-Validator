import {
  telephoneCheck
} from "./index.js";

let output;

beforeEach(() => {
  output = null;
});

describe("Palindrome Checker", () => {
  it("Should return a Boolean", () => {
    output = telephoneCheck("123");
    expect(typeof output).toBe("Boolean");
  });

});