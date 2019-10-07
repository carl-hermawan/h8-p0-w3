function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  // return kalimat.split(' ').length
  var temp = ''
  var res = [];
  for (var i = 0; i < kalimat.length; i += 1){
    temp += kalimat[i]
    if (kalimat[i+1] == ' ' || i == kalimat.length-1){
      res.push(temp)
      temp = ''
      i += 1
    }
  }
  return(res.length)
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5