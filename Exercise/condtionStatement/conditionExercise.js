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

// 3.ถ้าหากผู้ใช้เข้าร้านอายุน้อยกว่า 12 ปี จ่ายเงิน 100 บาท แต่ไม่ถ้าอายุมากกว่า 12 - 50  ปี จะต้องจ่ายเงิน 200 บาท แต่ถ้าเกิน 51 ปีขึ้นไป ไม่ต้องจ่ายเงิน
var age = 35;

// if else statement
if (age > 0  && age < 12 ) {
  console.log(`Your age is ${age} years old your must pay at 100 Bath`);
} else if (age >= 12 && age < 50) {
  console.log(`Your age is ${age} years old your must pay at 200 Bath`);
} else {
  console.log(`Your age is ${age} years old Your don not pay the bill`)
}

// swtich case is a strong more than a if else 
switch (true) {
  case age > 0 && age < 12 : 
    console.log(`Your age is ${age} years old your must pay at 100 Bath`);
    break;
  case age >= 12 && age < 50 :
    console.log(`Your age is ${age} years old your must pay at 200 Bath`);
    break;
  default :
    console.log(`something is wrong`);
}