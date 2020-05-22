// เขียนแบบ Clean มากยิ่งขึ้น
var scores, roundScore, activePlayer, dice;

scores = [ 0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6 ) + 1;
console.log(dice);

// select the elelment
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

var x = document.querySelector('#score-0').textContent;
console.log(x)

// hide the picture for the first time
document.querySelector('.dice').style.display = 'none';

// addEventListener is when we click this bottom what we want it to do
doucment.querySelector('.btn-roll').addEventListener('click');