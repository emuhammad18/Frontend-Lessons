// const ism = "Ibrohim";
// const familiya = "Turaboyev";

//! Functions
//? Function decloration
// function fullname() {
//     console.log("Ibrohim Turaboyev");
// }

// fullname()

//? Function expresson
// const fullname = function(){
//     console.log(ism, familiya);
// }
// fullname()

//? Arrow function
// const lalaku = () => {
//     console.log("Lalakudan salom! Baaaa");
// }

// const lalaku_2 = () => console.log("Lalaku 2dan salom!");

// lalaku();
// lalaku_2();

//! Function parameters
//? Example 1
// function nafaqa(age, now){
//     const nafaqaAge = 65;
//     const answer = nafaqaAge - age + now;
//     console.log(answer)
// }

// nafaqa(17, 2022);
// nafaqa(20, 2022);

//! Example 2
// function nafaqa(age, now = 2022){
//     const nafaqaAge = 65;
//     const answer = (nafaqaAge - age) + now;
//     console.log(answer)
// }

// nafaqa(17);
// nafaqa(25);

//! Function return
// function info(){
//     return "Hello world!"
// }
// console.log(info());


// function nafaqa(age, now = 2022){
//     const nafaqaAge = 65;
//     const answer = (nafaqaAge - age) + now;
//     return answer;
// }

// const ism = prompt("Ismingizni kiriting:");
// const yosh = +prompt("Yoshingizni kiriting:");

// alert("Sizning nafaqaga chiqish yilingiz " + nafaqa(yosh))

// alert(`${ism}ning nafaqaga chiqish yili ${nafaqa(yosh)}`)