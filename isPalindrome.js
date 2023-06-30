// Write your code below

function isPalindrome(word) {
  let reversed = word.split('').reverse().join('');
      if(word === (reversed)) {
          return true
      } else {
        return false;
      }
    }
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('Boo'));
console.log( isPalindrome('boo'));