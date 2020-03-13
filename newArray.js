/**
 * เป็นการสร้าง Array ใหม่ โดยการดึงค่าจาก Array เก่า
 * จากตัวอย่างจะเห็นว่า store array จะมีค่านี้อยู่ใน Array [100, 2.5, "A", "B", "C5",];
 * ส่วน newStore Array คือค่าที่ดึง Value มาจาก Store array นั้นเอง
 */

//การเขียน Array แบบที่ 2
const store = new Array(100, 2.5, "A", "B", "C5");
const newStore = store.values();
console.log(newStore.next().value);
console.log(newStore.next().value);
console.log(newStore.next().value);
console.log(newStore.next().value);
console.log(newStore.next().value);

//การเขียน Array แบบที่ 1
let cars = ["Mazda", "Toyota", "suzuki", "Honda"];
let newCars = cars.values();

console.log(newCars.next().value);
console.log(newCars.next().value);
console.log(newCars.next().value);
console.log(newCars.next().value);


//การเขียนแบบที่ 3
let fruits = new Array();
fruits[0] = "Orang";
fruits[1] = "Apple";
fruits[2] = "Banana";
let newFruits = fruits.values();

console.log(newFruits.next().value);


