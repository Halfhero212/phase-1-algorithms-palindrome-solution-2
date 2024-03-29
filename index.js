function isPalindrome(word) {
  
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    
    const endIndex = word.length - 1 - startIndex;
    
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  
  return true;
}

/* 
  Pseudocode:
  For each character in the first half of the string
    If the character does not match the corresponding character from the end
      Return false (not a palindrome)
  If all matched, return true (is a palindrome)
*/

/*
  Written Explanation:
  This function iterates through the first half of the given string. For each character, it checks if it matches the corresponding character from the end of the string. If any characters don't match, the function immediately returns false, indicating the word is not a palindrome. If the loop completes without finding mismatches, the function returns true, indicating the word is a palindrome.
*/

// Custom test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
