// Exercise condition statement
// http://www.comscicafe.com/article/91/workshop-selection-statements-part-1#.XuBJEUUzZPY
// http://onestone.eng.src.ku.ac.th:9000/exercisesc-4
// https://sites.google.com/site/pormilkwann/kha-sang-if---else
// http://wbi.ohonline.in.th/cp/unit5_a1.
// http://www.krubpk.com/pan8/if_else.html

//จงเขียนโปรแกรมรับเลขจำนวนเต็ม 1 ตัวจากผู้ใช้ จากนั้นทำการตรวจสอบว่าตัวเลขที่รับมานั้น มากกว่า 10 หรือไม่ ถ้าใช่ แสดงคำว่า " More 10 " ออกทางจอภาพ
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
