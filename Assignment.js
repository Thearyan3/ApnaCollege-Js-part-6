// Qs1 . Write a JavaScript function that returns array elements larger than a number.
// let arr = [4, 32, 55, 43, 12, 10, 75, 50, 20];
// function aRRay(arr, n) {
//     for(let i=0; i<=n; i++){
//         return arr[i];
//     }
// }



// Qs2 . Write a JavaScript function to extract unique characters from a string. 
// Example : str = “abcdabcdefgggh” ans= “abcdefgh”
// let str = "abcdabcdefgggh";
// let ans = "";
// for(let i=0; i<str.length; i++) {
//     for(let j=0; j<str.length; j++){
//         if(str[i] === str[j]) {
//         ans += str[j];
//         }
//     }
// }
// console.log(ans);

// Qs3 . Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia","Germany","United States of America"] output : "United States of America"
let country = ["Australia", "Germany", "United States of America"];
function couNtry(country) {
    let ansidx = 0;
    for(let i=0; i<country.length; i++) {
        let anslen = country[ansidx].length;
        let currlen = country[i].length;
        if(currlen > anslen) {
            ansidx = i;
        }
    }
    return country[ansidx];
}
couNtry(country);


// Qs4 . Write a JavaScript function to count the number of vowels in a String argument.
let str = "MynameisAryanTanwar";
let vowels = "aeiouAEIOU";
function countVowels(str, vowels) {
let count = 0;
for(let i=0; i<str.length; i++){
    for(let j=0; j<vowels.length; j++){
        if(str[i] === vowels[j]){
            count++;
        }
    }
}
return count;
}



// Qs5 . Write a JavaScript function to generate a random number within a range (start, end).
let a = 100;
let b = 200;
function randomNumber(a, b){
    let diff = b-a;
    return Math.floor(Math.random()*diff)+a;
}

