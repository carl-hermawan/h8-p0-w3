function palindrome(kata) {
  // you can only write your code here!
  // console.log(kata == kata.split('').reverse().join(''))
  var temp = ''
  for (var i = kata.length - 1; i >= 0; i-=1){
    temp += kata[i]
  }
  if (temp == kata){
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false