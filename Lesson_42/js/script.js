// const carListEl = document.querySelector("#car-list");
// const carList = ["BMW", "Audi", "GM", "WW", "Mers"];

// ? break vs continue
for (let i = 0; i < carList.length; i++) {
  //* continue
  if (carList[i] === "GM") {
    continue;
  }
  //* break
  if (carList[i] === "GM") {
    break;
  }
  carListEl.innerHTML += `<li>${carList[i]}</li>`;
}

// ? JSON - Javascript Object Notation
const obj = {
  car: "Lombargini",
  number: "70 777ZZZ",
};

// const arr = [{name: "Ibrohim", job: "Teacher"}, {name: "Ahmadillo", job: "student"}]

// const jsonObj = JSON.stringify(obj);
// const jsonArr = JSON.stringify(arr);

// console.log(jsonArr);

//? API - Application Programming Interface
//* Request types => Get / Post / Put / Delete
// const firstname = prompt("What is your name?");
// fetch(`https://api.nationalize.io?name=${firstname}`)
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//     document.body.innerHTML = `<h1>${data.name}</h1>`;
//     data.country.forEach((natio) => {
//       document.body.innerHTML += `<h2>${natio.country_id}: ${Math.floor(
//         natio.probability * 100
//       )}%</h2>`;
//     });
//   })
//   .catch((err) => console.error(err));

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((user) => {
//       document.querySelector("#car-list").innerHTML += `<li>${user.username}</li>`;
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//* Promises
// const promise = new Promise((resolve, reject) => {
//   let isUserAuth = false;

//   if (isUserAuth) {
//     resolve({
//       user: "authenticated",
//       success: true,
//     });
//   } else {
//     reject({
//       user: "User was not authenticated",
//       success: false,
//     });
//   }
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Hw
// const firstname = document.querySelector("#name-input")
// const firstname = prompt("What is your name?");

// fetch(`https://api.nationalize.io?name=${firstname}`)
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//     document.innerHTML = `<h1>${data.name}</h1>`;
//     data.country.forEach((natio) => {
//       document.innerHTML += `<h2>${natio.country_id}: ${Math.floor(
//         natio.probability * 100
//       )}%</h2>`;
//     });

//     localStorage.setItem(8, data.country);
//     let username = localStorage.getItem(8)
//     console.log(username);
//   })
//   .catch((err) => console.error(err));

//! 3
// const inputEl = document.querySelector("#name-input");
// const historyEl = document.querySelector("#history-list");
// const genderEl = document.querySelector("#gender");
// const formEl = document.querySelector("#form");

// const newArr = [];

// localStorage.getItem("generation");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(`https://api.genderize.io?name=${inputEl.value}`)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       if (inputEl.value !== "") {
//         genderEl.innerHTML = "";
//         let txt1 = "";
//         let txt2 = "";
//         for (let x in data) {
//           txt1 += data[x] + "";
//           txt2 += data[x] + "";
//         }
//         newArr.push(data.name);
//         genderEl.innerHTML += `<h2>${data.name}</h2>`;
//         genderEl.innerHTML += `<h3>${data.gender}</h3>`;

//         historyEl.innerHTML += `<li>${inputEl.value}</li>`;
//         inputEl.value = "";
//       }else{
//         alert("Enter value")
//       }
//     });
// });

// console.log(newArr);
