// Declaring variables
var scores, roundScore, activePlayer, dice;
scores=[0,0];
roundScore=0;
activePlayer=0;

dice=Math.floor(Math.random()*6)+1;


 document.querySelector('#current-'+activePlayer).textContent = dice
// document.querySelector('#current-'+activePlayer).innerHTML="<em>"+dice+"</em>";



//  We can also read the elements from a webpage using querySelector method and store it in a variable:

var x = document.querySelector('#score-0').textContent;
console.log(x)


//We can also use the querySelector to change the css of element of the webpage

document.querySelector('.dice').style.display ='none';
