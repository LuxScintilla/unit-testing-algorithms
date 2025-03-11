const reverse = require("./reverse");

describe("Reverse String", () => {
  it("should be a function", () => {
    expect(typeof reverse).toEqual("function");
  });
  it("should return a string", () => {
    expect(typeof reverse("hello")).toEqual("string");
  });
  it("should return a reversed string", () => {
    expect(reverse("hello")).toEqual("olleh");
  });
  it("should return a reversed string", () => {
    expect(reverse("world")).toEqual("dlrow");
  });
  it("should return a reversed string", () => {
    expect(reverse("wow")).toEqual("wow");
  });
  it("should return a reversed string", () => {
    expect(reverse("learning things")).toEqual("sgniht gninrael");
  });
});
