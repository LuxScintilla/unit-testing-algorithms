const palindrome = require("./palindrome");

describe("find the palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });
  it("should return true if is a palindrome", () => {
    expect(palindrome("kayak")).toBeTruthy();
  });
  it("should return true if is a palindrome", () => {
    expect(palindrome("rotator")).toBeTruthy();
  });
  it("should return false if is not a palindrome", () => {
    expect(palindrome("world")).toBeFalsy();
  });
  it("should return false if includes spaces", () => {
    expect(palindrome(" kayak")).toBeFalsy();
  });
  it("should return false if includes spaces", () => {
    expect(palindrome(" rotator")).toBeFalsy();
  });
});
