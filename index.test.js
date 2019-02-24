import {telephoneCheck} from "./index.js";

let output;

beforeEach(() => {
  output = null;
});

describe("Palindrome Checker", () => {
  it("Should return a Boolean", () => {
    output = telephoneCheck("123");
    expect(typeof output).toBe("boolean");
  });

  it("Should return true when given proper phone numbers", () => {
    output = telephoneCheck("1 555-555-5555");
    expect(output).toBe(true);

    output = telephoneCheck("1 (555) 555-5555");
    expect(output).toBe(true);

    output = telephoneCheck("5555555555");
    expect(output).toBe(true);

    output = telephoneCheck("555-555-5555");
    expect(output).toBe(true);

    output = telephoneCheck("(555)555-5555");
    expect(output).toBe(true);

    output = telephoneCheck("1(555)555-5555");
    expect(output).toBe(true);

    output = telephoneCheck("1 555 555 5555");
    expect(output).toBe(true);
  });

  it("Should return false if given not a phone number", () => {
    output = telephoneCheck("555-5555");
    expect(output).toBe(false);

    output = telephoneCheck("5555555");
    expect(output).toBe(false);

    output = telephoneCheck("1 555)555-5555");
    expect(output).toBe(false);

    output = telephoneCheck("123**&!!asdf#");
    expect(output).toBe(false);

    output = telephoneCheck("55555555");
    expect(output).toBe(false);

    output = telephoneCheck("(6054756961)");
    expect(output).toBe(false);

    output = telephoneCheck("2 (757) 622-7382");
    expect(output).toBe(false);

    output = telephoneCheck("0 (757) 622-7382");
    expect(output).toBe(false);

    output = telephoneCheck("-1 (757) 622-7382");
    expect(output).toBe(false);

    output = telephoneCheck("2 757 622-7382");
    expect(output).toBe(false);

    output = telephoneCheck("10 (757) 622-7382");
    expect(output).toBe(false);

    output = telephoneCheck("(275)76227382");
    expect(output).toBe(false);

    output = telephoneCheck("555)-555-5555");
    expect(output).toBe(false);

    output = telephoneCheck("(555)5(55?)-5555");
    expect(output).toBe(false);
  });
});
