
//คือการรับค่าเข้ามา
// var pressNumber = prompt("Press a number");

// if-else คือเงื่อนไขเป็นไปตามที่เรากำหนดหรือไม่ ถ้าไม่ ให้ทำอะไร
if (pressNumber >= 10) {
    document.write("<p>ค่านี้มากกว่า 10</p>");
} else {
    document.write("<p>ค่านี้ไม่เกิน 10</p>");
}

let input = prompt("Press word");

for (i = 1 ; i <= 10; i++) {
    document.write("Number"+ " "+ i + "<br>")
};

let looper = i => {
    for( i = 1; i <= 5; i ++ ) {
        console.log(`number ${i} ${i++}`)
    }
    return i
}

console.log(looper(2))

