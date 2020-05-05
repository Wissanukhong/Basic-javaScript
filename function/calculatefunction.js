// Function 
function yearOld (yearBirth) {
    return 2020 - yearBirth;
}

var yearJohn = yearOld(1993);
console.log(`John is ${yearJohn} years `)

function yearRetirement (year, name) {
    var age = yearOld(year);
    var retirement = 60 - age;
    if(retirement > 0 ){
        console.log(name + " is " + age + " years old  is working now!");
    } else if (retirement < 0){
        console.log(name + " is " + age + " years old  is alredry retire now!")
    }
}

yearRetirement(1993, "Tle");
yearRetirement(1950, "Nan");
yearRetirement(1913, "Bee");

function yearOld1 (name1, yearBirth1) {
    var yearNow1 = 2020 - yearBirth1
    console.log(name1 + yearNow1)
}

yearOld1("john", 1993)

function yearOld (yearBirth) {
    return 2020 - yearBirth;
}

var yearJohn = yearOld(1993);
console.log(`John is ${yearJohn} years `)





// function calculator your age
function yearNow (birth) {
    return 2020 - birth 
}

console.log(yearNow(1990))
