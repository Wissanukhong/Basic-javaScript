function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
const f = function (x) {
    return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}

console.log(factorial(15))

function foo(i) {
    if (i < 0)
        return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}
foo(3);

