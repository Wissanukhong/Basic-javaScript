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
const totalSingle = (a, b) => a + b ;
let result = totalSingle (111, 15);

console.log(result);
 