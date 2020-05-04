// Array
var names = ["John", "Mark", "Jane"];
var years = new Array(12, 12, 13)
console.log(names, years)

names[2] = "Ben";
console.log(names);

var John = ["John", "Smith", 1993, "Teacher"];
console.log(John)

John.unshift("mr.");
console.log(John)

var checkJob = John.indexOf("Designer") === -1 
    ? "John is not Designer" 
    : "John is a Designer"
console.log(checkJob)

if (John.indexOf("Designer") === -1 ) {
    console.log("John is not Designer");
}else {
    console.log("John is a Designer")
}