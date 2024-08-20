// ----------LOOPS-------------------

// Problem 1:
// Create a function that takes two number as input and return true if one 
// of them is 15 or their summation is 15

// let num1= +prompt("enter num1");
// let num2= +prompt("enter num2");
// if (num1==15 || num2==15 || (num1+num2)==15) {
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }

// Problem 2:
// Function to check if the given number is a perfect square or not.

// let num= +prompt("enter num");
// let x= +prompt("enter x");
// if (num==Math.pow(x,2)) {
//     console.log(" number is a perfect square");
    
// }else{
//     console.log("number is not a perfect square");
    
// }

// ----------------------------------------------------------------------------------


// -----------------Array------------------------------------------------------

// Problem 1:
// Function that takes a number and return the left most digit of it.


// let num =Number(prompt());
// function leftDigit(num){
//     num = Math.abs(num);

//     if(num < 10){
        
//         return num;
        
//     }else{

//         return leftDigit(Math.floor(num/10));
//     }

// }

// console.log(leftDigit(num));

// ------------------------------------------------------------------

// Problem 2:
// Create a program that takes an array count how many positive numbers,
// negative numbers, even numbers and odd numbers (By same order as
// written) (0 is not counted as positive or negative but it’s counted as an
// even number).

// const arr =  [5, 7, -2, 0, 4, -8, -3, 6];
// let positive = 0;
// let negative = 0;
// let even= 0;
// let odd = 0;
// for (let i = 0; i < arr.length; i++) {
   
// if (arr[i] >0) {
    
//     positive++;
// }else if(arr[i] < 0){
//     negative++;
// }


// if (arr[i] % 2 === 0) {
//     even++;
// }else if(arr[i] % 2 !== 0){
//     odd++;
// }
    
// }

// console.log(`Positive numbers: ${positive}`); 
// console.log(`Negative numbers: ${negative}`); 
// console.log(`Even numbers: ${even}`);        
// console.log(`Odd numbers: ${odd}`); 



// ----------------------------------------------------------------
// Problem 3:
// Create a function that take array as an input this array may contains
// numbers or strings return the array contains only integers.

// const arr =  ["Ahmed", 12, "Mohamed", 34, "Mahmoud", 12, 54];

// for (let i = 0; i < arr.length; i++) {
    
//    if (arr[i] === Number(arr[i])) {
    
//     console.log(arr[i]);
    
//    }
    
// }

// ----------------------------------------------------------------------------

// Problem 4:
// Implement slice() function. Function that takes an array and perform the 
// same thing that .slice() do.

// let arr =[1,2,3,4,5];

// console.log(arr.slice( 1, 3)); 
// console.log(arr.slice( -4, -1));  
// console.log(arr.slice( 2)); 
// console.log(arr.slice(arr));

// -------------------------------------------------------------------------------

// Problem 6:
// Given a string S. Print the origin string if it’s not too long otherwise, print
// special abbreviation.
// Note: The string is called too long, if its length is strictly more than 10
// characters. If the string is too long then you have to print the string in the
// following manner:
// • Print the first character in the string.
// • Print number of characters between the first and the last characters
// • Print the last character in the string

// function str(s){
//   if (s.length > 10) {
       
//       return  s[0] + (s.length - 2) + s[s.length - 1];
        
//     }else{
//         return s
//     }
// }

// console.log(str('internationalization'));
// console.log(str('word'));
// console.log(str('pneumonoultramicroscopicsilicovolcanoconiosis'));

// ---------------------------------------------------------------------------


// Problem 9:
// Create a function that takes an array and a character that returns the first
// and the last index of this character.

// function findIndex(arr,char) {

//     let firstChar= arr.indexOf(char);
//     let lastChar= arr.lastIndexOf(char);

//     return  [firstChar, lastChar];
// }

// let arr =  ['h', 'e', 'l', 'l', 'o'] ;

// console.log(findIndex(arr,'l'));

// ------------------------------------------------------------------------



//---------------------String-------------------------------

// Problem 1:
// Make a function that accepts one string and return it reversed.

// let username = prompt();


// console.log(username.split("").reverse().join(""));

// --------------------------------------------------------------

// Problem 2:
// Function that accepts two string and check if they are equal or not (not 
//     case sensitive)
    

// let x =prompt();
// let y = prompt();

// if (x.toLowerCase()==y.toLowerCase()) {
//     console.log(true);
    
// }else{
//     console.log(false);
    
// }

// -------------------------------------------------------------------

// Problem 3:
// Function that takes a string and check if this string is all uppercase or not.


// let x =prompt();
// if (x === x.toUpperCase()) {
    
//     console.log(true);
    
// }else{
//     console.log(false);
    
// }

// ---------------------------------------------------------------------

// Problem 4:
// Function that takes a string and two positions as numbers and return the 
// part of the string between these two positions. (Make two different 
// solutions).

// let x =prompt("Enter name");
// let start = +prompt("Enter start");
// let end = +prompt("Enter end");
// console.log(x.slice(start,end));
// console.log(x.substring(start,end));

// ----------------------------------------------------------------------

// Problem 5:
// Make a function that accepts 3 names as a parameter first one is 
// firstName second is middleName and third lastName.
// And then the function should return one string containing all three 
// names separated by a space without using (+) operator.

// function string(firstName, middleName, lastName) {
 
//     return ` ${firstName} ${middleName} ${lastName} `;


// }
// console.log(string("Nancy" , "Diaa" , "Rashid"));

// ---------------------------------------------------------------------

// Problem 6:
// Function that accepts a string and then checks if it is palindrome or not.

// function str(s){
//  let S1 = s.split("");
//  let Reverse = S1.reverse().join("");
//  if (s===Reverse) {
//     console.log("it is palindrome");
    
//  }else{
//     console.log("it is not palindrome");
//  }
// }

// str("12321");
// str("fafa");


// ------------------------------------------------------------------------

// Problem 7:
// Function that accepts a string and remove the extra spaces at the start 
// and the end of this string

// function String(str) {
//     return str.trim();
// }
// console.log(String(" hello world  "));

// ---------------------------------------------------------------------

// In specific location all URLs start with (ww.) and ends with (.eraa).
// Make a function that accepts a URL and check if it’s from this location or 
// not.

// function specificLocation (url){
 
//     return url.startsWith("ww.") && url.endsWith(".eraa");
// }
// console.log(specificLocation("ww.example.eraa"));
// console.log(specificLocation("w3w.sherif.err"));


// ---------------------------------------------------------------------

// Problem 9:
// Function that takes a string and remove the ‘o’ letter from it (Capital and 
// small)

// function string(s){

//     return s.split(/o/i).join("") || s.split(/O/i).join("");
   
// }

// console.log(string("hello"));
// console.log(string("OOPE"));
// ----------------------------------------------------------------------

// Problem 10:
// Function that accepts three strings. Check if the second and the third 
// strings are a substring of the first one.

// function substring(sub,str1,str2){

//     return sub.includes(str1) && sub.includes(str2);
// }

// console.log(substring("SoWhatYesOhh", "What", "Ohh"));
// console.log(substring("SoWhatYesOhh", "So", "AH"));









