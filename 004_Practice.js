//14 July 2023

//QUESTION 1
//--> 4
//QUESTION 2
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result);
console.log(text.startsWith("Hello"));
console.log(text.endsWith("universe."));

//QUESTION 3
let a = "ASHTIKA";
let b = a.toLowerCase();
console.log(b);

//QUESTION 4
let s = "Please give Rs 1000";
let amount = Number.parseInt(s.slice("Please give Rs ".length));
console.log(amount);

//QUESTION 5
let u = "HELLOOO BYe";
u[3]="r";
console.log(u); //not change because string is immutable

