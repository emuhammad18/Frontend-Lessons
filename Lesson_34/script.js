//! use strict
// "use strict";

// let prava = false;
// let test = true;

// if (test) prava = true;
// if (prava) console.log("Siz mashina hayday olasiz");

// let interface = true    //* interface bu kelajacda Js da key soz bolishi mumkin
// let if = 30;   

//? Statement vs Expression

// const x = 50;   //* statement

// console.log(`My number is ${x + 5 === 55 ? "Ellikbesh" : "Notog'ri"}`); //*expression

//? Function calling other functions

function output(apple, orange){
    console.log(`I have ${apple} apples, ${orange} oranges`);
}

output(4,6)

//* Amaliyot 
// function powNumber(a, b=2){
//     return a**b;
// };

// function logger(number, stage){
//     const result = powNumber(number, stage);
//     console.log(result);
// };

// logger(5,6)