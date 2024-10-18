function isPalindrome(str) {
    str = str.toLowerCase();
  
    const strToArray = [];
    const ReversedStrToArray = [];
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      strToArray.push(char);
      ReversedStrToArray.unshift(char);
    }
  
    let isStrPalindrome = true;
    for (let i = 0; i < strToArray.length; i++) {
      strToArray[i] !== ReversedStrToArray[i] ? (isStrPalindrome = false) : null;
    }
  
    return isStrPalindrome;
  }