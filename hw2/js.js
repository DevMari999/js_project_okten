// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль


let arr = [];

arr[0] = 'one';
arr[1] = 96;
arr[2] = 'string';
arr[3] = [1, 2, 3];
arr[4] = 'name';
arr[5] = true;
arr[6] = 100;
arr[7] = 'hundred';
arr[8] = false;
arr[9] = 777;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.


let book1 = {
    title: 'Lifespan',
    pageCount: 310,
    genre: 'non-fiction'
};

console.log(book1);

let book2 = {
    title: 'The Little Prince',
    pageCount: 96,
    genre: 'Novella'
};

console.log(book2);

let book3 = {
    title: '1984',
    pageCount: 328,
    genre: 'Science fiction'
};

console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age


let book01 = {
    title: 'Lifespan',
    pageCount: 310,
    genre: 'non-fiction',
    author: [
        {
            name: 'David Sinclair',
            age: 53
        }
    ]
};

console.log(book01);

let book02 = {
    title: 'The Little Prince',
    pageCount: 96,
    genre: 'Novella',
    author: [
        {
        name:'Antoine de Saint-Exupery',
        age: 44
        }
   ]
};

console.log(book02);

let book03 = {
    title: '1984',
    pageCount: 328,
    genre: 'Science fiction',
    author: [
        {
        name: 'George Orwell',
        age: 46
        }
    ]
};

console.log(book03);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let userdata = [
    { name: 'Jane', username: 'Jane01', password: 101 },
    { name: 'Mary', username: 'Mary02', password: 202 },
    { name: 'Jake', username: 'Jake03', password: 303 },
    { name: 'Bob', username: 'Bob04', password: 404 },
    { name: 'Ann', username: 'Ann05', password: 505 },
    { name: 'Eva', username: 'Eva06', password: 606 },
    { name: 'John', username: 'John07', password: 707 },
    { name: 'Bill', username: 'Bill08', password: 808 },
    { name: 'Joe', username: 'Joe09',  password: 909 },
    { name: 'Lucy', username: 'Lucy10', password: 1010 }
]

console.log(userdata[0].password);
console.log(userdata[1].password);
console.log(userdata[2].password);
console.log(userdata[3].password);
console.log(userdata[4].password);
console.log(userdata[5].password);
console.log(userdata[6].password);
console.log(userdata[7].password);
console.log(userdata[8].password);
console.log(userdata[9].password);
