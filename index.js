/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
// const area = function (l1, l2) {
//   let traianglArea = (l1 * l2) / 2;
//   return traianglArea
// };
// area(6, 6);
// let square = area(4, 4);
// console.log(square); //8

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
// const crazySum = function (num1, num2) {
//   if (num1 === num2) {
//     let multipler = (num1 + num2) * 3;
//     console.log("Both have same interger", multipler);
//   } else {
//     let sum = num1 + num2;
//     console.log("Sum of Two interger", sum);
//   }
// };
// crazySum(5, 6);

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

// const crazyDiff = function (num1) {
//   if (num1 > 19) {
//     return (num1 - 19) * 3;
//   }
//   return num1 - 19;
// };
// let diff = crazyDiff(20);
// console.log("Absolute difference", diff);

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
 */
// const boundary = function (n) {
//   if ((n >= 20 && n <= 100) || n === 400) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log("boundry", boundary(300));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
// const strivify = function (string1) {
//   if (string1 === "Strive") {
//     return string1;
//   } else {
//     return "Strive" + string1;
//   }
// };
// console.log(strivify("Strive"));

/* EXERCISE 6
Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
HINT: Modulus Operator
*/
// const check3and7 = function (num1) {
//   if (num1 >= 0)
//     if (num1 % 3 === 0 || num1 % 7 === 0) {
//       console.log(`number is,${num1} multiple of 3 and 7`);
//     } else {
//       console.log(`number is ,${num1} not multiple of 3 and 7`);
//     }
// };
// check3and7(41);

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
// const reverseString = function (string1) {};

/* EXERCISE 9
Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
// let newString
// const cutString = function (string1) {

//  newString = String.su
// };

/* EXERCISE 10
Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
let randumArray = [];
const giveMeRandom = function (n) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  randumArray.push(randomNumber);
};
giveMeRandom(5);
console.log("random array", randumArray);
