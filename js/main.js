console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
let myNum = 10;

// ім'я змінної: myStr, значення: 'some string'
let myStr = 'some string';

// ім'я змінної: myBool, значення: true
let myBool = true;

// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5];

// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'
let myObj = { first: 'First Name', last: 'Last Name' };

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2
let decimal2 = myNum.toFixed(2);
console.log('decimal2:', decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
let i = 0;
console.log('Initial i:', i);
console.log('Postfix increment:', i++);
console.log('After postfix increment i:', i);
console.log('Prefix increment:', ++i);
console.log('After prefix increment i:', i);
console.log('Postfix decrement:', i--);
console.log('After postfix decrement i:', i);
console.log('Prefix decrement:', --i);
console.log('After prefix decrement i:', i);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;
console.log('Initial myTest:', myTest);

myTest += myNum;
console.log('myTest += myNum:', myTest);

myTest -= myNum;
console.log('myTest -= myNum:', myTest);

myTest *= 2;
console.log('myTest *= 2:', myTest);

myTest /= 4;
console.log('myTest /= 4:', myTest);

myTest %= 3;
console.log('myTest %= 3:', myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow
let myPi = Math.PI;
console.log('myPi:', myPi);

let myRound = Math.round(89.279);
console.log('myRound:', myRound);

let myRandom = Math.random() * 10;
console.log('myRandom:', myRandom);

let myPow = Math.pow(3, 5);
console.log('myPow:', myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj
let strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 'Мама мыла раму, рама мыла маму'.length
};

console.log('strObj:', strObj);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama
let isRamaPos = strObj.str.indexOf('рама');
console.log('isRamaPos:', isRamaPos);

let isRama = isRamaPos !== -1;
console.log('isRama:', isRama);
/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
let strReplace = strObj.str.replace('мыла раму', 'моет раму').replace('рама мыла', 'Рама держит');
console.log('strReplace:', strReplace);
/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
let someStr = 'some STRING';
let upperStr = someStr.toUpperCase();
let lowerStr = someStr.toLowerCase();

console.log('upperStr:', upperStr);
console.log('lowerStr:', lowerStr);