// const dataEl = document.querySelector("#data");

// let week = [
//   "Dushanba",
//   "Seshanba",
//   "Chorshanba",
//   "Payshanba",
//   "Juma",
//   "Shanba",
//   "Yakshanba",
// ];

// let months = [
//   "Yanvar",
//   "Fevral",
//   "Mart",
//   "Aprel",
//   "May",
//   "Iyun",
//   "Iyul",
//   "Avgust",
//   "Sentabr",
//   "Oktabr",
//   "Noyabr",
//   "Dekabr",
// ];

// console.log(dateObj.getFullYear());
// console.log(dateObj.getDate());
// console.log(dateObj.getHours());
// console.log(dateObj.getMinutes());
// console.log(months[dateObj.getMonth()]);
// console.log(dateObj.getMilliseconds());
// console.log(week[5]);
// console.log(week[date.getDay() - 1])

// const timer = setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// clearTimeout(timer);

// const interval = setInterval(() => {
//   console.log("Bye");
// }, 1000);

// document.querySelector("#clicker").addEventListener("click", () => {
//   clearInterval(interval);
// });

// setInterval(() => {
//   const dateObj = new Date();
//   let template = `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
//   dataEl.innerHTML = template;
// }, 1000);

// const targetEl = document.querySelector("#target");
// const clickerEl = document.querySelector("#clicker");
// const clicker2El = document.querySelector("#clicker2");
// const clicker3El = document.querySelector("#clicker3");

// clickerEl.addEventListener("click", () => {
//   targetEl.classList.add("red");
// });

// clicker2El.addEventListener("click", () => {
//     targetEl.classList.remove("red")
// });

// clicker3El.addEventListener("click", () => {
//     targetEl.classList.toggle("red")
// });

//? scopes
//* Global scope / Local & Function scope/ Block scope

// let user = "Ibrohim"; //global

// function sayHello() {
//   let user = "Ismoil"; //local scope
//   console.log(user);
// }

// sayHello();

// {
//   let user = "Hello";
//   console.log(user);
// }

// if (true) {
//     let user = "Global"
//     console.log(user);
// }

// console.log(user);

// var user = "Hello"

// {
//     var user = "Ibrohim"
// }

// function setter() {
//     var user = "Ismoil"
// }

// setter()
// console.log(user );