//13 July 2023

//QUESTION 1

let obj ={
    harry: 98,
    rohan: 70,
    aakash:7
}

for(let i =0; i<Object.keys(obj).length; i++){ //object.key usko array bana dega
    console.log(Object.keys(obj)[i]+" "+ obj[Object.keys(obj)[i]]);
}

//Object.keys(obj) = saari keys dega return array
//obj[Object.keys(obj)[i]] obj mai koi bhi key dalege toh milega value

//QUESTION 2

for(let marks in obj){
    console.log(obj[marks]);
}

//QUESTION 3

let b = 7;
let a;

while(b!=a){
    console.log("TRY AGAIN");
    a = prompt("Enter the correct no.?");
}

//QUESTION 4

const mean = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}

let z = Number.parseInt(prompt("Enter the correct no.?"));
let y = Number.parseInt(prompt("Enter the correct no.?"));
let x = Number.parseInt(prompt("Enter the correct no.?"));
let w = Number.parseInt(prompt("Enter the correct no.?"));
let v = Number.parseInt(prompt("Enter the correct no.?"));

console.log(mean(z,y,x,w,v));
