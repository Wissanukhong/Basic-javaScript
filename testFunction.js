function test () {
    const name = "wissanu";
    return name;
}

console.log(test());


//แปลงเป็น Arrow Function
const myname = showname => showname;
const name = myname("wissanu");
console.log(name);