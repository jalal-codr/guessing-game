const prompt  = require('prompt-sync');
const ask = prompt();
function randomNumber (min,range){
 return(Math.floor(Math.random(min,range)*(range-min)+min));
}
let name = ask('enter name :  ');
let rnum = randomNumber(1,2);
console.log(rnum);
let guess = ask("make a guess between 1 and 2 : ");
let grange = 2;
let score = 0; 
while(guess==rnum){
    grange = grange +1;
    rnum = randomNumber(1,grange);
    guess = ask(`make a guess between 1 and ${grange} : `);
    score = score+1;
}
console.log(`congratulations ${name} you scored ${score} `);