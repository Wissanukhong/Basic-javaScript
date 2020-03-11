//การเเขียน Function แบบเก่า
function myName(name) {
    return "This is your name" + " " + name;
}

console.log(myName("Wissanu"));

//การเขียน Arrow Function 
var myName1 = name1 => `This is name one ${name1}`
console.log(myName1("Wissanu is name one"))

//การเขียน Arrow Function แบบมีปลีกกา
let myName2 = name2 => {
    return name2 = `This is name two ${name2}`   
}
console.log(myName2("wissanu"));

//แปลง Arrow function เป็น function แบบเดิม
function myName3(name3) {
    return `This is name three ${name3}`
}
console.log(myName3("Wissanu3"))



