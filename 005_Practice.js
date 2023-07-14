//14 July 2023

//QUESTION 1

let arr = [1,2,3,4,5];
// let a = Number.parseInt(prompt("Enter a no."));
// arr.push(a)
// console.log(arr);

//QUESTION 2

// let arr2 = [1,2,3,4,5];
// let b;

// while(b!=0){
//     b = Number.parseInt(prompt("Enter a no."));
//     arr2.push(b)
// }
// console.log(arr2);

//QUESTION 3

let arr3 = [10, 30, 5,2 , 20, 30, 45, 23, 50];
let arr3new = arr3.filter((c)=>{
    return c%10==0;
})
console.log(arr3new);

//QUESTION 4

let ans = arr.map((value)=>{ 
    return value*value
})
console.log(ans);

//QUESTION 5

let arr4 = [1,2,3,4,5,6,7];
 
let answer = arr4.reduce((h1,h2)=>{
    return h1*h2;
})

console.log(answer);

