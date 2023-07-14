let number = Math.floor(Math.random()*10);
let a;
let chance = 0;

while(a!=number){
    a = Number.parseInt(prompt("Enter the guess ?"));
    chance++;
}

let score = 100-chance;
console.log(score+" "+ number);
