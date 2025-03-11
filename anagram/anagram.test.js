const anagram = require("./anagram");

describe("Anagram", () => {
  it("should be a function", () => {
    expect(typeof anagram).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof anagram("ant", "tan")).toEqual("boolean");
  });
  it("should return true if anagram", () => {
    expect(anagram("ant", "tan")).toBeTruthy();
  });
  it("should return true if anagram", () => {
    expect(anagram("cinema", "iceman")).toBeTruthy();
  });
  it("should return false if not an anagram", () => {
    expect(anagram("hello", "world")).toBeFalsy();
  });
});
