// Qs1 . Write a JavaScript function that returns array elements larger than a number.
// let arr = [4, 32, 55, 43, 12, 10, 75, 50, 20];
// function aRRay(arr, n) {
//     for(let i=0; i<=n; i++){
//         return arr[i];
//     }
// }



// Qs2 . Write a JavaScript function to extract unique characters from a string. 
// Example : str = “abcdabcdefgggh” ans= “abcdefgh”
let str = "abcdabcdefgggh";
let ans = "";
for(let i=0; i<str.length; i++) {
    for(let j=0; j<str.length; j++){
        if(str[i] === str[j]) {
        ans += str[j];
        }
    }
}
console.log(ans);