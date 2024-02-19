// // const cardRow = document.querySelector(".card-row");
// // const titlePage = document.querySelector(".title");

// // const loader = document.querySelector(".loader");
// // loader.innerHTML += `
// // <div class="loaderr"></div>`;

// // const userId = JSON.parse(localStorage.getItem("userId"));
// // let point = JSON.parse(localStorage.getItem("point"));

// // titlePage.innerHTML = point;

// // point = point.toLowerCase();

// // function getData(url) {
// //   class ErrorResponse extends Error {
// //     constructor(status, message) {
// //       super(message);
// //       this.status = status;
// //     }
// //   }

// //   return new Promise((resolve, reject) => {
// //     fetch(url)
// //       .then((res) => {
// //         if (res.ok) {
// //           return res.json();
// //         } else {
// //           reject(new ErrorResponse(res.status, "Url is error"));
// //         }
// //       })
// //       .then((res) => {
// //         resolve(res);
// //       });
// //   });
// // }

// // function getPost({ title, body, id }) {
// //   return `
// //   <div class="card mb-3">
// //   <div class="card-body">
// //     <h5 class="card-title">${title}</h5>
// //     <p class="card-text">${body}</p>
// //     <a href="comments.html" onclick="postSaveId(${id})" class="comment-btn">Comments</a>
// //   </div>
// // </div>
// //   `;
// // }
// // function getTodos({ title, completed }) {
// //   return `
// //   <li class="list-group-item d-flex m-2 justify-content-between align-items-center">
// //         ${title}
// //         <span class="badge rounded-pill">${completed ? "✅" : "❌"}</span>
// //   </li>
// //   `;
// // }

// // function getting() {
// //   getData(
// //     `https://jsonplaceholder.typicode.com/${point}?userId=${userId}`
// //   ).then((res) => {
// //     res.map((el) => {
// //       if (point == "posts") {
// //         cardRow.innerHTML += getPost(el);
// //       } else {
// //         cardRow.innerHTML += getTodos(el);
// //       }
// //     });
// //   });

// //   loader.innerHTML = "";
// //   loader.style.height = "0px";
// // }

// // setTimeout(() => {
// //   getting();
// // }, 1000);

// // function postSaveId(id) {
// //   localStorage.setItem("postId", JSON.stringify(id));
// // }

// // titlePage.innerHTML += userId;

// /////////////////////////////////////////////////

// const todosDiv = document.querySelector(".cards.todos");
// const spanHeading = document.querySelector(".title span");

// async function fetchTodos() {
//   let id = JSON.parse(localStorage.getItem("userId"));
//   spanHeading.innerHTML = id;
//   try {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     let data = await res.json();
//     let filteredData = data.filter((td) => td.userId == id);
//     displayTodos(filteredData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchTodos();

// function displayTodos(todos) {
//   let str = "";

//   todos.map((todo) => {
//     str += `
//       <div class='card'>
//         <h2>Title: ${todo.title}</h2>
//         <h2>Id: ${todo.id}</h2>
//         <p>Completed: ${todo.completed ? "✅" : "❌"}</p>
//       </div>
//     `;
//   });
// }
// todosDiv.innerHTML = str;

const todosDiv = document.querySelector(".cards.todos");
const spanHeading = document.querySelector(".heading1 span");

async function fetchTodos() {
  let id = JSON.parse(localStorage.getItem("userId"));
  // spanHeading.innerHTML = id;
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId == id);
    displayTodos(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchTodos();

function displayTodos(todos) {
  let str = "";

  todos.map((todo) => {
    str += `
      <div class='card'>
        <h2>${todo.title}</h2>
        <p>Completed: ${todo.completed ? "✅" : "❌"}</p>
      </div>
    `;
  });

  todosDiv.innerHTML = str;
}
