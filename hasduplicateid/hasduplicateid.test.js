const hasDuplicateId = require("./hasduplicateid");

describe("DOM tree has duplicate IDs", () => {
  it("should be a function", () => {
    expect(typeof hasDuplicateId).toEqual("function");
  });
  it("should return a boolean", () => {
    expect(typeof hasDuplicateId()).toEqual("boolean");
  });
  it("should return false if no root passed in", () => {
    expect(hasDuplicateId()).toBeFalsy();
  });
  it("should return true if duplicates are found", () => {
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");
    root.appendChild(child1);
    root.appendChild(child2);

    root.id = "root";
    child1.id = "child";
    child1.id = "child";

    const result = hasDuplicateId(root);
    expect(result).toEqual(true);
  });
});
