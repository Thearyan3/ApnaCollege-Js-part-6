// Qs1 . Write a JavaScript function that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
 let num = 5;
  function getElements(arr, num){
    for(let i=0; i<arr.length; i++) { 
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
  }
getElements(arr,num);



// Qs2 . Write a JavaScript function to extract unique characters from a string. 
// Example : str = “abcdabcdefgggh” ans= “abcdefgh”
let str1 = "abcdabcdefgggh";
function getuniqueChar(str1) {
    let ans = "";
    for(let i=0; i<str1.length; i++){
        let currchar = str1[i];
        if(ans.indexOf(currchar) == -1){
            ans += currchar;
        }
    }
    return ans;
}


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

