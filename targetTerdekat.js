function targetTerdekat(arr) {
  // you can only write your code here!
  var posO = 0;
  var posXf = 0;
  var posXr = 0;
  for (var i = 0;i < arr.length; i += 1){
    if (arr[i] == 'o'){
      posO = i;
    }
  }
  for (var j = posO; j < arr.length; j += 1){
    if (arr[j] == 'x'){
      posXr = j - posO;
      break;
    }
  }
  for (var j = posO; j >= 0; j -= 1){
    if (arr[j] == 'x'){
      posXf = posO - j;
      break;
    }
  }
  if (posXr == 0 && posXf == 0){
    return 0
  } else if (posXf == 0){
    return posXr
  } else if (posXr == 0){
    return posXf
  } else if (posXf < posXr){
    return posXf
  } else if (posXr < posXf){
    return posXr
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2