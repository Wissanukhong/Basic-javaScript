//object.entries is return an array of a given object own enumeable stringkeyed
var arr = new Array();
arr[0] = "a";
arr[1] = "b";
arr[2] = "c";

var entriesArray = arr.entries();
console.log(entriesArray.next().value);
console.log(entriesArray.next().value);
console.log(entriesArray.next().value);


//workshop 2 
const obj = {
  a: "Wissanu",
  b: 26
};

for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}


//worhshop 3
let newEntries = ["a", "b", "c", "d"];

for (let [key,value] of Object.entries(newEntries)){
    console.log(`${key}: ${value}`);
}

