function anagram(str1, str2) {
  const str1Array = str1.split("");
  const str2Array = str2.split("");

  while (str1Array.length !== 0) {
    const char1 = str1Array[0];
    const char2 = str2Array.find((item) => item === char1);

    if (char1 === char2) {
      str1Array.splice(str1Array.indexOf(char1), 1);
      str2Array.splice(str2Array.indexOf(char2), 1);
    } else {
      break;
    }
  }
  if (str1Array.length === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = anagram;
