// Declaring variables
var scores, roundScore, activePlayer;
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


document.querySelector('.btn-roll').addEventListener('click', function(){
  //1. Random Number
  var dice=Math.floor(Math.random()*6)+1;

  //2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';

  //3. Update the round score if the rolled number was not a 1
})
