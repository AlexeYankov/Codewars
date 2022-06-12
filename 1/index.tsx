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
// //   let rp = null
// //   const rt = nbPetals > 0 ? (nbPetals < 6 ? phrases[(nbPetals) -1]: phrases[(nbPetals%6 -1)]) : false
// //   return console.log(rt)
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


15. Count of positives / sum of negatives
Instructions
Given an array of integers.

    Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

    If the input is an empty array or is null, return an empty array.

    Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Solition

function countPositivesSumNegatives(input) {
    let a = []
    let b = 0
    for (let elem of input) {
        if (typeof elem == 'object') {
            elem > 0 ? a.push(elem) : b += elem
        } else {
            elem > 0 ? a.push(elem) : b += elem
        }}
    const a1 = a.length
    return [a1, b];
}
let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
countPositivesSumNegatives(testData);

