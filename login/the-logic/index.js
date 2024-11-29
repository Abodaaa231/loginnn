var nameInput = document.getElementById("name");
var reMailInput = document.getElementById("re-mail");
var rePassInput = document.getElementById("re-pass");
var emaill = document.getElementById("email");
var passwordd = document.getElementById("password");
var Add = [];
if (localStorage.getItem("accounts") != null) {
  Add = JSON.parse(localStorage.getItem("accounts"));
}
console.log(Add);



function login() {
  for (var i = 0; i < Add.length; i++) {
    if (emaill.value == Add[i].mail && passwordd.value == Add[i].pass) {
var userName ="";
var userName = `${Add[i].namee}`
localStorage.setItem("userName",userName);
      window.location.href = "site.html";
      return;
    }
  }
     var message = document.getElementById("mess");
    message.innerHTML = `<p class="text-danger text-center">Incorrect Email Or Password</p>`;
  }





function addbook() {
  var messageAboveButton = document.getElementById("sucss");
  var account = {
    namee: nameInput.value,
    mail: reMailInput.value,
    pass: rePassInput.value,
  };
  if (!nameInput.value || !reMailInput.value || !rePassInput.value) {
    messageAboveButton.innerHTML = `<h5 class="text-danger">All inputs are required</h5>`;
    return;
  }
  for (var i = 0; i < Add.length; i++) {
    if (Add[i].mail === reMailInput.value) {
      messageAboveButton.innerHTML = `<h5 class="text-danger">Email already exists</h5>`;
      return;
    }
  }
  Add.push(account);
  localStorage.setItem("accounts", JSON.stringify(Add));
  messageAboveButton.innerHTML = `<h5 class="text-success">success</h5>`;
  clear();
}






var user =localStorage.getItem("userName");
document.getElementById("ddd").innerHTML =user;







function clear() {
  nameInput.value = "";
  reMailInput.value = "";
  rePassInput.value = "";
}
