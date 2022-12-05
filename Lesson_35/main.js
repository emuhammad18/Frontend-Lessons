//! Math method
// const randomNum = Math.random() * 10;
// console.log(randomNum);

// const butunSon_1 = Math.floor(randomNum) 
// console.log(butunSon_1);

// const butunSon_2 = Math.ceil(randomNum) 
// console.log(butunSon_2);

// const butunSon_3 = Math.round(randomNum);
// console.log(butunSon_3);

//* Amaliyot
// const arr = ["Ibrohim", "Abdulaziz", "Muhammad", "Maqsud", "Abror",];
// const randomUser =  Math.floor(Math.random() * arr.length);
// console.log(randomUser);
// console.log(arr[randomUser]);

//? Math trunk
// console.log(Math.trunc(3.8));

//? Math pow, sqrt, abs
// console.log(Math.pow(3 , 2));  // Возведение в степень
// console.log(Math.sqrt(64));    //возвращает квадратный корень
// console.log(Math.abs(-4.3));    //возвращает абсолютное (положительное) значение

//! Loops

// for(let i = 1; i < 8; i++){
//     console.log("Hello " + i);
// }

// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");
// console.log("Hello 4");
// console.log("Hello 5");
// console.log("Hello 6");
// console.log("Hello 7");

//* Amaliyot

// const arr = ["Ibrohim", "Abdulaziz", "Muhammad", "Maqsud", "Abror",];
// const newArr = [];

// for (let i = 0; i < arr.length; i++){
//     const user = "Assalomu aleykum " + arr[i];
//     newArr.push(user);
// }
// console.log(newArr);

//* Amaliyot 2

// const arr = ["Ibrohim", "Abdulaziz", "Muhammad", "Maqsud", "Abror",];
// const newArr = [];

// for (let i = arr.length -1; i >= 0; i--){
//     const user = "Assalomu aleykum " + arr[i];
//     newArr.push(user);
// }
// console.log(newArr);

//! for in 
const arr = ["Ibrohim", "Abdulaziz", "Muhammad", "Maqsud", "Abror",];
const obj = { name: "Ibrohim", surname: "Turaboyev", age: 20};

for(keys in obj){
    console.log(`${keys}: ${obj[keys]}`);
}

//! for of  Bu faqat array larda ishlaydi objectlarda ishlamidi
// const arr = ["Ibrohim", "Abdulaziz", "Muhammad", "Maqsud", "Abror",];
// const obj = { name: "Ibrohim", surname: "Turaboyev", age: 20};

// let allUsers = "";

// for(user of arr){
//     allUsers += " " + user;
// }

// console.log(allUsers);

//! while loop
// let user = " ";
// let i = 0;

// while (i < 10){
//     user += i;
//     i++;
// }

// console.log(user);

// let random = Math.floor(Math.random() * 11);

// while (random !== 10){
//     console.log(random);
//     random = Math.floor(Math.random() * 11);
// }

// console.log(random);

//! do while
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while (i < 10);


const d = new Date();
let day = d.getDay() 

console.log(day);