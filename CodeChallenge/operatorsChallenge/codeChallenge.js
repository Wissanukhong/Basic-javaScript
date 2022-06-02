//Code Challenge operators
// First is average the value in these variables

// John team
var firstJohn = 116;
var secondJohn = 94;
var thirdJohn = 123;

var averageJohn = (firstJohn + secondJohn + thirdJohn) / 3;
console.log('the average of John is ' + averageJohn);

// Mike team
var firstMike = 116;
var secondMike = 94;
var thirdMike = 123;

var averageMike = (firstMike + secondMike + thirdMike) / 3;
console.log('The average of Mike is  ' + averageMike);

// if else statement
if (averageJohn > averageMike) {
    console.log('John is the Winner with this score ' + averageJohn);
} else if (averageMike > averageJohn) {
    console.log('Mike is the Winner with this score ' + averageMike);
} else {
    console.log('There is a draw');
}

// switch case style
switch (true) {
    case averageJohn > averageMike:
        console.log('John is the Winner with this score ' + averageJohn);
        break;
    case averageMike > averageJohn:
        console.log('Mike is the Winner with this score ' + averageMike);
        break;
    default:
        console.log('there is a draw');
}

// ternary style
averageJohn > averageMike
    ? console.log('John is the Winner with this score ' + averageJohn)
    : console.log('Mike is the Winner with this score ' + averageMike);
