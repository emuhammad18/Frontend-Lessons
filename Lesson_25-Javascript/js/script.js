//! Operators

//? Addition +
// let sum = 4 + 5;

//? Subtraction -
// let num = 10 - 2;

//? Multiplication *
// let multi = 8 * 4;

//? Exponentiation **
// const expo = 9 ** 2;

//? Division /
// let dividedNum = 11/5;
// console.log(dividedNum);

//? Modulus (Division Remainder) %
// let modulus = 13%5;
// console.log("Qoldiq: " , modulus);

//? Increment ++
// let number = 0;
// console.log(number);
// number++;
// console.log(number);

//? Decrement --
// let number_2 = 10;
// console.log(number_2);
// number_2-- ;
// console.log(number_2);

//! Masala:
// let sum = (10 + 5) / 2;
// console.log(sum);

//?          =	        x = y	        x = y
// let y  = 5;
// let x = 10;
// x=y;

//?          +=     	x += y	        x = x + y
// x = x + y;
// x += y;

//?          -=     	x -= y	        x = x - y
// x = y -x;
// x -= y;

//?          *=     	x *= y	        x = x * y
// x = x * y;
// x *= y;

//?          /=     	x /= y	        x = x / y
//?          %=     	x %= y	        x = x % y
//?          **=        x **= y	        x = x ** y

//! Data types => Primitive vs Non-primitive data types
//? => Primitive
//* 1. String
// let user_1 = "Ibrohim";
// let user_2 = 'Ibrohim';
// let user_3 = `Ibrohim`;
// console.log(typeof user_1);
// console.log(typeof user_2);
// console.log(typeof user_3);
// console.log("Hello " , user_1);

//* 2. Number
// let x = 5;
// console.log(typeof x);

//* 3. Boolean => true or false
// let boolean = false;
// let isBigger = 5 > 3;
// console.log(isBigger);

//* 4. undefined
// let lalaku;
// console.log(lalaku);

//* 5. null
// let box = null;
// console.log(box);

//* 6. Symbol
// let user = Symbol.for("Ahmadillo");
// user = "Hello";
// console.log(Symbol.for(user));

//* 7. BigInt
// let bigNum = BigInt("999999999995555555555555555555555566666666");
// console.log(typeof bigNum);
// let bigNum = 99999999999999999999922222222222;
// console.log(bigNum);


//? Amaliy mashg'ulot
const name = prompt("Hurmatli mijoz ismingizni kiriting");
const surname = prompt("Familiyangizni kiriting");
const age = prompt("Yoshingizni kiriting");
alert("Assalomu aleykum " + name + " " + surname + "." + "\n Sizni yoshingiz " + age);