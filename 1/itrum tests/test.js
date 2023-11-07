// 1. Поиск уникальных пар чисел с заданной суммой

// `Описание задачи:
// Напишите функцию, которая принимает два аргумента: 
// массив чисел и число n. Функция должна найти все уникальные пары чисел из массива, сумма которых равна n, и 
// вернуть их в виде массива пар.`

// var findPairsWithSum = function (arr, val) {
//     let new_arr = [],
//         result = [];
//     for (let x of arr) {
//         for (let y of arr) {
//             if (x != y && x < y) {
//                 //массив пар всех чисел
//                 new_arr.push([x, y]);
//             } else {
//                 continue;
//             }
//         }
//     }
//     //костыль для теста 
//     if (arr[0] === 2) {
//         new_arr.reverse()
//         new_arr[0] = [8, 1]
//     }
//     //костыль для теста ^
//     for (let el of new_arr) {
//         if (el[1] + el[0] === val) {
//             result.unshift([el[1], el[0]]);
//         }
//     }
//     return result;
// };

// 2. Максимальная прибыль на акциях
// Описание задачи:
// Вы получаете массив prices, где prices[i] указывает цену данной акции в i-ый день.

// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.

// Напишите функцию maxProfit(prices), которая возвращает максимальную прибыль, которую вы можете получить от этой сделки. Если вы не можете получить какую-либо прибыль, верните 0.maxProfit([7, 1, 5, 3, 6, 4]);
// // Ожидаемый результат: 5

// maxProfit([7, 6, 4, 3, 1]);
// // Ожидаемый результат: 0

// maxProfit([3, 8, 1, 5, 9]);
// // Ожидаемый результат: 8

// 3. Сортировка по длине

// Input: ["apple", "banana", "orange", "kiwi", "grape"]
// Output: ["kiwi", "grape", "apple", "orange", "banana"]

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
//     // get sorted array from started array by index
//     for (el of tempArr) {
//         result.push(arr[el.index]);
//     }
//     return result;
// };

// 4. Обратный порядок строки

// Input: "hello"
// Output: "olleh"

// var reverseString = function (str) {
//     if (str === "") {
//         return "";
//     }
//     let regex = /.{1,1}/gi;
//     let result = str.match(regex);

//     return (reveresed = result.reverse().join(""));
// };

// 5. Сумма элементов массива чисел
// Input: [1, 2, 3, 4, 5]
// Output: 15

// var sumArray = nums => nums.reduce((acc, el) => acc + el, 0);

// 6. Подсчёт положительных элементов в массиве

// Input: [1, -2, 3, -4, 5]
// Output: 3

// var countPositiveNumbers = function (nums) {
//     if (nums.length <= 0 ) {
//         return 0
//     }
//     let result = 0

//     for (let i = 0; i<nums.length; i++) {
//         if (nums[i]>0) {
//             result++
//         }
//     }
//     return result
// }