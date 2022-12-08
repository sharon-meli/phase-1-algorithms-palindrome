
function reverse(word){
  const letterOfArray = word.split("")
  const reversedLetterArray = letterOfArray.reverse()
  reversedWord = reversedLetterArray.join("")
  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input String
  const reversedWord = reverse(word)
  if (word === reversedWord){
    return true
  } else {
    return false
  }
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
