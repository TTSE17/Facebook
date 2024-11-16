import { saveToken, saveRefreshToken } from "../Js/clsToken.js";
import { User, SaveUserInfoInStorrage } from "../Js/clsUser.js";
import { ShowAlert } from "../Js/helper.js";

localStorage.clear();

let contain = document.querySelector(".contain");

let loginForm = document.querySelector(".login-form");

let signupLink = document.querySelector(".login-form a.sign-up");
let name_emailInputLogin = document.querySelector(
  ".login-form input[type='text']"
);
let passwordInputLogin = document.querySelector(
  ".login-form input[type='password']"
);

let ForgotAccount = document.querySelector(".login-form a.forgot-account");
let loginLink = document.querySelector(".signup-form a.login");

let signupForm = document.querySelector(".signup-form");
let nameInputSignup = document.querySelector(".signup-form input[type='text']");
let emailInputSignup = document.querySelector(
  ".signup-form input[type='email']"
);
let passwordInputSignup = document.querySelector(
  ".signup-form input[type='password']"
);

ForgotAccount.addEventListener("click", () => {
  window.location.href = "../Recover/recover.html";
});

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

  if (response.valid) {
    ShowAlert(
      "Done!",
      "Registration successful! Please check your email and click the confirmation link to complete your registration",
      "success"
    );
  } else {
    ShowAlert("Error", response.error, "danger");
  }

  RemoveLoadingSection();
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

  if (response.valid) {
    SaveData(response.obj);

    window.location.href = "../Main Screen/MainScreen.html";
  } else {
    ShowAlert("Error", response.error, "danger");
  }
  RemoveLoadingSection();
});

function SaveData(data) {
  let token = data.token;

  saveToken(token);

  let refreshToken = data.refreshToken;

  saveRefreshToken(refreshToken);

  var userInfo = {
    id: data["id"],
    name: data["name"],
    email: data["email"],
    imagePath: data["imagePath"],
  };

  SaveUserInfoInStorrage(userInfo);
}
