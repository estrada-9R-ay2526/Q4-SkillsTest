const correctUsername = "Supermax";
const correctPassword = "1333";

window.alert(
  "Use these login details:\n\n" +
  "Username: " + correctUsername + "\n" +
  "Password: " + correctPassword
);

const loginForm = document.getElementById("loginForm");

// PAGES
const loginPage = document.getElementById("loginPage");
const notebookPage = document.getElementById("notebookPage");

// BUTTONS
const cancelBtn = document.getElementById("cancelBtn");
const logoutBtn = document.getElementById("logoutBtn");


// LOGIN FUNCTION
loginForm.addEventListener("submit", function(event){

  // PREVENT PAGE REFRESH
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username === correctUsername && password === correctPassword){

window.location.href = "notebook.html";

  } else {

    alert("Incorrect username or password.");

  }

});

cancelBtn.addEventListener("click", function(){

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

});