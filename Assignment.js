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
// let country = ["Australia", "Germany", "United States of America"];
// function couNtry(country) {
//     for(let i=0; i<country.length; i++) {
//         // console.log(country[i]);
//         for(let j=0; j<country.length; j++) {
//             console.log(country[i][j]);
//         }
//     }
// }
// couNtry(country);


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
console.log(count);
}
countVowels(str, vowels);
// Qs5 . Write a JavaScript function to generate a random number within a range (start, end).