//จงเขียนโปรแกรมรับเลข 2 จำนวนจากผู้ใช้ แล้วนำมาบวกกัน ถ้าผลบวกนั้นมากกว่า 50 แสดง คำว่า " More 50 " อีกหนึ่งบรรทัด แสดงผลโดยใช้รูปแบบตามตัวอย่าง

var number1 = ~~prompt();
var number2 = ~~prompt();

var storeNumber1 = number1;
var storeNumber2 = number2;

var total = storeNumber1 + storeNumber2


if (total > 50) {
    console.log("total มากกว่า 50 ค่าของ total คือ " + total );
} else {
    console.log("total น้อยกว่า 50 ค่าของ total คือ " + total);
}


// ทดสอบด้วยการป้อน ตัวเลข 40 , 20 และ 40 ตามลำดับ
var a = ~~prompt();
var b = ~~prompt();
var c = ~~prompt();

var hundred = a + b + c;

if (hundred === 100) {
    console.log("100 OK");
} else {
    console.log("it is not equal 100 is not OK");
}
