// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// TASK 1

let x = 96;
if (x !== 0) {
    console.log(true)
}
else {
    console.log (false)
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// TASK 2

let time = 7;
if (time => 15) {
    console.log('first quater')
}
else if (time =>30) {
    console.log('second quarter')
}
else if (time => 45) {
    console.log('third quarter')
}
else if (time => 59) {
    console.log("fourth quarter")
}
else {
    console.log('no match')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// TASK 3

let day = 14;
if (day => 10) {
    console.log('first')
}
else if (day => 20) {
    console.log('second')
}
else if (day => 31) {
    console.log('third')
}
else {
    console.log('no match');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// TASK 4

switch ('Sunday') {
    case 'Monday':
        console.log('Study');
        break;
    case 'Tuesday':
        console.log('Study');
        break;
    case 'Wednesday':
        console.log('Study');
        break;
    case 'Thursday':
        console.log('Study');
        break;
    case 'Friday':
        console.log('Study');
        break;
    case 'Saturday':
        console.log('Study more');
        break;
    case 'Sunday':
        console.log('Watch Rick and Morty');
        break;
    default:
        console.log('no match')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// TASK 5

let number1 = prompt('enter a number');
let number2 = prompt('enter a number')
if (number1 > number2) {
    console.log(number1)
}
else if (number1 < number2) {
    console.log(number2)
}
else if (number1 === number2){
    console.log(number1, 'equal to', number2 )
}
else {
    console.log('no match')
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// TASK 6

let y = false || 'default';
console.log(y);