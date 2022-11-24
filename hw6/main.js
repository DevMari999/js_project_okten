// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
console.log(str1.length);

let str2 = 'lorem ipsum';
console.log(str2.length);

let str3 = 'javascript is cool';
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str4 = 'hello world';
console.log(str4.toUpperCase());

let str5 = 'lorem ipsum';
console.log(str5.toUpperCase());

let str6 = 'javascript is cool';
console.log(str6.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str7 = 'HELLO WORLD';
console.log(str7.toLowerCase());

let str8 = 'LOREM IPSUM';
console.log(str8.toLowerCase());

let str9 = 'JAVASCRIPT IS COOL';
console.log(str9.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str10 = ' dirty string   ';
console.log(str10.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let arrStr = str.split(' ');
console.log(arrStr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
let strNum = arrNum.map (num => num.toString());
console.log(strNum);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
const sortNums = (direction, arr) => {
    if (direction === 'ascending' ) {
        arr.sort((a, b) => a -b);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortNums('ascending', nums));;
console.log(sortNums('descending', nums));;

// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray.sort((a, b) =>
    b.monthDuration - a.monthDuration));

let filter = coursesAndDurationArray.filter ((duration) => duration.monthDuration > 5);
console.log(filter);

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

const cardType = [
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'diamonds', color: 'red'},
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'clubs', color: 'black'}
];

const cardValue = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

const deck = [];

for (const types of cardType) {
    for (const values of cardValue) {
        const card = {
            cardSuit: types.cardSuit,
            value: values,
            color: types.color
        }
        deck.push(card);
    }
}
console.log(deck);

// let filter1 = deck.filter (value => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(filter1);
//
// let filter2 = deck.filter (value => value.value === 6);
// console.log(filter2);
//
// let filter3 = deck.filter (value => value.color === 'red');
// console.log(filter3);
//
// let filter4 = deck.filter (value => value.cardSuit === 'diamonds');
// console.log(filter4);
//
//  let filter5 = deck.filter (value => value.cardSuit === 'clubs' && value.value >= '9');
//  console.log(filter5);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт


let reduce = deck.reduce((endresult, curentresult) => {
    if (curentresult.cardSuit === 'spades') {
        endresult.spades.push(curentresult);
    } else if (curentresult.cardSuit === 'diamonds'){
        endresult.diamonds.push(curentresult);
    } else if (curentresult.cardSuit === 'hearts') {
        endresult.hearts.push(curentresult);
    } else if(curentresult.cardSuit === 'clubs') {
        endresult.clubs.push(curentresult);
    }
    return endresult;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);
