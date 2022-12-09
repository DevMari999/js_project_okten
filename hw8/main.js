// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let usersArray = [];
let user1 = new User ( 1, 'Jane', 'K', 'ajajaja@mail.com', '+5849765339');
let user2 = new User ( 2, 'John', 'L', 'ajafdf@mail.com', '+58494689');
let user3 = new User ( 3, 'Anna', 'K', 'ajgfsda@mail.com', '+58486565339');
let user4 = new User ( 4, 'Mary', 'J', 'ajsfca@mail.com', '+58465439');
let user5 = new User ( 5, 'Dan', 'S', 'ajfddja@mail.com', '+584234539');
let user6 = new User ( 6, 'Bob', 'I', 'ajafsxa@mail.com', '+584986565339');
let user7 = new User ( 7, 'Rob', 'E', 'ajsdja@mail.com', '+5849653459');
let user8 = new User ( 8, 'Steve', 'K', 'afscja@mail.com', '+5844565339');
let user9 = new User ( 9, 'Lucy', 'Y', 'avyujaja@mail.com', '+543355339');
let user10 = new User ( 10, 'Tim', 'P', 'ajgffja@mail.com', '+5844665339');

usersArray.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(usersArray);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filterArray = usersArray.filter((item) => item.id % 2 === 0);
console.log(filterArray);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const sortArray = usersArray.sort((a, b) => a.id-b.id);
console.log(sortArray);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class  Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientsArray = [];

let client1 = new Client ( 1, 'Jane', 'K', 'ajajaja@mail.com', '+5849765339', ['table', 'tv', 'book']);
let client2 = new Client ( 2, 'John', 'L', 'ajafdf@mail.com', '+58494689', ['table', 'book']);
let client3 = new Client ( 3, 'Anna', 'K', 'ajgfsda@mail.com', '+58486565339', ['table', 'tv', 'book']);
let client4 = new Client ( 4, 'Mary', 'J', 'ajsfca@mail.com', '+58465439', ['table', 'tv', 'book', 'ipad']);
let client5 = new Client ( 5, 'Dan', 'S', 'ajfddja@mail.com', '+584234539', ['table', 'tv', 'book']);
let client6 = new Client ( 6, 'Bob', 'I', 'ajafsxa@mail.com', '+584986565339', ['table', 'tv', 'book']);
let client7 = new Client ( 7, 'Rob', 'E', 'ajsdja@mail.com', '+5849653459', ['table', 'tv', 'book', 'lamp', 'pen']);
let client8 = new Client ( 8, 'Steve', 'K', 'afscja@mail.com', '+5844565339', ['table', 'tv', 'book']);
let client9 = new Client ( 9, 'Lucy', 'Y', 'avyujaja@mail.com', '+543355339', ['table',]);
let client10 = new Client ( 10, 'Tim', 'P', 'ajgffja@mail.com', '+5844665339', ['table', 'tv', 'book']);

// створити пустий масив, наповнити його 10 об'єктами Client

clientsArray.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clientsArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortClients = clientsArray.sort((a,b) => a.order.length - b.order.length);
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, producer, year, maxSpeed, engine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    // this.info = function () {
    //     for (const carkey of this) {
    //         if (typeof this[carkey] !== 'function'){
    //             console.log(`${carkey} -- ${this[carkey]}`);
    //         }
    //     }
    // }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = maxSpeed + newSpeed;
        console.log(newSpeed);
    }

    this.changeYear = function (newValue) {
        this.year = newValue
        console.log(newValue);
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Cars ('ford mustang', 'Ford', 1969, 118, 390 );
console.log(car);
console.log(car.drive());
console.log(car.increaseMaxSpeed(200));
console.log(car.changeYear(1972));
// console.log(car.info());
console.log(car.addDriver({name: 'Dan'}));
console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class Carss {
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive () {
//          console.log((`їдемо зі швидкістю ${this.maxSpeed}`));
//      }

//      info ()
//     {
//     console.log(Cars);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//         console.log(newSpeed);
//     }
//         changeYear(newValue) {
//         this.year = newValue
//         console.log(newValue);
//     }
// }
//
// let car = new Carss ('ford mustang', 'Ford', 1969, 118, 390 );
// console.log(car);
// console.log(car.drive())
// console.log(car.increaseMaxSpeed(200));
// console.log(car.changeYear(1972));

//  -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let cinderella1 = new Cinderella('Cinderella', 18, 36);
let cinderella2 = new Cinderella('Ella', 34, 41);
let cinderella3 = new Cinderella('Bella', 67, 37);
let cinderella4 = new Cinderella('Pinderella', 23, 38);
let cinderella5 = new Cinderella('Cilla', 47, 39);
let cinderella6 = new Cinderella('Cingerella', 20, 41);
let cinderella7 = new Cinderella('Cintia', 78, 45);
let cinderella8 = new Cinderella('Isabella', 77, 46);
let cinderella9 = new Cinderella('linderella', 89, 39);
let cinderella10= new Cinderella('Cinella', 78, 43);

const newPrincess = [];
newPrincess.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5,
    cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
console.log(newPrincess);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let newPrince = new Prince('Prince', 19, 36 );
console.log(newPrince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const findCinderella = function (array) {
    for (const item of array) {
        if (item.name === 'Cinderella' && item.age === 18 && item.shoeSize === 36) {
            console.log(item);
        }
    }
}
console.log(findCinderella(newPrincess));

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findCinderella2 = newPrincess.find((item) => {
    return item.name === 'Cinderella' && item.age === 18 && item.shoeSize === 36;
})

console.log(findCinderella2);