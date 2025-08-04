// function getUserData(URL) {
//     fetch(URL)
//         .then((res) => {
//             console.log(res);
//             return res.json(); // return once
//         })
//         .then((data) => {
//             console.log(data); // parsed JSON data
//         })
//         .catch((err) => {
//             console.log("Error:", err);
//         });
// }

// getUserData("https://jsonplaceholder.typicode.com/users");



let userContainer = document.querySelector(".user-container");
console.log(userContainer);

function getUsersData(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        return res.json()      // to convert to json & return promise
    })
    .then((data)=>{
        console.log(data);
        data.forEach(user=>{
            displayUsers(user);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

function displayUsers(users){
    let li = document.createElement("li");
    li.setAttribute("class", "user-item");
    li.innerHTML = `<div class="userInfo">
                <h1> ${users.name}</h1>
                <p>${users.username}</p>
            </div>
            <div class="userButton">
                <button class="user-delete">Delete</button>
                <button class="user-edit">Edit</button>
            </div>`

            userContainer.appendChild(li);
}
getUsersData("https://jsonplaceholder.typicode.com/users");