//15 July 2023

//QUESTION 1

let a = prompt("What's your age?");

if(a>=18){
    alert("You can Drive")
}else{
    alert("You can't drive");
}

//QUESTION 2

let b = prompt("What's your age?");

let ask = confirm("Are you sure? or what to change");

if(ask){
    b = prompt("What's your age?");
}

if(b>=18){
    alert("You can Drive")
}else{
    alert("You can't drive");
}

//QUESTION 3

let c = prompt("What's your age?");

let ask1 = confirm("Are you sure? or what to change");

if(ask1){
    c = prompt("What's your age?");
}

if(c<0){
    console.error("AGE CAN'T BE NEGATIVE");
}else{
    if(c>=18){
        alert("You can Drive")
    }else{
        alert("You can't drive");
    }
}

//QUESTION 4

let num = Number.parseInt(prompt("Enter a no."));

if(num>4){
    location.href="https://google.com";
}

//QUESTION 5

let color = prompt("enter any color");
document.body.style.background = color;

