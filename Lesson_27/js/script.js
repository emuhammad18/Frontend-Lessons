//! Objects
// const user = {
//     first_name: "Ibrohim",
//     surname: "Turaboyev",
//     birthYear: 2002,
//     isMaried: false,
//     family: {
//         dad: "Abdumavlon",
//         mom: "Mavjuda",
//         brother: 3,
//         sister: 1,
//     },
//     age: function(currentYear = 2022){
//         const age = currentYear - this.birthYear;
//         return age;
//     },
// };

// user.first_name ="Muhammad";

// console.log(user);

// console.log(user.age(2023));
// console.log(user.family.sister);
// console.log(user['first_name']);

//! Amaliyot
// const user ={
//     firstname: null,
//     surname: null,
//     age: function(birthYear){
//         const now = 2022;
//         const age = now - birthYear;
//         return age;
//     },
//     textTemplate: function(year) {
//         const template =`Assalomu aleykum ${this.firstname} ${this.surname}! Sizning yoshingiz ${this.age(year)}da`;
//         return template;
//     },
// };


// user.firstname = prompt ("What is your name?");
// user.surname = prompt("What is your surname?");
// const birth = +prompt("What is your birthyear?");
// alert(user.textTemplate(birth));