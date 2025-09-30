console.log("hello");
let placeSet = new Set();

placeSet.add("America");
placeSet.add("England");
placeSet.add("Chicago");

const setIterator = placeSet.keys();

console.log(setIterator);



const set1 = new Set();

set1.add('0');
set1.add(1);
set1.add(1);

const iterator1 = set1.keys();
console.log(iterator1);