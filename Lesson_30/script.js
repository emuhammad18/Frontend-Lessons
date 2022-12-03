//! Masala 1

// function age (){
// const yourAge = +prompt("Yoshingizni kiriting:")

//     if(yourAge >= 18){
//        return alert("Xush kelibsiz!")
//     } else{
//         return alert("Siz kirishingiz mumkin emas!")
//     }
// }

// age()

//! Masala 2

// function total(number1, number2) {
//     const overall = number1 ** number2;
//     return (overall)
// }

// console.log(total(2, 3));

// ! Masala 3
// const number = [] ;
// function practice1(data, number){
//     if(number > 1){
//         console.log(true);
//     } else{
//         console.log("Xatolik");
//     }
// }

// practice1(5, 0)

// number [0] = 1
// console.log(number);

//! Masala 4
// const months = ['January', "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

// function practice2 (year, month, day ){
//     let monthtotal = months[month - 1];
//     return(`${year} ${day}- ${monthtotal}`)
// }

// console.log(practice2(2002, 12, 27));



//! Homework
//* Example 1
//? Task 1 metrdan sm ga
// function tranform (metr){
//     return metr * 100;
// };

// console.log(tranform(51));

//? Task 2 Sm dan metrga
// function transform (sm){
//     return sm / 100;
// };

// console.log(transform(800));

//* Example 2
//? Task 1
// function task(metr){
//     metr = +prompt("Metr kiriting:")
//     const total = metr * 100;
//     alert(metr + "m" + "  =  " + total + "sm")
// }
// task()

//? Task 2
// function task(sm){
//     sm = +prompt("Santimetr kiriting:")
//     const total = sm / 100;
//     alert (`${sm}sm  =  ${total}m`);
// }
// task()

//? Task 3
// function task (a,b){
//     if(b > a) {
//         console.log(false);
//     }
//     return a / b;

// }

// task(15, 3)

// console.log(task(10, 20));


//* Example 2
//? Task 3
// function task (a,b){
//     a = +prompt("Birinchi uzinlikni kiriting:")
//     b = +prompt("Ikkinchi uzinlikni kiriting:")

//     if(b > a) {
//         alert("Xatolik");
//     }

//     alert(`Javob: ${a / b}`);
// }
// task()


//! Ustoz yozganlari
//? Masala 1
// function checker(){
//     const age = +prompt("Yoshingizni kiriting:") >= 18;

//     if(age){
//         alert("Xush kelibsiz")
//     }else{
//         alert("Kirishingiz mumkin emas")
//     }
// }
// checker()

//? Masala 2
// function func(a, b=1){
//     return a ** b;
// }
// console.log(func(5, 3));

//? Masala 3
// const arr = [1,2,3,4,5];

// function func(data, index){
//     if(index > 5){
//         alert("Kiritilgan index hato")
//     }else if(index < 1){
//         alert("Kiritilgan index hato")
//     }else{
//         arr[index-1] = data;
//         return arr;
//     }
// }

// func("Muhammad", 3)

//? Masala 4
// const arr = ['January', "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ];

// function func(year, month, day){
//     return `${year}-yil ${day}-${arr[month - 1]}`;
// }
// console.log(func(2005, 9, 18));















//! Homework
// function task() {
//     const choose = prompt(`O'lchov tizimini tianlang: 1) sm, 2) m `)

//     if (choose) {
//         sm = prompt("Santimetrdi kiriting:");
//         return total = alert(sm + "sm = " + sm / 100 + "metr");
//     } else if (choose) {
//         m = prompt("Metrdi kiriting:");
//         total = alert(m + "m = " + m * 100 + "sm");
//     } else {
//         return "Eror";
//     }
// }
// task()