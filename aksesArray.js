function balikString(str){
  var result = '';
  for (var i = str.length-1;i>=0;i-=1 ){
    result += str[i];
  }
  console.log(result)
}

balikString('hello world!')