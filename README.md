# Basic javaScript

javaScript เป็นภาษาโปรแกรมคอมพิวเตอร์ที่ใช้สำหรับเขียนโปรแกรมสำหรับ Website ในปัจจุบันได้รับความนิยมเป็ฯอย่างมากสำหรับพัฒนาโปรแกรมที่หลากหลายมากขึ้นไม่ว่าจะเป็น Web Application, Application ต่างๆ ซึ่งส่วนมากเราจะเราจะสามารถพัฒนาโปรแกรมได้หลากหลายมากยิ่งขึ้นโดยที่เราเรียนรู้เพียงแค่ภาษา JavaScript เพียงแค่ภาษาเดียวนั้นเอง ไม่ว่าจะเป็น Front-end หรือว่า Back-end เราก็สามารถที่จะใช้ภาษา JavaScipt ในการพัฒนาได้ด้วย

## contents

- [Statement](#Statement)
- [Variables and Data type](#Variables)
- [Operators](Operators)
- [if-else statement](#if_else_statement)

### Statement

statement คือ คำสั่งว่าเราต้องการให้โปรแกรมของเราทำอะไรนั้นเอง และเราสามารถเขียนคำสั่ง ควบคุมการทำงานของโปรแกรม โดยมีทั้งหมด 3 ส่วนหลักๆ ดังนี้

1. Assignment Statement
   Assignment Statement คือ การกำหนดค่าให้กับตัวแปร ตัวอย่างเช่น

```js
var a = 5;
var b = 6;
var yourNmae = "Wissanu";
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
  เป็นการเขียนโปรแกรมเพื่อให้โปรแกรมทำซ้ำไปเรื่อยๆ เมื่องเื่อนไขยังคงมีค่าเป็นจริงอยู่ และจะหยุดทำซ้ำเมื่อเงื่อนไขเป็นเท็จ

`Remark : while loop จะตรวจเช็คเงื่อนไขก่อนว่าตรงตามเงื่อนไขที่กำหนดไหม ถ้าเงื่อนเป็นจริงจึงจะทำการวนซ้ำ แต่ถ้าเงื่อนไขเป็นเท็จโปรแกรมก็จะไม่ทำงานเลยนั้นเอง`

- Do-while-loop  
  เป็นการเขียนโปรแกรมเพื่อให้โปรแกรมทำซ้ำไปเรื่อยๆ เมื่องเื่อนไขยังคงมีค่าเป็นจริงอยู่ และจะหยุดทำซ้ำเมื่อเงื่อนไขเป็นเท็จ แต่จะมีข้อแตกต่างตรงที่ โปรแกรมจะทำการ Run ก่อนที่จะตรวจสอบเงื่อนไข อย่างน้อย 1 ครั้งนั้นเอง

`Reamark : Do while loop จะ Run ก่อนอย่างน้อย 1 ครั้งเสมอ`

- for loop  
  ลักษณะการทำงานเหมือนกันกับที่ผ่านมา เพียงแต่ว่าเราสามารถที่จะกำหนดรอบการทำซ้ำได้ ยกตัวอย่างเช่น เรากำหนดให้วนซ้ำได้ 10 ครั้ง

### Variables

คือการสร้างตัวแปรขึ้นมาตามชนิดที่เราต้องการ โดยแบ่งชนิดตาม Data type ที่โปรแกรมกำหนดมาให้ จากนั้นเรากฌทำการกำหนดค่าให้กับตัวแปรนั้น

### หลักการตั้งชื่อตัวแปร

1. ตั้งชื่อแบบ carmel case
2. ถ้าเป็นคำเดียวใช้ตัวเล็กอย่างเดียวได้เลย
3. ไม่สามารถขึ้นต้นด้วยตัวเลขได้
4. สามารถใช้ \_ and \$ ขึ้นต้นได้

### Variables name

```js
var _book = "javaScript";

var $number = 1;
```

### Variables and Data type

```js
// Variables and Datetype

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

### Typeof

Typeof คือการตรวจสอบว่าค่าที่เรา Assigment ลงไปมีชนิดเป็นอะไร

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

ลำดับความสำคัญทางคณิตศาสตร์ ลำดับการ + - \* / ว่าจะทำอันไหนก่อน อันไหนหลัง

### if else statement

if else statement คือกการตรวจเช็คค่าว่าเป็นไปตามเงทาอนไขที่เรากำหนดหรือไม่ โดยส่วนมากจะเป็นแบบ Boolean ตัวอย่างโค้ด

Example 1

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
เดี๋ยวจะลองทำโจทย์ if else statement เยอะๆ 
