// การสร้าง Object จาก Array
// 1.สร้าง Array ขึ้นมา
// 2.ทำการแปลงค่า Array เป็น Object

let newcars = ['Toyota', 'Honda', 'Yamaha'];
let newCars = newcars.entries();

console.log(newCars.next().value);
console.log(newCars.next().value);
console.log(newCars.next().value);