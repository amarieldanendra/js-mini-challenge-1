function isAnagram(word1, word2) {
  // Tulis kodingan dibawah ini

  const array1 = word1
    .toLowerCase()
    .split("")
    .filter((val) => val !== " ")
    .sort()
    .join("");
  const array2 = word2
    .toLowerCase()
    .split("")
    .filter((val) => val !== " ")
    .sort()
    .join("");
  let result = array1 === array2;
  return result;
}

// Test Case
console.log(isAnagram("karet", "raket")); // True
console.log(isAnagram("Balok", "Lobak")); // True
console.log(isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort")); // True
console.log(isAnagram("cicak", "tengkorak")); // False
