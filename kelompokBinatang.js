

function groupAnimals(animals) {
  // you can only write your code here!
  var alp = 'abcdefghijklmnopqrstuvwxyz';
  var result = [];
  var temp = [];
  for(var i=0;i<alp.length;i+=1){
    for (var j =0;j<animals.length;j+=1){
      if (alp[i] === animals[j][0]){
        temp.push(animals[j])
      }
    }
    if (temp.length !== 0){
      result.push(temp)
    }
    temp = [];  
  }
  return (result)
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]