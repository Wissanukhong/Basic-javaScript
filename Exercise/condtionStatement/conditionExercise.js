// Exercise condition statement

//1.จงเขียนโปรแกรมรับเลขจำนวนเต็ม 1 ตัวจากผู้ใช้ จากนั้นทำการตรวจสอบว่าตัวเลขที่รับมานั้น มากกว่า 10 หรือไม่ ถ้าใช่ แสดงคำว่า " More 10 " ออกทางจอภาพ
var getNumber = prompt("get the value between 1 and 10 ");

// if else
if (getNumber >= 10) {
  console.log(`ค่าของ getNumber คือ ${getNumber} มีค่ามากกว่า 10 `);
} else {
  console.log(`ค่าของ getNumber คือ ${getNumber} มีค่าน้อยกว่า 10 `);
}

// ternaly
getNumber >= 10
  ? console.log(`ค่าของ getNumber คือ ${getNumber} มีค่ามากกว่า 10 `)
  : console.log(`ค่าของ getNumber คือ ${getNumber} มีค่าน้อยกว่า 10 `);

// switch case
switch (getNumber >= 10) {
  case true:
    console.log(`ค่าของ getNumber คือ ${getNumber} มีค่ามากกว่า 10 `);
    break;
  case false:
    console.log(`ค่าของ getNumber คือ ${getNumber} มีค่าน้อยกว่า 10 `);
    break;
  default:
    console.log(`Something is wrong`);
}

// 2.จงเขียนโปรแกรมรับเลขจำนวนเต็ม 1 ตัวจากผู้ใช้ จากนั้นทำการตรวจสอบว่าตัวเลขที่รับมานั้น น้อยกว่า 10 หรือไม่ ถ้าใช่ แสดงคำว่า " Less 10 " ออกทางจอภาพ
var getNumber1 = ~~prompt("Push the value between 1 to 10");

// if else statement
if (getNumber1 < 10) {
  console.log(`the value of getNumber1 is ${getNumber1} it is less than 10`);
} else {
  console.log(`the value of getNumber1 is ${getNumber1} it is more than 10`);
}

//switch case statement
switch (getNumber1 < 10) {
  case true:
    console.log(`The value of getnumber1 is ${getNumber1} it is less than 10`);
    break;
  case false:
    console.log(`the value of getNumber1 is ${getNumber1} it is more than 10`);
    break;
  default:
    console.log(`something is wrong`);
}

//Ternaly style
getNumber1 < 10
  ? console.log(`The value of getnumber1 is ${getNumber1} it is less than 10`)
  : console.log(`the value of getNumber1 is ${getNumber1} it is more than 10`);

// 3.จงเขียนโปรแกรมรับเลขจำนวนเต็ม 1 ตัวจากผู้ใช้ จากนั้นทำการตรวจสอบว่าตัวเลขที่รับมานั้น เท่ากับ 10 หรือไม่ ถ้าใช่ แสดงคำว่า " Equal 10 " ออกทางจอภาพ
var getNumber2 = ~~prompt("Push the value");

// if else
if (getNumber2 === 10) {
  console.log(`The value 0f getNumber2 is ${getNumber2} it is equals 10`);
} else {
  console.log(`The value of getNumber2 is ${getNumber2} it is equals 10`);
}

// switch case
switch (getNumber2 === 10) {
  case true:
    console.log(`The value 0f getNumber2 is ${getNumber2} it is equals 10`);
    break;
  case false:
    console.log(`The value of getNumber2 is ${getNumber2} it is equals 10`);
    break;
  default:
    console.log(`something is wrong`);
}

// Ternary style
getNumber2 === 10
  ? console.log(`The value 0f getNumber2 is ${getNumber2} it is equals 10`)
  : console.log(`The value of getNumber2 is ${getNumber2} it is equals 10`);