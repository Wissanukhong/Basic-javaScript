var massMark = 78; //kg
var heightMark = 1.69; // mrters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\s BIM higher than Johnk\s? ' + markHigherBMI)