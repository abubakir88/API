const usersDiv = document.querySelector(".cards.users");

async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function displayUsers(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class='card'>
        <h2> ${user.name}</h2>
        <h2>Id: ${user.id}</h2>
        <p>Email: <a href="">${user.email}</a></p>
        <p>Website: <a href="">${user.website}</a></p>
        <p>Address: <a href="">${user.address}</a></p>
        <p>Phone: <a href="">${user.phone}</a></p>
       <div class="vmes">
       <button class="but1"><a class="first" href="./todos.html" onclick="getTodos(${user.id})">Todos</a></button> 
       <button class="but1"><a class="first" href="./todos.html" onclick="getTodos(${user.id})">Posts</a></button> 
       <button class="but1"><a class="first" href="./todos.html" onclick="getTodos(${user.id})">Gallery</a></button> 

       </div>
       </div>
    `;
  });

  usersDiv.innerHTML = str;
}

function getTodos(id, point = "") {
  localStorage.setItem("userId", JSON.stringify(id));
  localStorage.setItem("point", JSON.stringify(point));
}
