# javaScript Basic

javaScript เป็นภาษาโปรแกรมมิ่ง ภาษาหนึ่งที่ใช้สำหรับการทำ website แต่ในปัจจุบันภาษานี้กับได้รับความนิยมเป็นอย่างสูง  

### content
1. [ตัวอย่างการเรียกใช้งาน javaScript](#ตัวอย่างการเรียกใช้งาน-javaScript)
2. [document.write](#document.write)
3. [workshop](#workshop)

### ตัวอย่างการเรียกใช้งาน javaScript
1. สามารถเขียน script ลงไปที่ไฟล์ html ได้โดยตรง  
ตัวอย่าง Code
```js

    <body>
        <script>
            alert("Hello word");
        </script> 
    </body>

```

2. สามารถนำ link จากภายนอกมาวางได้โดยตรง  
ตัวอย่าง Code
```js
<script scr="path ที่เราต้องการ link มาใช้งาน"></script>

```
### document.write   
Document.write คือการให้ javaScript เขียนข้อความลงไปที่ html และเรายังสามารถแทรก Code html เข้าไปตรงๆ ได้อีกด้วย  
ตัวอย่าง Code  
```js
    document.write("<p>Hello this word write by function document.write of javaScript</p>");
```

### การประกาศตัวแปร var
เราสามารถประกาศตัวแปรต่างๆ ได้ตามตัวอย่าง และตามตัวอย่างที่เห็น คือเราสามารถนำเอาคำสั่ง `documet.write("total :" + ( x + y ));` เพื่อให้หน้าเว็บของเราแสดงผลรวมของ ตัวแปร x + y นั้นเอง
```js
    <script>
        var x = 5;
        var y = 10;
        document.write("total :" + (x + y)); //total : 15
    </script>
```
### Workshop  
สำหรับในหัวข้อ workshop จะเป็นการรวบรวม workshop เพือใช้ในการฝึกฝนนั้นเอง โดยจะเน้นที่ความเข้าใจ ผ่านการลงมือทำ
1. Array
2. Object
3. Loop
4. file system
5. condition
6. Operater
7. function