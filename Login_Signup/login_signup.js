import { saveToken, removeToken } from "../Js/token.js";
import { User, ShowAlert } from "../Js/helper.js";

removeToken();

let contain = document.querySelector(".contain");

let loginForm = document.querySelector(".login-form");

let signupLink = document.querySelector(".login-form a.sign-up");
let name_emailInputLogin = document.querySelector(
  ".login-form input[type='text']"
);
let passwordInputLogin = document.querySelector(
  ".login-form input[type='password']"
);

// let ForgotPassword = document.querySelector(".login-form a.forgot-password");

let loginLink = document.querySelector(".signup-form a.login");

let signupForm = document.querySelector(".signup-form");
let nameInputSignup = document.querySelector(".signup-form input[type='text']");
let emailInputSignup = document.querySelector(
  ".signup-form input[type='email']"
);
let passwordInputSignup = document.querySelector(
  ".signup-form input[type='password']"
);

signupLink.addEventListener("click", Flip);
loginLink.addEventListener("click", Flip);

function Flip() {
  contain.classList.toggle("flip");
}

function GetSignupRequest() {
  let nameInputValue = nameInputSignup.value.trim();
  let emailInputValue = emailInputSignup.value.trim();
  let passwordInputValue = passwordInputSignup.value.trim();

  return {
    name: nameInputValue ? nameInputValue : null,
    email: emailInputValue ? emailInputValue : null,
    password: passwordInputValue ? passwordInputValue : null,
  };
}

signupForm.addEventListener("submit", async (e) => {
  ShowLoadingSection();

  e.preventDefault();

  let userRequest = GetSignupRequest();

  let response = await User.Register(userRequest);

  console.log(response);

  Result(response);
});

function GetLoginRequest() {
  let name_emailInputValue = name_emailInputLogin.value.trim();
  let passwordInputValue = passwordInputLogin.value.trim();

  return {
    nameemail: name_emailInputValue ? name_emailInputValue : null,
    password: passwordInputValue ? passwordInputValue : null,
  };
}

loginForm.addEventListener("submit", async (e) => {
  ShowLoadingSection();

  e.preventDefault();

  let loginRequest = GetLoginRequest();

  let response = await User.Login(loginRequest);

  Result(response);
});

function Result(response) {
  if (response.valid) {
    let token = response.obj.token;

    saveToken(token);

    window.location.href = "../Main Screen/MainScreen.html";
  } else {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();
  }
}
