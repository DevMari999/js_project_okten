
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

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

const arr7 = [1, 2, 3 ,4 , 5, 6, 7];
const maxNum = (array) => {
    let maxNum = array[0];
    for (const item of array) {
        if (item > maxNum) {
            maxNum = item;
        }
    }
    return maxNum;
}

let maxNum1 = maxNum(arr7);
console.log(maxNum1);

// - створити функцію яка повертає найменьше число з масиву

const numbers = (...arguments) => {
    let min = arguments[0];

    for (const item of arguments) {
        if (item < min) {
            min = item;
        }

    }

    return min;
};
numbers(2, 4,5);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const arrNum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = array => {
    let sumOf = 0;
    for (const item of array) {
        sumOf += item;
    }
    return array;
};

console.log(sum(arrNum2));

// - Дано натуральное число n. Выведите все числа от 1 до n.

const int = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
int(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

const nums = (a, b) => {
    if ( a < b) {
        for (let i = a; i <= b; i++)
            console.log(i);
        } else if (a > b) {
            for (let i = a; i >= b; i--)
                console.log(i);
            }
    }

nums(5, 1);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arr = [9, 8, 0, 4 ];
const one = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1]) {
            let temp = array[num];
            array[num] = array[num + 1];
            array[num + 1] = temp;
         }
    }
    return array;
}
console.log(one(arr, 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arr2 = [3, 5, 0, 0, 6, 7, 9];
function foo(array) {
    const newArray  =[];
    let counter = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] ? newArray[index++] = array[i] : counter++;
    }
    const num = newArray.length;
    for (let i = 0; i < num + counter; i++) {
        newArray[i] = 0;
    }
    return newArray;
}
console.log(foo(arr2));