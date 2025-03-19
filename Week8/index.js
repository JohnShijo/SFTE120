// console.log(`Hello`);

// window.alert(`This is an alert!`);

document.getElementById("myH1").textContent = `Welcome to my Website`;

document.getElementById("myP").textContent = `Something to add to the website`;

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}