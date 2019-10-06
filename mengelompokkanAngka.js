function mengelompokkanAngka(arr) {
  // you can only write your code here!
  var bar1=[];
  var bar2=[];
  var bar3=[];
  var res=[];
  for (var i=0;i<arr.length;i+=1){
    if (arr[i]%3 == 0){
      bar3.push(arr[i])
    } else if (arr[i]%2 == 1){
      bar2.push(arr[i])
    } else if (arr[i]%2 == 0){
      bar1.push(arr[i])
    }
  }
  res.push(bar1,bar2,bar3)
  return res
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]