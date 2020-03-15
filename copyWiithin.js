//CopyWithin คือการ copy ค่าของ Index แล้วไป copy ค่าไปทับ
//ตามตัวอย่างจะเห็นว่า Index 0, 1, 2, 3 
let fruits = new Array ("Banana", "Orange", "Apple", "Mango");
console.log(fruits);

//Target คือค่าตัวแรกที่ต้องการ copy
//Start คือค่าที่ต้องการ push เข้าไปแทน
fruits.copyWithin(2, 1);

console.log(fruits);
