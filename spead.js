//การเขียน Array แบบที่ 1
let alpha = ["a", "b", "c"];
console.log(alpha);

//การเขียน Array แบบที่ 2
let number = new Array(1, 2, 3);
console.log(number);

/**
 * การนำ 2 Array มาเชื่อมต่อกัน หรือที่เรียกว่า concat นั้นเอง
 * สร้าง ตัวแปรขึ้นมา 1 ตัวแปร
 * จากนั้นนำ ตัวแปรที่ต้องการ concat มาใช้ function concat โดยที่ค่า argument ใน function เป็นตัวแปรที่ต้องการเชื่อม
 */
let alphaNumber = alpha.concat(number);
console.log(alphaNumber);

let numberAlpha = number.concat(alpha);
console.log(numberAlpha);

//workshop concat
const toyotaCar = ["Yaris", "Camry", "Revo"];

const isuzuCar = ["Dmax", "Dragon"];

const allCars = toyotaCar.concat(isuzuCar);
console.log(allCars);


