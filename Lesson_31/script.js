// let user_name_one = "Ibrohim";
// let user_name_two = 'Timur';
// let user_name_three = `Robert`;

// console.log(user_name_one, user_name_two, user_name_three);

// let user = "A'loxon";
// let user2 ="A'loxon";
// let user3 = '"Hello"';
// let gap = `Ibrohim bir kuni "Meni o'quvchilarim qutqaringlar!" deb aytdi`;
// console.log(user3, gap) 

// console.log("HelloHi".length);

//? slice()
// let str = "Apple, Banana, Kiwi";
// console.log(str.slice(7)); // Banana, Kiwi
// console.log(str.slice(7,13)); //Banana
// console.log(str.slice(-12,-6)); //Banana
// console.log(str.slice(-12)); //Banana, Kiwi
// console.log(str); // no changed

//? substring()
// let str = "Apple, Banana, Kiwi";
// console.log(str.substring(7,13));

//? substr()
// let str = "Apple, Banana, Kiwi";
// console.log(str.substr(8,8));
// console.log(str.substr(-7,7));

// let text =
//  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus vel, cumque labore expedita, est illo id ab a modi pariatur odio aliquid quo consequatur adipisci maiores omnis magnam earum repellat hic cupiditate. Animi fugiat, accusantium iste debitis autem vero laudantium molestiae, architecto soluta suscipit molestias! Consequatur, iusto. Pariatur, neque.";

// document.querySelector("body").textContent = text.substr(0,30) + "....";

//? replace
// let str = "Welcome to Google and Google";
// console.log(str.replace(/google/gi, "Microsoft" ));

//? toUpperCase & totLowerCase
// let username = "ibrohim";
// console.log(username.toUpperCase());
// console.log(username.toLocaleLowerCase());

//? concat
// let text1 = "Hello";
// let text2 = "Worlad";
// let text3 = text1.concat(" ", text2, " Ibrohim");
// console.log(text3);

//? trim
// let text = '          Hello world          '
// console.log(text.trim());

//? padStart & padEnd 
// let text =  "555";
// let padded = text.padStart(10, "x");
// let padded2 = text.padEnd(10 "x");
// console.log(padded);
// console.log(padded2);

//? charAt
// let username = "Ibrohim";
// console.log(username.charAt(2));
// console.log(username.charCodeAt(2));
// console.log(username[3]);

//? split()
// let user = "Muhammad"
// let users = "Ahmadillo, Abdullaziz, Ibrohim, Ismoil, Muhammad";
// let arrUser = users.split("|");
// console.log(arrUser);