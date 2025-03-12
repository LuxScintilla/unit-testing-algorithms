function getByTag(root, tagName) {
  if (!root) return [];
  if (!tagName) return [root];

  let result = [];

  // If result is a tag we're looking for
  if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
    result.push(root);
  }

  if (root.hasChildNodes()) {
    for (let child of root.children) {
      result = result.concat(getByTag(child, tagName));
    }
  }
  return result;
}

module.exports = getByTag;
