// function hello(){
//     console.log("hello");
// }

// function printName(){
//     console.log("aryan");
//     console.log("aryanDon");
// }

// function print1to5(){
//     for(let i = 1; i<=5; i++){
//         console.log(i);
//     }
// }

// function isAdult(){
//     let age = 1;
//     if(age >= 18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }
// isAdult();

// Practice Qs 1 - Create a function that prints a poem.
// function printPoem(){
//     console.log("Twinkle Twinkle little star");
//     console.log("How i wonder what you are ");
// }
// printPoem();

// Practice Qs 2 - Create a function to roll a dice & always display the value of the dice (1 to 6).
// function rollDice(){
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice();

// functions with Arguments - Values we pass to the function 
// function sum(a, b){
//     console.log(a + b);
// }
// sum(1, 2);

// Practice Qs 3 - Create a function that gives us the average of 3 numbers.
// function calcAvg(a, b, c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calcAvg(4, 5, 6);

// Practice Qs 4 - Create a function that prints the multiplication table of a number.
// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// printTable(13);

// Return Keyword - Return keyword is used to return some value from the function.

// function sum(a, b){
//     console.log("hello");
//     console.log("hello");
//     return a+b;
//     console.log("hello");
//     console.log("hello");
// }
// console.log(sum(1, 2));

// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }
// isAdult(18);

// Practice Qs 5 - Create a function that returns the sum of numbers from 1 to n.
// function  Sum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
// }
// Sum(8);

// Practice Qs 6 - Create a function that returns the concatenation of all strings in an array.
// let arr = ["Aryan", "is", "the", "best", "football", "Player"];
// function concat(arr){
//     let result = "";
//     for(let i=0; i<arr.length; i++){
//         result += arr[i];
//     }
//     return result;
// }

// Scope - Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// (i). Function Scope - Variables defined inside a function are not accessible (visible) from outside the function.

// let sum = 54;//Global Scope
// function calSum(a, b){
//     let sum = a+b;//Function Scope
//     console.log(sum);
// }
// calSum(1, 2);
// console.log(sum);

// Block Scope - Variables declared inside a {} block cannot be accessed from outside the block. 

// {
//     let a = 25;
// }
// console.log(a);

let age = 25;
if(age >= 18){
    let str = "adult";
    console.log(str);
}