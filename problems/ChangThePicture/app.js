document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1.Random number
    // 1.1 Math.floor คือ ให้ค่าภายใน function เป็นจำนวนเต็ม 
    var dice = Math.floor(Math.random() * 6 ) + 1;

    // 2.Display the result
    // 2.1 create the array for query the class html
    // 2.2 การจัดการกับ css ให้รูปภาพแสดงเป็น block
    // 2.3 Random การสุ่มรูปภาพ โดยนำค่าที่ได้มาสุ่มคู่กับ function random
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3.Update the round score If the rolled number was NOT a 1
}); 