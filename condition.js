//Assignment statement
var a = 5;
var b = "Hello";
var c; //undifine คือตัวแปรที่เรายังไม่กำหนดค่าให้กับตัวแปร

console.log(a, b, c);
console.log(a + b);

//condition statement
var x = 50;

if (x >= 50) {
  x = "ค่านี้คือ 50";
  console.log(x);
} else {
  x = "ค่านี้ไม่ใช้ 50";
}

//for loop
var i = 1;
for (var i = 1; i < 10; i++) {
    console.log(i);
}

//Shorthand Property & Method
//old
let name = "wissanu";
let lastName = "khongjandee";

let user ={
    name: name,
    lastName: lastName
};

console.log(user);

//Shorthand Property & Method
//new

let car = "toyota";
let color = "red";
let carColor ={
    car,
    color
};

console.log(carColor);

//Shorthand Property & Method
//old
function allname1 (car, color, total){
    return{
        car: car,
        color: color,
        total: total
    }
};

console.log(allname("Honda", "Black", 2));


//Shorthand Property & Method
//new
function allName2 (car, color, total){
    return{
        car,color,total
    }
};

console.log(allName2("Mazda", "Grey", 3))