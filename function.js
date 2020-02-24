//Old Function
function total(a, b) {
  return a + b;
}

const result = total(100, 100);
console.log(result);

//New is arrow function
//case 1 กรณีที่การ return ค่ามากกว่า 1 บรรทัด จะมีปีกกา

const totalArrow = (a, b) => {
  console.log("Please wait........");
  return a + b;
};

let result = totalArrow(1000, 150);
console.log(result);

//case 2 กรณีที่การ return  1 บรรทัด
const totalSingle = (a, b) => a + b;
let result = totalSingle(111, 15);

console.log(result);

var allCars = ["greencar", "redcar", ""];
console.log(allCars);

//old function
function myName(myName) {
  return 'This is my name' + myName ;
};
console.log("wissanu khonfjandee");



//new aroow function 1
const fullName = newFunction => {
  return `This is return form function ${newFunction} ......`;
};

console.log(fullName("tle wissanu"));

//new arrow function 2
const lastname = allName => `This is return form function ${allName} ......`;
console.log(lastname("Wissanu khongjandee"));