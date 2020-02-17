//Excercise 1
let toyota = 20;

let car = "red";

if(toyota === 20){
    let car = "Yellow";
    console.log("toyota in the block scope", car);
}

console.log("Outside block scope", car);

//excercise 2
let redCar = "green";

if(redCar === "green"){
    let redCar = "red";
    console.log(redCar);
}

console.log(redCar);
