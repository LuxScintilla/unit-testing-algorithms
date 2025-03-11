function palindrome(string) {
  const stringReversed = string.split("").reverse().join("");
  if (stringReversed === string) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;
