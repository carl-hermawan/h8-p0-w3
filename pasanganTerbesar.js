function pasanganTerbesar(num) {
  // you can only write your code here!
  numStr = String(num)
  var arr = [];
  for (var i = 0; i < numStr.length-1; i += 1){
    arr.push(numStr[i]+numStr[i+1])
  }
  var res = arr[0];
  for (var j = 0; j < arr.length; j += 1){
    if (arr[j] > res){
      res = arr[j]
    }
  }
  return res
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99