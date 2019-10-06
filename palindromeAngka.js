function angkaPalindrome(num) {
  // you can only write your code here!
  if (num < 10){
    num += 1
  } else {
    while(true){
      numRev = ''
      numStr = String(num)
      for(var i = numStr.length - 1; i >= 0; i-= 1){
        numRev += numStr[i]
      }
      if (numStr == numRev){
        return Number(numStr)
      } else {
        num += 1;
      }
    }      
  }

  return num
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001