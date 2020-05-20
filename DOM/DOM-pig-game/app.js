// เขียนแบบ Clean มากยิ่งขึ้น
var scores, roundScore, activePlayer, dice;

scores = [ 0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6 ) + 1;
console.log(dice);

//select the elelment
document.querySelector('#score-0').textContent = dice;