const getByTag = require("./getbytag");

describe("Get elements by tag", () => {
  it("should be a function", () => {
    expect(typeof getByTag).toEqual("function");
  });
  it("should return an array", () => {
    expect(Array.isArray(getByTag())).toEqual(true);
  });
  it("should return an empty array if no root is passed in", () => {
    expect(getByTag()).toEqual([]);
  });
  it("should return only the root element if no tagName is passed in", () => {
    const root = document.createElement("div");
    expect(getByTag(root)).toEqual([root]);
  });
  it("should return the correct elements", () => {
    const root = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const span = document.createElement("span");
    root.appendChild(p1);
    span.appendChild(p2);
    root.appendChild(span);

    const result = getByTag(root, "p");
    expect(result).toEqual([p1, p2]);
  });
});
