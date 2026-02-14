function diffArray(array1, array2){
  
  const onlyInOne = array1.filter(word => !array2.includes(word));
  const onlyInSecond = array2.filter(word => !array1.includes(word));
  const symmetric = [...onlyInOne, ...onlyInSecond];
  if(symmetric.length == 0){
    return [];
  }
  return symmetric;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]));
console.log(diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]));
console.log(diffArray([], ["apple", "banana"]));
console.log(diffArray(["apple", "banana"], []));
console.log(diffArray([], []));
