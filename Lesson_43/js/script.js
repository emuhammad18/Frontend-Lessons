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

//! 3
const inputEl = document.querySelector("#name-input");
const historyEl = document.querySelector("#history-list");
const genderEl = document.querySelector("#gender");
const formEl = document.querySelector("#form");
const searchBtnEl = document.querySelector("#submitBtn");
const menu = document.querySelector("#menu");

let isOpen = false;

menu.addEventListener("click", () => {
  if (isOpen) {
    historyEl.style.transform = "translateX(-100%)";
    menu.innerHTML = `<i class="fas fa-bars"></i>`;
    isOpen = false;
  } else {
    historyEl.style.transform = "translateX(0)";
    menu.innerHTML = `<i class="fas fa-xmark"></i>`;
    isOpen = true;
  }
});

let history = JSON.parse(localStorage.getItem("history")) || [];

// let historyn = 

history.forEach((name) => {
  historyEl.innerHTML += `<li>${name}</li>`;
});

searchBtnEl.addEventListener("click", (e) => {
  if (inputEl.value !== "") {
    e.preventDefault();
    history.push(inputEl.value);
    localStorage.setItem("history", JSON.stringify(history));
    historyEl.innerHTML = "";
    history.forEach((name) => {
      historyEl.innerHTML += `<li>${name}</li>`;
    });
    
    fetch(`https://api.genderize.io?name=${inputEl.value}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      genderEl.innerHTML = "";
      let txt1 = "";
      let txt2 = "";
      for (let x in data) {
          txt1 += data[x] + "";
          txt2 += data[x] + "";
        }
        genderEl.innerHTML += `<h2>${data.name}</h2>`;
        genderEl.innerHTML += `<h3>${data.gender}</h3>`;
      })
      .catch((err) => console.error(err));
      inputEl.value = "";
    } else {
      alert("Error");
  }
});

// localStorage.clear()
