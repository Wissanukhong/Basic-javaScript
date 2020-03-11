//การเขขียน Function แบบมีปีกกา
const myName = (name, ll) => {
  return `...... ${name + ll}`;
};
console.log(myName("wissanu", "kkdk"));

//แปลง myName เป็น function แบบเดิม
function myName1(name, ll) {
  return name + " " + ll;
}

console.log(myName1("Tle", "Wissanu"));

const myLastName = lastName => `this is arrow function ${lastName}`;
console.log(myLastName("wiwiwiwi"));
