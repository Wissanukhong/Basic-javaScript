var totalCar =  20;
var car = "red";

if(totalCar === 20) {
    var car = "green";
    console.log("In bloack scope", car);
}

console.log("Outside blockscope", car);

