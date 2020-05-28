# Basic javaScript

javaScript เป็นภาษาโปรแกรมคอมพิวเตอร์ที่ใช้สำหรับเขียนโปรแกรมสำหรับ Website ในปัจจุบันได้รับความนิยมเป็นอย่างมากสำหรับพัฒนาโปรแกรมที่หลากหลายมากขึ้นไม่ว่าจะเป็น Web Application ต่างๆ ซึ่งเราจะสามารถพัฒนาโปรแกรมได้หลากหลายมากยิ่งขึ้นโดยที่เราเรียนรู้เพียงแค่ภาษา JavaScript เพียงแค่ภาษาเดียวนั้นเท่านั้นเอง ไม่ว่าจะเป็น Front-end หรือว่า Back-end เราก็สามารถที่จะใช้ภาษา JavaScipt ในการพัฒนาได้ด้วย

> # javaScipt 
> javaScrip เป็นภาษาโปรแกรมมิงแบบ Dynamic type กล่าวคือ สามารถเปลี่ยนแปลง data type ได้ตลอดเวลานั้นเอง 


#### Front-end

- html
- css
- javaScript
- React, Vue, Angular

#### Back-end

- Nodejs
- Express

## contents

- [Statement](#Statement)
- [Variables and Data type](#Variables)
- [Operators](#Operators)
- [if-else statement](#if-else-statement)
- [Code Challenge Operator](#Code-Challenge-Operator)
- [Function](#Function)
- [Array](#Array)
- [Object](#Object)
- [Loop](#Loop)
- [condition and break](#condition-and-break)
- [Hoisting](#Hoisting)
- [Method Borrowing](#Method-borrowing)
- [DOM](#DOM)

## Link สำหรับอ่านเพิ่มเติม

- [สำหรับอ่านเพิ่มเติมเพื่อฝึกความรู้ต่าง แต่ Slide เป็น Python](https://web.facebook.com/tautologyai/posts/2750455501743000?_rdc=1&_rdr)
- [javaScript ของพี่ Virayut ](https://github.com/lvarayut/javascript-style-guide?fbclid=IwAR0MApZHzfXDUKxczVIHwM6lIAWRN6GFAoCkrlTguA9AVQ3ZD6E1a02nNeg)

### Statement

statement คือ คำสั่งว่าเราต้องการให้โปรแกรมของเราทำงานอะไรนั้นเอง และเราสามารถเขียนคำสั่ง ควบคุมการทำงานของโปรแกรม โดยมีทั้งหมด 3 ส่วนหลักๆ ดังนี้

1. Assignment Statement  
   Assignment Statement คือ การกำหนดค่าให้กับตัวแปร ตัวอย่างเช่น

```js
var a = 5;
var b = 6;
var yourName = "Wissanu";
```

2. Condition Statement  
   Condition Statement คือ การเขียนชุดคำสั่งเพื่อตรวจสอบว่า เงื่อนไขที่เรากำหนดหรือว่าว่าชุดข้อมูลที่เรากำหนดนั้นเป็นจริง หรือว่า เป็นเท็จ ถ้าเป็นจริง จะให้โปรแกรมของเราทำอะไร ถ้าเป็นเท็จจะให้โปรแกรมของเราทำอะไร นั้งเอง ตัวอย่างเช่น

```js
var a = 5;
var b = 6;

if (a < b) {
  console.log("ค่าของ a น้อยกว่า b");
} else {
  console.log("ค่าของ a มากกว่า b");
}
```

3. Interation Statement  
   Interation Statement คือการกำหนดว่าให้โปรแกรมทำซ้ำนั้นเอง ยกตัวอย่างเช่น While-loop, For loop, Do-while-loop

- while loop  
  เป็นการเขียนโปรแกรมเพื่อให้โปรแกรมทำซ้ำไปเรื่อยๆ เมื่องเงื่อนไขยังคงมีค่าเป็นจริงอยู่ และจะหยุดทำซ้ำเมื่อเงื่อนไขเป็นเท็จ

`Remark : while loop จะตรวจเช็คเงื่อนไขก่อนว่าตรงตามเงื่อนไขที่กำหนดไหม ถ้าเงื่อนเป็นจริงจึงจะทำการวนซ้ำ แต่ถ้าเงื่อนไขเป็นเท็จโปรแกรมก็จะไม่ทำงานเลยนั้นเอง`

- Do-while-loop  
  เป็นการเขียนโปรแกรมเพื่อให้โปรแกรมทำซ้ำไปเรื่อยๆ เมื่องเงื่อนไขยังคงมีค่าเป็นจริงอยู่ และจะหยุดทำซ้ำเมื่อเงื่อนไขเป็นเท็จ แต่จะมีข้อแตกต่างตรงที่ โปรแกรมจะทำการ Run ก่อนที่จะตรวจสอบเงื่อนไข อย่างน้อย 1 ครั้งนั้นเอง

`Reamark : Do while loop จะ Run ก่อนอย่างน้อย 1 ครั้งเสมอ`

- for loop  
  ลักษณะการทำงานเหมือนกันกับที่ผ่านมา เพียงแต่ว่าเราสามารถที่จะกำหนดรอบการทำซ้ำได้ ยกตัวอย่างเช่น เรากำหนดให้วนซ้ำได้ 10 ครั้ง
---

### Variables

คือการสร้างตัวแปรขึ้นมาตามชนิดที่เราต้องการ โดยแบ่งชนิดตาม Data type ที่โปรแกรมกำหนดมาให้ จากนั้นเราสามารถทำการกำหนดค่าให้กับตัวแปรนั้นได้ ยกตัวอย่างเช่น เราต้องการให้ค่า var a = 5 ;

### หลักการตั้งชื่อตัวแปรสำหรับภาษษ javaScript

1. ตั้งชื่อแบบ carmel case
2. ถ้าเป็นคำเดียวใช้ตัวเล็กอย่างเดียวได้เลย
3. ไม่สามารถขึ้นต้นด้วยตัวเลขได้
4. สามารถใช้ \_ and หรือว่า \$ ขึ้นต้นได้

### Variables name

```js
var _book = "javaScript";

var $number = 1;
```

### Variables and Data type

```js
// string
var firstName = "Wissanu";
console.log(firstName);

// number
var age = 27;

// boolean [true, false]
var fullAge = false;

// Undefined
var car;

// Null
var teacher = null;
```

```Remark
ถ้าหากเราต้องการทราบว่า ตัวแปรนั้นมีชนิดเป็นอะไร เราสามารถใช้คำสั่ง Typeof เพื่อทำการตรวจเช็คค่าได้ โดยมี syntax ดังต่อไปนี้
* typeof variableName
* typeof(variableName)
```

### Data Types

1. Number
2. String
3. Boolean
4. Undefined
5. Null

### Operators

Operators คือตัวดำเนินการโดยสามารถแบ่งออกเป็นหัวข้อใหญ่ดังต่อไปนี้คือ

1. ตัวดำเนินการทางคณิตศาสตร์

```
- คือลบค่าออก
+ คือการบวกค่าเพิ่ม
* คือการคูณ
/ คือการหาร
```
2. ตัวดำเนินการทางตรรกศาสตร์  
   ตัวอย่าง + - \* / >

```js
// Basic Operators
var year = 2020;
var yearJohn = year - 28;
var yearMark = year - 33;

// Mathoperators
console.log(yearJohn);
console.log(yearMark);
console.log(yearJohn + 2);
console.log(yearMark + 5);
console.log(year / 10);

// Logical operators
var markAndJohn = yearJohn > yearMark;
console.log(markAndJohn);

// typeof operators
console.log(typeof year);
console.log(typeof markAndJohn);
console.log(typeof yearJohn);
```

### Operator Precedence

ลำดับความสำคัญทางคณิตศาสตร์ ลำดับการ + - \* / ว่าจะทำอันไหนก่อน อันไหนหลัง นั้งเอง

### if else statement

if else statement คือกการตรวจเช็คค่าว่าเป็นไปตามเงื่อนไขที่เรากำหนดหรือไม่ ถ้าเป็นไปตามที่เรากำหนกด จะให้โปรแกรมของเราทำอะไร ถ้าไม่เป็นไปตามที่เรากำหนดจะให้โปรแกรมของเราทำงานอย่างไร โดยส่วนมากจะเป็นแบบ Boolean(Ture, False) ตัวอย่างโค้ด

Example 1
ให้ผู้ใช้งานกรอกตัวเลขเข้ามาจำนวน 2 ครั้ง หลังจากนั้น เก็บค่าไว้ในตัวแปร หลังจากที่กรอกครบแล้วให้ นำค่าทั้ง 2 มาบวกกัน ถ้า ผลรวมมากว่า ให้แสดงคำว่า ผลรวมมีค่ามากกว่า 50 แต่ถ้าไม่จริง ให้แสดงคำว่า ผลรวมมีค่าน้อยกว่า 50

```js
// if else statement Problem
var a = ~~prompt("ค่าตัวที่ 1");

var b = ~~prompt("ค่าตัวที่ 2");

var total = a + b;

if (total > 50) {
  console.log("ค่าของ Total คือ " + total + " มีค่ามากกว่า 50");
} else {
  console.log(`ค่าของ Total คือ ${total} มีค่าน้อยกว่า 50`);
}

// Note ถ้าเราไม่ใช้ ~~ ด้านหน้าเวลาที่เรารับค่าเข้ามาจะถูกมองว่าเป็น String ดังนั้นเราควรเพิ่ม ~~ เข้าไปเพื่อเป็นการกำหนดค่าให้เป็นตัวเลข
```

Example 2

```js
// if - else statement
var firstName = "John";
var civilStatus = "single";

// First style Boolean
if (civilStatus === "married") {
  console.log(firstName + " is married ");
} else {
  console.log(firstName + " is not married ");
}

// Secondstyle Boolean
var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married ");
} else {
  console.log(firstName + " is not married ");
}
```

Example 3

```js
var massJohn = 100; //kg
var heightJohn = 1.7; //meters

var massPob = 155; //kg
var heightPob = 1.85; //meters

var BMIsJohn = massJohn / (heightJohn * heightJohn);
var BMIsPob = massPob / (heightPob * heightPob);
console.log(BMIsJohn, BMIsPob);

if (BMIsJohn > BMIsPob) {
  console.log("BMIsJonh's John more than BMIsPobs Pob");
} else {
  console.log("BIMsJohn's less than BMIsPobs Pob");
}
```

เดี๋ยวจะลองทำโจทย์ if else statement เยอะๆ [โจทย์สำหรับฝึก crdit:http://www.comscicafe.com/](http://www.comscicafe.com/article/93/workshop-selection-statements-part-2#.XqzR_agzbIV)

### Equaly Operators

- = one eual is defined value into the variables
- == Two equals is check the value between variable but it is not the same value javaScript will change the value from number to string
- === Three equals is the different from the two equal, that is all meannig such as data type and the value

### Code Challenge Operator

```js
//Code Challence operators
// First is averg the value in thos variables

// John team
var firstJohn = 116;
var secondJohn = 94;
var thirdJohn = 123;

var averageJohn = (firstJohn + secondJohn + thirdJohn) / 3;
console.log("the average of John is " + averageJohn);

// Mike team
var firstMike = 116;
var secondMike = 94;
var thirdMike = 123;

var averageMike = (firstMike + secondMike + thirdMike) / 3;
console.log("The average of Mike is  " + averageMike);

// if else statement
if (averageJohn > averageMike) {
  console.log("John is the Winner with this score " + averageJohn);
} else if (averageMike > averageJohn) {
  console.log("Mike is the Winner with this score " + averageMike);
} else {
  console.log("There is a draw");
}

// swtich case style
switch (true) {
  case averageJohn > averageMike:
    console.log("John is the Winner with this score " + averageJohn);
    break;
  case averageMike > averageJohn:
    console.log("Mike is the Winner with this score " + averageMike);
    break;
  default:
    console.log("there is a draw");
}

// ternary style
averageJohn > averageMike
  ? console.log("John is the Winner with this score " + averageJohn)
  : console.log("Mike is the Winner with this score " + averageMike);
```

### Function

เวลาที่เราจะต้องเขียนโปรแกรมสำหรับคำนวณหรือว่า ต้องการให้โปรแกรมต้องทำงานตามที่เราต้องการ ถ้าหากเราไม่เขียนแบบเป็น Function เราจะต้องเขียนคำส่ังนั้นซ้ำๆ เป็นจำนวนมาก แต่ว่า ถ้าหากเราเขียนโปรแกรมด้วย Function เราจะสามารถเรียกใช้ชุดคำสั่งนั้นได้โดยที่เราไม่ต้องไปเขียนคำสั่งซ้ำๆ กันจำนวนมากนั้นเอง ยกตัวอย่าง Function คำนวณอายุ ถ้าหากเราไม่เขียนเป็น function เราจะต้องเขียนคำสั่งดังนี้

- Function declaration

```js
  function calculate (x, y) {
    return x + y ;
  }

  consol.log(calculate(15, 5)): //20

```

- Function expression

```js
var calculate = function (x, y) {
  return x + y;
};

console.log(calculate(15, 5));
```

```js
var yearnow = 2020;
var yearJohn = 1993;
var yearMark = 1920;

var yearOldJohn = yearNow - yearJohn;
var yearOleMark = yearNow - yearMark;
console.log(yearOldJohn, yearOldMark);
```

ซึ่งเราจะเห็นว่าเราจะต้องเขียน Code คล้่ายๆ กันจำนวนหลายบันทัด แต่ถ้าหากเราใช้ Function เราจะสามารถเขียนโปรแกรมได้สั้นลง ตัวอย่างเช่น

```js
function yearOld(name, yearBirth) {
  var yearNow = 2020 - yearBirth;
  console.log(name + yearNow);
}

yearOld("john", 1993);
yearOld("Mark", 1995);
```

ซึ่งเราจะเห็นว่าเราไม่จำเป็นที่จะต้องเขียนคำสั่งซ้ำๆ เพียงแค่เราเรียนใช้ Function เท่านั้นก็สามารถเรียกใช้ คำส่ังที่เราต้องการได้เลย

### Array

Array คือสิ่งที่เราสามารถที่จะเอาอะไรก็ได้เก็บไว้ในตัวแปร เพียงตัวแปรเดียว อย่างที่เราเห็นในบทเรียนที่ผ่านมา เราจะต้องสร้างตัวแปรสำหรับคนทีละคน แต่พอเราสร้างตัวแปรแบบ Array เราสามารถที่เอาชื่อของที่คนเข้ามาอยู่ในที่เดียวกันได้ ยกตัวอย่าง Array ดังต่อไปนี้

Example

```js
//First style
var cars = ["Toyoya", "Honda", "Suzuki"];

//seconde style
var cars = (new Array() = ("Toyoya", "Honda", "Suzuki"));

//การเพิ่มค่าเข้าไปใน Array
cars.push("Something"); //เป็นเพิ่มค่าไปต่อที่ค่าหลังสุด

//การเพิ่มค่าที่ค่าแรกใน Array
cars.unshift("something");

//การลบค่าสุดท้ายใน Array ออก
cars.pop();

//การลบค่าแรกใน Array ออก
cars.shift();

// วิธีตรวจเช็คว่ามีค่านั้นอยู่ใน Array หรือไม่ โดยการใช้คำสั่ง arrayName.indexOf("something")
var John = ["John", "Smith", 1993, "Teacher"];
console.log(John);

// ternary condition
var checkJob =
  John.indexOf("Designer") === -1
    ? "John is not Designer"
    : "John is a Designer";
console.log(checkJob);

//if else condition
if (John.indexOf("Designer") === -1) {
  console.log("John is not Designer");
} else {
  console.log("John is a Designer");
}
```

### Object

เราสามารถที่จะนำเอาค่าเข้าไปเก็บใน Object ได้หลากหลายค่า โดยภายในจะประกอบไปด้วย key: vulue  
Example

```js
var myObject = {
  //key: value
  firstName: "John",
  lastName: "Smith",
  job: "Teacher",
  age: 25,
  yearBirth: 1993,
  famaly: ["Jane", "Dan", "Jonathan"],
  married: false,
};
```

จากตัวอย่างเราจะเห็นว่า เราสามารถเก็บค่าอะไรก็ได้เข้าไปไว้ใน Object นอกจากนี้เรายังสามารถที่จะ ใช้เขียน function ภายใน Object ได้อีกด้วย  
Example

```js
var Tle = {
  fullname: "Wissanu Khongjandee",
  mass: 80,
  height: 1.73,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
```

### Loop

Loop ก็คือการวนซ้ำอันเอง ถ้าหากเราไม่ใช้ Loop เราจะต้องเขียนทุกอย่างด้วยตัวเราเอง ยกตัวอย่าง array john หากเราต้องการเอาข้อมูลมาแสดงทีละตัว เราจะต้องใช้ console.log(john[ที่ตัว ไปเรื่อยๆ]); ตามตัวอย่าง แต่ว่า ถ้าหากเราใช้ Loop เราไม่จำเป็นต้องเขียนเองทั้งหมด

### Example 1

```js
var john = ["John", "smith", 1990, "Designer", false];

// When we don not use loop
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);

// when we use loop
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

//for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//while loop
var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
```

### continue and break

- Continue อะไรที่ไม่เข้าเงื่อนไขจะถูกตัดออก และทำอันที่เข้าเงื่อนไขต่อไป
- Break เวลาเจออะไรก็ตามที่ไมเข้าเงื่อนไขแล้วจะหยุดทันที และไม่ทำต่อ
- Looping backwards จะเป็นวนซ้ำจากค่าสุดท้าย มาที่ ค่าแรก

```js
//continue and break statements

var books = new Array("Steve Jobs", "Bill Gates", 1984, "Mark Zuckablek");
// Continue อะไรที่ไม่เข้าเงื่อนไขจะถูกตัดออก และทำอันที่เข้าเงื่อนไขต่อไป
for (var i = 0; i < books.length; i++) {
  if (typeof books[i] !== "string") continue;
  console.log(books[i]);
}

// Break เวลาเจออะไรก็ตามที่ไมเข้าเงื่อนไขแล้วจะหยุดทันที และไม่ทำต่อ
for (var i = 0; i < books.length; i++) {
  if (typeof books[i] !== "string") break;
  console.log(books[i]);
}

//Looping backwards  จะเป็นวนซ้ำจากค่าสุดท้าย มาที่ ค่าแรก
for (var i = books.length - 1; i >= 0; i--) {
  console.log(books[i]);
}

// for loop
var a = [123, 12, 1];

for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}
```

### Quiz

```js
// while loop practise
var b = [123, 12, 1];
var i = 0;
while (i < b.length) {
  var c = b[i] * 2;
  console.log(c);
  i++;
}

// while loop practise
var allBooks = ["Jonash", "Auro x", "Long learn"];
var i = 0;

while (i < allBooks.length) {
  var book = allBooks[i];
  console.log(book);
  i++;
}
```

### Hoisting

Hoisting คือการส่งค่าจาก variables หรือว่า Function จากด้านล่าง ที่มีการเขียน function ขึ้นมาด้านบน แต่ว่าจะไม่มีผลกับ function Expression

#### Example

```js
// functionc declaration
function calculateAge(year) {
  console.log(2020 - year);
}

calculateAge(1993);
```

ถ้าหากเราเรียกใช้งาน มันจะสามารถเรียกใช้งานได้ตามปกติ แต่ถ้าหากเราเปลี่ยนการ เรียกแบบ Hoisting จะเป็นประมาณนี้

```js
calculateAge(1993);

function calculateAge(year) {
  console.log(2020 - year);
}
```

จากตัวอย่างที่เห็นก็สามารถใช้งานได้ปกติ แม้ว่าเราจะเรียกใช้งานจากด้านบน function แต่ว่าถ้าหากเป็น Expression จะไม่สามารถใช้แบบ Hoisting ได้

```js
// Expression function
var retirement = function (year) {
  console.log(60 - (2020 - year));
};

retirement(1993); //33
```

แต่ว่าถ้าหากเรา เรียกใช้งาน function ก่อน create function สำหรับ function Expression จะเกิด Error Uncaught TypeError: retirement is not a function ขึ้นมาทันที

```js
retirement(1993); //Uncaught TypeError: retirement is not a function

var retirement = function (year) {
  console.log(60 - (2020 - year));
};
```

แต่ว่าถ้าหากเป็น variables ค่าของ Hoisting จะกลายเป็น Undefined ทันที

```js
// variables
console.log(age); // undefined
var age = 27;
console.log(age);
```

```js
// declaration function
function foo() {
  var age = 65;
  console.log(age); // 65
}

foo();
console.log(age); // 27
```

### Methord borrowing

methoed borrowing คือการเรียกใช้ function จาก Array, Object อื่นมาใช้งานหรือเรียกว่าการยืมนั้นเอง ยกตัวอย่างเช่นถ้าหากเรามีฟังก์ชั่นการคำนวณอายุ เราจะสามารถ เขียนได้ 3 วิธีดังนี้

1. สร้างฟังก์ชั่นแบบ Global แล้วเรียนใช้งานทั้งโปรแกรม
2. สร้างฟังก์ชั่นแบบ Methord borrowing (การเรียกใช้ฟังก์ชั่นจากที่อื่น)
3. เขียนฟังก์ชั่นซ้ำๆ กันไปเรื่อย ซึ่งแน่นอนว่า ไม่ใช้วิธีที่ควรทำ

Example methoed borrowing

- จงสร้างฟังก์ชั่นการคำนวณอายุของผู้คน ด้วยฟังก์ชั่น Methord borrowing

```js
var john = {
  name: "John",
  yearOfBirth: 1993,
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1990,
};

// assigned the value from mike like john function
// call the function
mike.calculateAge = john.calculateAge;
mike.calculateAge();
```

```หรือว่าสรุปแบบง่ายๆ คือ การเรียกใช้ function จาก function อื่นนั้นเอง ข้อดีคือ
- เราไม่ต้องเขียน Function ทีมี Logic เหมือนกันซ้ำๆ
- ทำให้ Code ของเราอ่านง่ายมากยิ่งขึ้น
```

### DOM

DOM (Document Object Model)

- Document คือหน้าเว็บเพจ หรือว่า หน้าเว็บไซต์ทั้งหมดนั้นเอง
- Object คือส่วนต่างที่อยู่ภายในโครงสร้างซึ่งเราจะมองเป็น Object
  - ```<body></body>```
  - ```<header></header>```
- Model คือ สิ่งที่เราต้องการใช้จัดการหรือว่าลำดับในการจัดการในเอง

**สรุปก็คือ** Dom เป็นการจัดการ Object ใด Object หนึ่งที่เราต้องการ ภายใน Document นั้นเองโดยใช้ Model ในการจัดการกับ Node ของ Object ผ่านสิ่งที่เรียกว่า Event(เหตการณ์) นั้นเอง ซึ่งเราต้องการให้ Event นั้นเกิดอะไรขึ้น ยกต้วอย่างเช่น ถ้าหากเรากด button นี้ แล้วเราต้องการให้มันแสดงผลอย่างไร หรือว่าเกิดปฏิกริยาโต้ตอบแบบใด นั้นเอง

### Game

- Math.random() //เป็นการ random ค่าของตัวเลขออกมา 0.0 - 0.9
- Math.floor(Math.random) //เป็นการทำให้ค่าที่เรา Random มีค่าเป็นจำนวนเต็ม
- Math.floor(Math.random() \* 6 ) //จะแสดงค่าออกมาเป็น 0 - 5
- Math.floor(Math.random() \* 6 ) + 1 //เราไม่ต้องการระหว่าง 0 - 5 ดังนั้นเราจะต้องเอาผลลัพธ์มาบวก 1 เพื่อที่จะได้ค่าระหว่าง 1 - 6 นั้นเอง

//select the elelment

- document.querySelector('#score-0').textContent = dice;
