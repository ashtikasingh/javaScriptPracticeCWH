//13 July 2023

//QUESTION 1

let a = prompt("What's your age?");
a=Number.parseInt(a);

if(a>10 && a<20){
    console.log("Lies between");
}else{
    console.log("Noi");
}

//QUESTION 2

let b = 2;

switch(b){
    case 1:
        console.log("IT IS 1");
        break;
    case 2:
        console.log("IT IS 2");
        break;
};

//QUESTION 3

let num = prompt("Please enter the no.");

if(num%2==0 || num%3==0){
    console.log("DIVISIBLE BY 2 OR 3");
}else{
    console.log("NOI");
}

//QUESTION 4

// let n = prompt("Please enter the no.");

if(num%2==0 && num%3==0){
    console.log("DIVISIBLE BY 2 AND 3");
}else if(num%2==0){
    console.log("DIVISIBLE BY 2 ONLY");
}else if(num%3==0){
    console.log("DIVISIBLE BY 3 ONLY");
}

//QUESTION 5

let age = prompt("Please enter age");

let ans = (age>18) ? "YOU CAN DRIVE" : "YOU CAN'T DRIVE ";
console.log(ans);

