// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const min = (...arguments) => {
    let min = arguments[0];
    for (const item of arguments) {
        if (item < min){
            min = item;
        }
    }
    return min;
}
let min1 = (min(1, 2, 3, 4, 5));
console.log(min1);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)


const max = (...arguments) => {
    let max = arguments[0];
    for (const item of arguments) {
        if (item > max){
            max = item;
        }
    }
    return max;
}
let max1 = (max(1, 2, 3, 4, 5));
console.log(max1);

// - створити функцію яка повертає найбільше число з масиву

const arr = [1, 2, 3 ,4 , 5, 6, 7];
const maxNum = (array) => {
    let maxNum = array[0];
    for (const item of array) {
        if (item > maxNum) {
            maxNum = item;
        }
    }
    return maxNum;
}

let maxNum1 = maxNum(arr);
console.log(maxNum1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const arrNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function average(array) {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum/array.length;
}

console.log(average(arrNum2));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function numbers(...arguments) {
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if (item < min) {
            min = item;
        }
        if (item > max) {
            max = item;
            }
        }
        console.log(max);
        return min;

}

let numbers1 = numbers(1, 2, 3, 4, 5, 6, 7);
console.log(numbers1);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arr2 = [];
function random (a) {
    for (let i = 0; i < a; i++) {
        arr2 [i] = Math.round(Math.random()*100);
    }
    console.log(arr2);
}
random(10);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// ???

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const arr3 = [1, 2, 3, 4, 5, 6, 7];
function reverse(array) {
    let arrNew = [];
    for (let i = array.length - 1, j = 0;  i >= 0; i--) {
        arrNew [j++] = array[i];
    }
    return arrNew;
}
console.log(reverse(arr3));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

const some = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
let some1 = some('developer', 100);
console.log(some1);

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

const arr5 = [1, 3, 6, 9, 9];
const arr6 = [1, 3, 6, 9];
function add(array1, array2) {
    let res = [];
    let xxx = array1.length >= array2.length ? array1 : array2;
    for (let i = 0; i < xxx.length; i++) {
        res[i] = (array1[i] || 0) + (array2[i] || 0)
    }
    return res;
}
console.log(add(arr5, arr6));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// const obj = [
//     { name: 'Dima', age:'19'},
//     { model:'Camry' }
// ]
// function keys (array) {
//    let newArr = [];
//     for (let i = 0, j = 0;  i < array.length; i++) {
//         for (const key in array[i]) {
//             newArr [j++] = key;
//         }
//     }
//     return newArr;
// }
//
// console.log(keys(obj));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//

const obj = [
    { name: 'Dima', age:'19'},
    { model:'Camry' }
]
function keys (array) {
    let newArr = [];
    for (let i = 0, j = 0;  i < array.length; i++) {
        for (const key in array[i]) {
            newArr [j++] = array[i] [key];
        }
    }
    return newArr;
}
console.log(keys(obj));