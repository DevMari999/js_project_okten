// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area1 (a, b) {
    let result = a*b;
    console.log(result);
}
 area1(96, 100);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function area2 (r) {
    let result = Math.PI * Math.pow(r, 2);
    console.log(result);
}
area2(88);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const area3 = (r, h) => Math.PI * Math.pow(r, 2) * h;
console.log(area3(77, 100));


// - створити функцію яка приймає масив та виводить кожен його елемент

function arr (arr) {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
 arr (['abc', 75, 'hello', '96', true]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


function text (text1) {
    document.write(`<p>${text1}</p>`);
}
text('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ul1 (text) {
    document.write(`
                    <ul>
                    <li>${text}</li>
                    <li>${text}</li>
                    <li>${text}</li>
                    </ul>
                  `)
}
ul1('hi there');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ul2 (text, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ul2('hi there', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const list = function  (arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
      document.write(`</ul`)
}
list ([1, '1', true, 'string', 99, ]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const arrobj = function (arr) {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}--${arrElement.age}--${arrElement.name}</div>`)
    }
}

arrobj ( [
    {id: 1, name: 'john', age:31},
    {id: 2, name: 'jane', age:96},
    {id: 3, name: 'sam', age:99},
    {id: 4, name: 'nancy', age:89},
    {id: 5, name: 'lana', age:15}

]);

// - створити функцію яка повертає найменьше число з масиву

const arrOfNum1 = [1, 57, 3, 99, 78, 7];

function small (arr) {
    let min = arr[0];
    for (const item of arr) {
        if (item < min) {
    min = item;
        }

    }
    return min;
}

console.log(small(arrOfNum1));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function add (arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

console.log(add([1, 57, 3, 99, 78, 7]));

