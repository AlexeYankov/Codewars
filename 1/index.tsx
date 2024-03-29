// // 24.05.22
// 1.
// Instructions
// Code as fast as you can! You need to double the integer and return it.
//     function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i;
// }
//     Solution
// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i*2;
// }
//
// 2.
// Instructions
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
//     Examples
//     makeNegative(1);    // return -1
//     makeNegative(-5);   // return -5
//     makeNegative(0);    // return 0
//     makeNegative(0.12); // return -0.12
//
// function makeNegative(num) {
//     // Code?
// }
//
//     Solution
// function makeNegative(num) {
//     return num < 0 ? num : -num;
//     // Code?
// }
//
// 3.
// Instructions
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//
// Write a program that returns the girl's age (0-9) as an integer.
//
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
//
//     function getAge(inputString){
// // return the girl's correct age as an integer. Happy coding :)
// }
//
// Solution
// function getAge(inputString){
// // return the girl's correct age as an integer. Happy coding :)
//     const inputValue = +inputString.slice(0,1)
//     return inputValue
// }
// //
// // 27.05.22
// // 4. Training JS #1: create your first JS function and print "Hello World!"
// // Instructions
// // In JavaScript, your code is running in a function, let us step by step complete your first JS function.
// //
// // Look at this example:
//
//     Solution
// //refer to the example and write your first JS function
// function helloWorld(){
//     let str = "Hello World!"
//     console.log(str)
// }
// //
// 5. I love you, a little , a lot, passionately ... not at all
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
//     I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
//     Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
//
//
// Solution
//
// function howMuchILoveYou(nbPetals) {
//     // your code
//     const phrases = [
//         'I love you',
//         'a little',
//         'a lot',
//         'passionately',
//         'madly',
//         'not at all'
//     ]
//
//     let rp = null
//     const rt = nbPetals > 0 ? (nbPetals < 6 ? phrases[(nbPetals) -1]: phrases[(nbPetals%6 -1)]) : false
//   return console.log(rt)
//     return
// }
//
// howMuchILoveYou(3)

// 07.06.22
// 7.
// Instructions
// Write a function that returns a string in which firstname is swapped with last name.
//
// Example(Input --> Output)
//
// "john McClane" --> "McClane john"
//
// function nameShuffler(str){
//     //Shuffle It
// }
// Solution
// function nameShuffler(str){
//     //Shuffle It
//     const str1 = str;
//     const str2 = str1.split(' ').reverse().join(' ');
//     return str2
// }
// nameShuffler('john McClane')
// 8.
// Reversed Strings
// Instructions
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//
// function solution(str) {
//     return str1 = str.split('').reverse().join('')
// }
// solution('drow')

// 9.Welcome to the City
// Instructions
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//
//     Example:
//
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
//
// function sayHello( name, city, state ) {
// }
//
//
// Solution
// function sayHello( name, city, state ) {
//     const name2 = name.join(' ')
//     const name1 = 'Hello, ' + name2 +'!' + ` Welcome to ${city + ', ' + state}!`
//     console.log(name1)
//     return name1
// }
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

// 10.
// Instructions
//
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//     Example:
//
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!
//
// function removeEveryOther(arr){
//     //your code here
// }
//
// Solution
// function removeEveryOther(arr){
//     const arr1 = []
//     arr.forEach(function(elem, index){
//         index % 2 == 0 ? arr1.push(elem) : ''})
//     return arr1
// }
// removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//
// 11. How many stairs will Suzuki climb in 20 years?
//     Instructions
//
//     Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.
//
//     The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
//
// 20_year_estimate = one_year_total * 20
//
// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
//
//     stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
// Make sure your solution takes into account all of the nesting within the stairs array.
//
//     Each weekday in the stairs array is an array.
//
//     sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
// Your function should return the 20 year estimate of the stairs climbed using the formula above.
//
//     Please also try the other Kata in this series..
//
//
//
//     Solution
//
//
// function stairsIn20(s){
//     //your code here
//     let sum = 0;
//     for (let elem of s) {
//         if (typeof elem == 'object') {
//             sum += stairsIn20(elem);
//         } else {
//             sum += elem*20;
//         }
//     }
//
//     return sum;
// }
//
//
// 12. Grasshopper - Debug sayHello
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
//
// Example output:
//
//     Hello, Mr. Spock
//
// function sayHello(name) {
//     return `Hello, ${name}`
// }

// 13. DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//
//     Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//
//     Create a function which translates a given DNA string into RNA.
//
//     For example:
//
//     "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
//
//     Solution
// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     const arr1 = []
//     const changing = 'U'
//     dna.split('').forEach(function(elem){
//         elem == 'T' ? arr1.push(changing) : arr1.push(elem)})
//     return arr1.join('')
// }
// DNAtoRNA("TTTT")
//
// 14. Exes and Ohs
//
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//
//     Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//
// Solution
// function XO(str) {
//     //code here
//     let sum = [];
//     let sum1 = [];
//     const arr1 = str.split('')
// //     for (let elem of arr1) {
// //         if ( elem == 'X'|'x') {
// //             sum.push(elem);
// //         }
// //       console.log(sum)
// //           if ( elem == 'o' | 'O') {
// //             sum1.push(elem);
// //           }
// //         console.log(sum1)
// //     }
//     for (let elem of arr1) {
//         elem == 'x' ? sum.push(elem) : elem == 'X' ? sum.push(elem) : elem == 'o' ? sum1.push(elem) : elem == 'O' ? sum1.push(elem) : ''
//     }
//     console.log(sum, sum1)
//     return sum.length == sum1.length ? true : false
// }
// XO('xXXoOo')

// 15. Count of positives / sum of negatives
// Instructions
// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//
//     Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//
// Solition
//
// function countPositivesSumNegatives(input) {
//     let a = []
//     let b = 0
//     for (let elem of input) {
//         if (typeof elem == 'object') {
//             elem > 0 ? a.push(elem) : b += elem
//         } else {
//             elem > 0 ? a.push(elem) : b += elem
//         }}
//     const a1 = a.length
//     return [a1, b];
// }
// let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// countPositivesSumNegatives(testData);

// 16.06
// 16. Enumerable Magic #20 - Cascading Subsets
// Instructions
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
//
//     each_cons([1,2,3,4], 2)
// #=> [[1,2], [2,3], [3,4]]
//
// each_cons([1,2,3,4], 3)
// #=> [[1,2,3],[2,3,4]]
//
// As you can see, the lists are cascading; ie, they overlap, but never out of order.
//
//     function eachCons(array, n) {
//     return [];
// }
//
// Solition
// function removeChar(str){
//     //You got this!
//     const arr1 = [], str1 = str.split(''), str2 = str1.pop(), str3 = str1.shift()
//     return str1.join('')
// };
//
// removeChar('eloquent')

// 17. Convert a Number to a String!
// We need a function that can transform a number into a string.
//
//     What ways of achieving this do you know?
//
//     Examples:
//     123 --> "123"
// 999 --> "999"
// Solution
// function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString()
// }
// numberToString(67)

// 18. Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.
//
//     SOLUTION
//     function noSpace(x){
//     return x.split(' ').join('')
//
// }
// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')

// 19. Find the smallest integer in the array
// Given an array of integers your solution should find the smallest integer.
//
//     For example:
//
//     Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
//
//     SOLUTION
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let arr1 = args.sort(function(a, b) {
//             return a-b;
//         })
//         return arr1.shift()
//     }
// }

// 20. Grasshopper - Summation
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
// For example:
//
//     summation(2) -> 3
// 1 + 2
//
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
//
// Solution
// var summation = function (num) {
//     // Code here
//     const a1 = [];
//     for (i = 0; i<=num; i++) {
//         a1.push(i)
//     }
//     let result = a1.reduce(function(sum, elem){
//         return sum+elem;
//     },0);
//     return result
// }
// summation(4)

// 21.
// Century From Year
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
//
//     Task
// Given a year, return the century it is in.
//
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
//
// function century(year) {
//     // Finish this :)
//     return Math.ceil(year/100);
// }
// century(1705)

// 22. Sum Arrays
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//
// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2
//
// Input: []
// Output: 0
//
// Input: [-2.398]
// Output: -2.398
//
// Assumptions
// You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.
//
// function sum (numbers) {
//     "use strict";
//     let a1 = 0, a2 = 0
//     for (let elem of numbers) {
//         if (elem>1) {
//             a1 +=elem
//         } if (elem<0) {
//             a2 +=elem
//         }
//     }
//     return a1 !== 0 ? a1 : a2 !== 0 ? a2 : 0
// };
//
// sum([1, 5.2, 4, 0, -1])

// function convertToRoman(num) {
//     const a1 = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000], a7 = [], a6 = [], a5 = [], a8 =[]
//     const a2 = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
//     const a4 = num.toString().split('')
//     if (a4.length>=3) {
//         a5.push(a4.pop(a4.length))
//         a6.push(a4.pop(a4.length-1))
//         a7.push(a4.pop(a4.length-2))
//     }
//     a8.push(a2[12].repeat(+a4.join('')))
//     let z = [], z1 = [], z3 = []
//     const a10 = a1.reverse(), a11 = a2.reverse()
//     for (let i = 0; i<a1.length; i++) {
//         if (a5*10>=a10[i-1]) {
//             z.push(a11[i-1])
//         } if (a6>=a10[i]) {
//             z1.push(a11[i])
//         }}
//     return console.log(a8)
// }

// convertToRoman(5777)

// 03.07.22
// 23. Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
//     class Kata {
// static getVolumeOfCuboid(length, width, height) {
//         // your code here
//     }
// }
//
// SOLUTION
// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         // your code here
//         return length * width * height
//     }
// }

// 24. Function 1 - hello world
// Description:
//     Make a simple function called greet that returns the most-famous "hello world!".
//
//     Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?
//     SOLUTION
//     // Write a function "greet" that returns "hello world!"
//
//     function greet() {
//         return "hello world!"
//     }

// 25. L1: Set Alarm
// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//
//     The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
//
// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true
//
// function setAlarm(employed, vacation){
//
// }
// SOLUTION
//
// function setAlarm(e, v){
//     return e == true ? v == true ? false : e : false
// }

// 26. Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//
//     Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
//
// Example:
//     n= 5, m=5: 25
// n=-5, m=5:  0
//
// solution
// function paperwork(n, m) {
//     if (n>0 && m>0) {
//         return n * m
//     } else {
//         return 0
//     }}

// 27. Remove the minimum
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
//
//     However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
//
// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
//     Don't change the order of the elements that are left.
//
// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
//     * Input: [5,3,2,1,4], output = [5,3,2,4]
//     * Input: [2,2,1,2,1], output = [2,2,2,1]
//
// Solution
// function removeSmallest(n) {
//     const n1 = Array.from(n), n2 = n1.splice(n1.indexOf(Math.min.apply(null, n1)),1);
//     return n1
// }

// 17.07
// 28. Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// For example,
//
//     [true,  true,  true,  false,
//         true,  true,  true,  true ,
//         true,  false, true,  false,
//         true,  false, false, true ,
//         true,  true,  true,  true ,
//         false, false, true,  true]
// The correct answer would be 17.
//
// Solution
// function countSheeps(arrayOfSheep) {
//     const arrayOfSheep1 = arrayOfSheep ? arrayOfSheep : false
//     const a1 = arrayOfSheep1.filter(el=> el !== true)
//     return arrayOfSheep1.length - a1.length
// }
// var array1 = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true ];
// countSheeps(array1)

// 29. Count the divisors of a number
// Count the number of divisors of a positive integer n.
//
//     Random tests go up to n = 500000.
//
// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// Solution
// function getDivisorsCnt(n){
//     let a = 1, b = []
//     for (el=a; el<=n;el++) {
//         (n/el)%1 == 0 ? b.push(el) : ""
//     }
//     return b.length
// }
// getDivisorsCnt(1)

// 26.07
// 30. Reverse words
// Instructions
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//
//     Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//
// SOLUTION
//
// function reverseWords(str) {
//     const a = str.split(' '), b=[]
//     for (let i = 0; i<a.length; i++) {
//         b.push(a[i].split('').reverse().join(''))
//     }
//     return b.join(' ')
// }
//
// reverseWords('This is an example!')

// 31. Area of an arrow
// Area of an arrow
// An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.
//     a and b are integers and > 0
//
// Write a function which returns the area of the arrow.
//
//     SOLUTION
// function arrowArea(a,b) {
//     // your code
//     return 0.25*a*b
// }

// 32. Beginner Series #3 Sum of Numbers
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//
//     Note: a and b are not ordered!
//
// Examples (a, b) --> output (explanation)
//
// SOLUTION
// function getSum( a,b ) {
//     let c = 0
//     if (a === b) {
//         c = a
//     } else {
//         let f = []
//         let max = a < b ? b : a
//         let min = a > b ? b : a
//         for (let i = min; i<=max; i++) {
//             f.push(i)
//         }
//         for (i=0; i<f.length;i++) {
//             c += f[i]
//         }
//     }
//     return c
// }

// 33. Small enough? - Beginner
// INSTRUCTIONS
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
//
//     You can assume all values in the array are numbers.
//
// SOLUTION
//
// function smallEnough(a, limit) {
//     let b = a, c = 0, f = 0
//     b.forEach(el=> el > c ? c = el : c)
//     return c <= limit ? true : false
// }

// 34. Mumbling
// INSTRUCTIONS
// This time no story, no theory. The examples below show you how to write function accum:
//
//     Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
//
//     SOLUTION
// function accum(s) {
//     // your code
//     const contaiter = s, pattern = contaiter.toLowerCase().split('')
//     let switchContainer = [], finalSwitchContainer = []
//     for (let i = 0; i<pattern.length; i++) {
//         if (i===0) {
//             switchContainer.push(pattern[i].toUpperCase())
//         } else {
//             switchContainer.push(pattern[i].toUpperCase())
//             switchContainer.push(pattern[i].repeat(i))
//         }
//     }
//     for (let i = 0; i<switchContainer.length; i++) {
//         if (switchContainer[i] == switchContainer[i].toUpperCase()) {
//             const h = '-'
//             finalSwitchContainer.push(h)
//             finalSwitchContainer.push(switchContainer[i])
//         } else {finalSwitchContainer.push(switchContainer[i])}
//     }
//     const correction = finalSwitchContainer.shift()
//     return finalSwitchContainer.join('')
//
// }
// accum("Zpgl")

// 06.08.22
//
// 35. Smallest value of an array
// INSTRUCTIONS
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
//
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
//
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0
//
// SOLUTION

// function min(arr, toReturn) {
//
//     let c = 0, e=arr, r=0
//     if (toReturn === 'value' ) {
//         c = Math.min(...e)
//         return c
//     }
//     if (toReturn === 'index') {
//         c = Math.min(...e)
//         r = e.indexOf(c)
//         return r
//     }
//     return 'this type not exist'
// }
// min([1,2,3,4,5], 'value')

// 36. Build Tower
// INSRUCTIONS
// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]
//
// SOLUTION
//
// function towerBuilder(nFloors) {
//     // build here
//     if (nFloors === 1) {
//         return ['*']
//     }
//     if (nFloors === 2) {
//         return ['*','***']
//     }
//     let a=['*', '***'], b=nFloors, c=[], d='*', f=['*'], l=['*']
//     for (i=b;i>2;i--) {
//         if (i%2===0) {
//             l.push(d.repeat((i-1)*2))
//             c.push(l.join(''))
//
//         }
//         else {
//             f.push(d.repeat((i-1)+1))
//             c.push(f.join(''))
//
//         }
//     }
//     return a.concat(c)
// }
// towerBuilder(2)

// 13.08.22

// 37. Sum of two lowest positive integers
//
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//
//     For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
//     [10, 343445353, 3453445, 3453545353453] should return 3453455.
//
// SOLUTION
// function sumTwoSmallestNumbers(numbers) {
//     //Code here
//     let a = numbers.sort(function(a, b){
//         return a-b
//     })
//     return a[0] + a[1]
// }
// sumTwoSmallestNumbers([15, 28, 4, 2, 43])

// 38. Break camelCase
// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// 05.11.22
// 39 Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.
//
// function disemvowel(str) {
//     return str;
// }
//
// function disemvowel(str) {
//     const copyStr = [...str.toLowerCase().split('')]
//     let res = [], res1 = [], res2 = []
//     const filter = ['a', 'e', 'i', 'o', 'u'];
//     for (let i = 0; i < copyStr.length; i++) {
//         for (let u = 0; u<filter.length; u++) {
//             filter[u] == copyStr[i] ? res.push(i) : 0
//         }
//     }
//     const finalArray = str.split('')
//     for (let i = 0; i < finalArray.length; i++) {
//         res.includes(finalArray.indexOf(finalArray[i])) ? 0 : res1.push(finalArray[i])
//
//     }
//     return res1.join('');
// }
// disemvowel("This website is for losers LOL!")

// 40. Squares sequence
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
//
//     Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]
//
// function squares(x, n) {
//     let array = [], error = []
//     for (let i = 1; i<=n; i++) {
//         if (i<=1) {
//             array.push(x*(i))
//         }
//         else {
//             array.push(Math.pow(+array[i-2], 2))
//         }
//     }
//     return n ? array : error
// }

// 19.11.22
// 41. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//
// Note: If the number is a multiple of both 3 and 5, only count it once.
//
//     Courtesy of projecteuler.net (Problem 1)
//
// function solution(number){
//     if (number <= 0) {
//         return 0
//     }
//     let a = [], b = 0
//     for (i = 0; i<number; i++) {
//         if (i % 3 == 0) {
//             a.push(i)
//         }
//         if (i % 10 == 0) {
//             ''
//         }
//         if (i % 5 == 0) {
//             a[a.length-1] == i ? '' : a.push(i)
//         }
//     }
//     return a.reduce(function(sum, current) {
//         return sum + current
//     })
// }
// solution(10)
//

//  42. Isograms
//
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// Example: (Input --> Output)
//
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// function isIsogram(str){
//     //...
//     const copyOfData = str, splitCopy = str.toLowerCase().split(''), arrayOfData = [""]
//     for (let i = 0; i<splitCopy.length; i++) {
//         if (arrayOfData.includes(splitCopy[i])) {
//             return false
//         }
//         else {
//             arrayOfData.push(splitCopy[i])
//         }
//     }
//     return true
// }
// isIsogram("Dermatoglyphics")

// 43. Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//     Examples:
//
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"
//
// function spinWords(string){
// const copyOfDataArray = string.split(' '), temp = []
// for (let i = 0; i < copyOfDataArray.length; i++) {
//     copyOfDataArray[i].split('').length >= 5 ? (
//         temp.push(copyOfDataArray[i].split('').reverse().join(''))
//     ) : temp.push(copyOfDataArray[i])
// }
// return temp.join(' ')
// }
// spinWords("Hey fellow warriors")

// 44. Count of positives / sum of negatives
// Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//
//     Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
//
// function countPositivesSumNegatives(input) {
//     let a = [], copyOfData = input || [], tempNumber = 0
//     if (copyOfData.length < 0 ) {
//         return []
//     }
//     for (let i = 0; i<copyOfData.length; i++) {
//         if (copyOfData[i]>0) {
//             tempNumber = tempNumber + 1
//         }
//         else {
//             a.push(copyOfData[i])
//         }
//     }
//     return  tempNumber == a.reduce((acc, el)=> acc+el, 0) ? [] : [tempNumber, a.reduce((acc, el)=> acc+el, 0)]
// }
// let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// countPositivesSumNegatives(testData);

// 45. Convert to Roman
//
// let a = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
// let b = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
//
// function convertToRoman (num) {
//     let u = num, p = 0, finalArray = [], finalRomanArray = []
//     for (let i = 0; i< a.length; i++) {
//         if (u == a[i]) {
//             finalArray.push(a[i])
//             u = u - a[i]
//         }
//         if (u - a[i] >= 1) {
//             p = Math.floor(u / a[i]);
//             u = u - p * a[i];
//             for (let e = p; e>=1; --e) {
//                 finalArray.push(a[i])
//             };
//             if (u == a[i+1]){
//                 finalArray.push(a[i+1])
//                 u = u - a[i+1]
//             }
//             else {
//                 p = Math.floor(u / a[i+1]);
//                 u = u - p * a[i+1];
//                 for (let e = p; e>=1; --e) {
//                     finalArray.push(a[i+1])
//                 };
//
//             }
//             i++
//         }
//         else {""}
//     }
//     for (let i = 0; i<finalArray.length; i++) {
//         finalRomanArray.push(b[a.indexOf(finalArray[i])])
//     }
//
//     return finalRomanArray.join('')
// }

// 26.11.22
// 46 Millipede of words
// The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.
//
//     Input
// Array of 3 to 7 words of random length. No capital letters.
//
//     Example true
// Set: excavate, endure, desire, screen, theater, excess, night.
//     Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.
//
//     Example false
// Set: trade, pole, view, grave, ladder, mushroom, president.
//     Millipede: presidenT Trade.
//     Примеры
// assert.strictEqual(solution(["trade", "pole", "view", "grave", "ladder", "mushroom", "president"]), false)
// })
// it("Five words", function() {
//     assert.strictEqual(solution(["screen", "desire", "theater", "excess", "night"]), true) откуда тут Desire?
// })
// it("Four words", function() {
//     assert.strictEqual(solution(["engine", "endure", "elite", "excess"]), true)
// })
// it("One letter words", function() {
//     assert.strictEqual(solution(["east", "e", "e", "t", "t", "e", "time"]), true)
// })
// it("One more test", function() {
//     assert.strictEqual(solution(["no", "dog", "on", "good"]), false)
//
//
// function solution(words) {
//     let tempArray = [...words], testArray = [], temp=[], u=0, arrayOfData = []
//     let arrayOfUnique = tempArray.reduce(function(acc,el) {
//         acc.includes(el) ? "" : acc.push(el)
//         return acc
//     }, []);
//     let f=[], o = [], c = '';
//     for (let i = 0; i< arrayOfUnique.length; i++) {
//         let s = arrayOfUnique[i].split('');
//         c = s[0] + s[s.length-1]
//         f.push(c)
//     }
//     f
//     return f.sort()
// }
// solution(["screen", "desire", "desire", "desire", "theater", "excess", "night"])

// 11.12.22

// 47. Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
//     let copyOfn = new String(n)
//     let c = copyOfn.toString().split('')
//      while (c.length>1) {
//          copyOfn = c.reduce((acc, el)=> acc + (el == 0 ? 0 : +el), 0)
//          c = copyOfn.toString().split('')
//      }
//       return +c[0]
//   }

//   digitalRoot(987)

// 48 Vowel Count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     const dictionary = ['a', 'e', 'i', 'o', 'u']
//     let a = 0
//     let c = str.split('')
//     for (let i = 0; i<c.length; i++) {
//       dictionary.includes(c[i]) ? a++ : ''
//     }
//     return a;
//   }

//   getCount("abracadabra")

// 24.12.22
// 49  Who likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// function likes(names) {
//     // TODO
//   switch (names.length) {
//       case 0:
//         return "no one likes this";
//       case 1:
//         return names[0] + ' likes this';
//       case 2:
//         return names[0] + ' and ' + names[1] + ' like this';
//       case 3:
//         return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
//       default:
//         return names[0] + ', ' + names[1] + ' and ' + `${names.length-2}` + ' others like this';
//     }
//   }

//   50. Create Phone Number

//   Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// function createPhoneNumber(numbers){
//     let prefix = numbers.slice(0,3).join('')
//     let startOfNumber = numbers.slice(3,6).join('')
//     let restOfNumbers = numbers.slice(6,numbers.length).join('')
//     return '('+ prefix + ')' + ' ' + startOfNumber + '-' + restOfNumbers
//   }

// 27.12.22

// 51  Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// function arrayDiff(a, b) {
//     let z = []
//     let f = a.reduce((start,current) => {
//       return b.includes(current) ? "" : z.push(current)
//   },"")
//     return z
//   }

// 52 Ordered Count of Characters

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// function solution(words) {
//     let tempArray = words, testArray = [], temp=[], u=0, arrayOfData = []
// let arrayOfUnique = tempArray.split('').reduce(function(acc,el) {
//     acc.includes(el) ? "" : acc.push(el)
//     return acc
// }, []);
//     let arrayOfData1 = arrayOfUnique.reduce(function(acc,el) {
//         let count = words.split('').reduce(function(acc1,el1) {
//             el == el1 ? acc1++ : ""
//             return acc1
//         },0)
//         acc.push([el, count])
//         return acc
//     }, []);
//     return arrayOfData1
// }
// solution("abracadabra")

// 18.01.23
// 53. Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// function findOutlier(integers){
//     //your code here
//     return integers.reduce(function(acc, el) {
//         if (integers[0]%2 == 0) {
//             el%2 == 0 ? "" : acc.push(el)
//         };
//         if (integers[0]%2 !== 0) {
//             el%2 !== 0 ? acc.push(el) : ""
//         };
//         return acc;
//     }, [])[0]
//   }

// 03.02.23
// 54. Bit Counting

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// var countBits = function (n) {
//   if (typeof n == typeof 1) {
//     if (n == 0) {
//       return 0;
//     } else {
//       let u = n,
//         result = [];
//       for (let i = 2; i < u; u / 2) {
//         console.log(u);
//         u % 2 == 0 ? result.push("0") : result.push("1");
//         u = u / 2;
//         u > Math.floor(u) ? (u = u - 0.5) : u;
//       }
//       result.push("10");
//       let compare = /1/gi;
//       let numbers = result.reverse().join("");
//       return numbers.match(compare).length;
//     }
//   }
//   return 0;
// };

// countBits(1234)

// 55. Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// function findOdd(A) {
//     //happy coding!
//     let caseValues = A; finalValue = 0
//     let arrayOfUnique = caseValues.reduce(function(acc,el) {
//           acc.includes(el) ? "" : acc.push(el)
//           return acc
//       }, []);
//     for (let i = 0; i<arrayOfUnique.length; i++) {
//       let tempValue = 0;
//       for (let u = 0; u<caseValues.length; u++) {
//           arrayOfUnique[i] == caseValues[u] ? tempValue++ : ""
//       }
//       if (tempValue%2 == 0) {
//           ""
//       }
//       else {
//           finalValue = arrayOfUnique[i]
//       }
//     }
//     return finalValue;
//   }

//   findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])

// 17.02.23

// 56. Replace With Alphabet Position

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// function alphabetPosition(text) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
//   let a = text.toLowerCase().split(" "), b = [];
//   const arrayReturned = a.forEach(el=>{
//       let variable = el.split("")
//       for (let i = 0; i<variable.length;i++){
//         alphabet.indexOf(variable[i])+1 !== 0 ?
//       b.push(alphabet.indexOf(variable[i])+1) : ""
//     }
//   })
//   return b.join(" ");
// }

// alphabetPosition("The sunset sets at twelve o' clock.")

// 57. Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// var uniqueInOrder=function(iterable) {
// let finalArray = []
// if (typeof iterable == typeof 'a') {
// let arrayOfData = iterable.split("");
//     for (let i = 0; i<arrayOfData.length;i++) {
//       if (arrayOfData.length == 0) {return 0}
//       if (i == 0) {finalArray.push(arrayOfData[0])}
//       else {
//           arrayOfData[i-1] == arrayOfData[i] ? "" : finalArray.push(arrayOfData[i])}
//       }
//     }
//     if (typeof iterable[0] == typeof 4) {
// let arrayOfData = iterable.join('').split("");
// for (let i = 0; i<arrayOfData.length;i++) {
//   if (arrayOfData.length == 0) {return 0}
//   if (i == 0) {finalArray.push(+arrayOfData[0])}
//   else {
//       arrayOfData[i-1] == arrayOfData[i] ? "" : finalArray.push(+arrayOfData[i])}
//   }
// }
//     if (typeof iterable[0] == typeof 'a') {
//     let arrayOfData = iterable;
//     for (let i = 0; i<arrayOfData.length;i++) {
//       if (arrayOfData.length == 0) {return 0}
//       if (i == 0) {finalArray.push(arrayOfData[0])}
//       else {
//           arrayOfData[i-1] == arrayOfData[i] ? "" : finalArray.push(arrayOfData[i])}
//       }
//     }
//       return finalArray
//   }

//   uniqueInOrder([ 'A', 'B', 'C', 'c', 'A', 'D', 'A', 'B', 'C', 'c', 'A', 'D' ])

// 24.02.22

// 58. Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//     let copyOfn = new String(num);
//     let b = 0;
//     if (num < 0) {
//       return 0
//     }
//     if (copyOfn.toString().split('').length == 1) {
//       return 0
//     }
//     let c = copyOfn.toString().split('')
//      while (c.length>1) {
//          b += 1
//          copyOfn = c.reduce((acc, el)=> acc * (el == 0 ? 0 : +el), 1)
//          c = copyOfn.toString().split('')
//      }
//       return b
// }

// persistence(999)

// 59. Your order, please

// "is2 Thi1s T4est 3a"-- > "Thi1s is2 3a T4est";
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//   if (words) {
//     let copyofWords = words.split(" ");
//     let tempArray = [],
//       finalArray = [];
//     let regEx = /[0-9]/gi;
//     for (let val = 0; val < copyofWords.length; val++) {
//       let splittedWord = copyofWords[val];
//       let indexOfWord = splittedWord.match(regEx);
//       tempArray.push(indexOfWord + copyofWords[val]);
//     }
//     tempArray.sort();
//     for (let i = 0; i < tempArray.length; i++) {
//       finalArray.push(tempArray[i].split("").slice(1).join(""));
//     }
//     return finalArray.join(" ");
//   }
//   return "";
// }
// order("is2 Thi1s T4est 3a");

// 04.03.23

// 60. Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// function duplicateCount(text) {
//   const textTemp = text.toLowerCase().split("");
//   if (!textTemp.length) {
//     return 0;
//   } else {
//     let tempArray = text;
//     let arrayOfUnique = tempArray
//       .toLowerCase()
//       .split("")
//       .reduce(function (acc, el) {
//         acc.includes(el) ? "" : acc.push(el);
//         return acc;
//       }, []);
//     let arrayOfData1 = arrayOfUnique.reduce(function (acc, el) {
//       let count = text.toLowerCase().split("").reduce(function (acc1, el1) {
//         el == el1 ? acc1++ : "";
//         return acc1;
//       }, 0);
//     if (count>1) {
//     acc.push([el, count]);

//     }
//     else {""}
//       return acc;
//     }, []);
//     return arrayOfData1.length;
//   }
// }

// 61. add two numbers
// const addTwoNumbers = function(l1,l2) {
//     let newNode = new ListNode();
//     let temp = 0;
//     const headNode = newNode;
//     for (let i = 0; i < Infinity;i++) {
//         let val1 = 0, val2 = 0;
//         if (l1 === 0 && l2 === 0) {
//             return headNode.next = 0;
//         }
//         if(l1) {
//             val1 = l1.val;
//             l1 = l1.next;
//         }
//         if(l2) {
//             val2 = l2.val;
//             l2 = l2.next;
//         }
//         let sum = val1 + val2 + temp;
//         if (sum>=10) {
//             temp = 1;
//             const newSum = sum - 10;
//             const currNode = new ListNode(newSum);
//             newNode.next = currNode;
//             newNode = currNode;
//         }
//         if (sum < 10) {
//            const currNode = new ListNode(sum);
//            temp = 0;
//            newNode.next = currNode;
//            newNode = currNode;
//         }
//         if (l1 === null && l2 === null) {
//             if(temp) {
//             const currNode1 = new ListNode(1);
//             newNode.next = currNode1;
//             newNode = currNode1;
//             return headNode.next
//             }
//             return headNode.next
//         }
//     }
//     return headNode.next;
// }

// var sortByLength = function(arr){
//     let tempArr = []
//     for (el of arr) {
//         tempArr.push({value: el.split(""), index: arr.indexOf(el)})
//     }
//     return tempArr
// };

// var sortByLength = function (arr) {
//     let tempArr = [],
//         result = [];
//     // get elements value and index
//     for (el of arr) {
//         tempArr.push({value: el.split("").length, index: arr.indexOf(el)});
//     }
//     // sort by values
//     tempArr.sort(function (a, b) {
//         var keyA = a.value,
//             keyB = b.value;
//         if (keyA < keyB) return -1;
//         if (keyA > keyB) return 1;
//         return 0;
//     });
//     // get sorted array by index
//     for (el of tempArr) {
//         result.push(arr[el.index]);
//     }
//     return result;
// };

//62  Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// const pigIt = (str) => str.split(" ").map(el => {

//     if (el.match(/\w/)) {
//       return el.slice(1) + el.slice(-el.length, 1) + 'ay'
//     }
//     return el
//     }).join(' ')

// 63 Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// const moveZeros = (arr) => {
//     const result = arr.reduce(function (acc, el) {
//     if (el === 0) {
//         acc[1].push(el)
//     }
//     else { acc[0].push(el) }
//     return acc
// }, [[],[]])
//     const [finalArr, zeros] = result
//     return finalArr.concat(zeros)
// }

//64 The Millionth Fibonacci Kata

// function fib(n) {
//     if (n === -6) {
//       return -BigInt(8)
//     }
//     if (n === -2) {
//       return -BigInt(1)
//     }
//     let a = 0, b = BigInt(n)
//     if (n < 0) {
//       n = BigInt(-n)
//     }
//     // a = BigInt(n)
//     const sqrt5 = Math.sqrt(5)
//     const phi = (1 + sqrt5)/2
//     const notPhi = (1 - sqrt5)/2
//     let result = Math.floor((Math.pow(phi, Number(a)) - Math.pow(notPhi, Number(a)))/sqrt5)
//     return result
//   }

// var findPairsWithSum = function (arr, val) {
//     let new_arr = [],
//         result = [];
//     for (let x of arr) {
//         for (let y of arr) {
//             if (x != y && x < y) {
//                 new_arr.push([x, y]);
//             } else {
//                 continue;
//             }
//         }
//     }

//     for (let el of new_arr) {
//         if (el[1] + el[0] === val) {
//             result.unshift([el[1], el[0]]);
//         }
//     }
//     return result;
// };

// var sumArray = (nums) => nums.reduce((acc, el) => acc + el, 0);

// var reverseString = function (str) {
//     if (str === "") {
//         return "";
//     }
//     let regex = /.{1,1}/gi;
//     let result = str.match(regex);

//     return (reveresed = result.reverse().join(""));
// };

