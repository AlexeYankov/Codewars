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
function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
    const inputValue = +inputString.slice(0,1)
    return inputValue
}
//
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
//
5. I love you, a little , a lot, passionately ... not at all
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

    Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


Solution

function howMuchILoveYou(nbPetals) {
    // your code
    const phrases = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ]

//   let rp = null
//   const rt = nbPetals > 0 ? (nbPetals < 6 ? phrases[(nbPetals) -1]: phrases[(nbPetals%6 -1)]) : false
//   return console.log(rt)
    return
}

howMuchILoveYou(3)

