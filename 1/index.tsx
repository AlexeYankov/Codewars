// 24.05.22
1.
Instructions
Code as fast as you can! You need to double the integer and return it.
    function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i;
}
    Solution
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i*2;
}

2.
Instructions
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

    Examples
    makeNegative(1);    // return -1
    makeNegative(-5);   // return -5
    makeNegative(0);    // return 0
    makeNegative(0.12); // return -0.12

function makeNegative(num) {
    // Code?
}

    Solution
function makeNegative(num) {
    return num < 0 ? num : -num;
    // Code?
}

3.
Instructions
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

    function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
}

Solution
function getAge(inputString){
// return the girl's correct age as an integer. Happy coding :)
    const inputValue = inputString.slice(0,1)
    const yourAge = (inputValue) => {
        if (inputValue<10) {
            inputValue
        }
        else ('You are too old')
    }
    const someText = () => ' years old'
    const sumOfText = yourAge + someText
    console.log(sumOfText)
}

