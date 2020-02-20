//Array คือการเก็บค่าตัวแปรที่มากกว่า 1 ค่า
//การเขียนแบบที่ 1
var carBrand1 = ["Toyota", "Honda", "suzuki"];
carBrand1[3] = "Mazda";
console.log(carBrand1);

//การเขียนแบบที่ 2
var carBrand2 = new Array("Toyota", "Honda", "suzuki");
carBrand2.push("Mazda");
console.log(carBrand2);

//การเขียนแบบที่ 3
var carBrand3 = new Array();
carBrand3[0] = "Toyata";
carBrand3[1] = "Handa";
carBrand3[2] = "Mazda";
console.log(typeof carBrand3);

//method .sort
var number = [11, 15, 1, 5, 7, 155];
console.log(number.sort((a, b) => a - b));
console.log(number.reverse());

var fruit = "apple";
console.log(typeof fruit);

var newFruit = new Array ("banana", "Mongo");
console.log(typeof newFruit);
