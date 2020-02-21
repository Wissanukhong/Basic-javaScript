var totalCar = 20;
var car = "red";

if (totalCar === 20) {
  var car = "green";
  console.log("In bloack scope", car);
}

console.log("Outside blockscope", car);

var allcar = new Array("toyata", "Benz",{name:"wissanu", lastName:"Khongjandee"});
console.log(allcar);

var carAll = new Array("honda", "yamaha");
console.log(carAll);