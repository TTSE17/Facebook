import { Password } from "../Js/clsPassword.js";
import { ShowAlert } from "../Js/helper.js";

let emailInput = document.querySelector(".search input");
let searchButton = document.querySelector("button.search");

let email, code;

searchButton.addEventListener("click", async () => {
  let emailInputValue = emailInput.value.trim();

  if (!IsValidEmail(emailInputValue)) {
    ShowAlert("Required", "Enter Valid Email!", "danger");

    return;
  }

  window.ShowLoadingSection();

  let response = await Password.SendPasswordResetCode(emailInputValue);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  email = emailInputValue;

  document.querySelector(".search").innerHTML = "";

  CreateCodeSection();

  window.RemoveLoadingSection();
});

let codeSection = document.querySelector(".code");
let codeInput;

function CreateCodeSection() {
  codeSection.innerHTML = `
  <div class="container px-0">
    <div class="box rounded-3 border">
      <h5 class="mb-0 p-3">Enter security code</h5>

      <p class="p-3 mb-0">Check your email for message with your code.</p>

      <div class="px-3">
        <input class="form-control" placeholder="Code" maxlength="6" />
      </div>

      <div class="footer p-3 mt-3 text-end">
        <button class="cancel btn btn-secondary" onclick=cancel()>Cancel</button>
        <button class="continue btn btn-primary">Continue</button>
      </div>
    </div>
  </div>`;

  codeInput = document.querySelector(".code input");

  codeInput.addEventListener("keypress", (e) => {
    if (isNaN(e.key)) e.preventDefault();
  });

  codeInput.addEventListener("input", (e) => {
    codeInput.value = codeInput.value.replace(/\D/g, "");

    // if (isNaN( codeInput.value)) codeInput.value = "";
  });

  let continueButton = document.querySelector("button.continue");

  continueButton.addEventListener("click", ConfirmCode);
}

async function ConfirmCode() {
  if (!IsValidEmail(email)) {
    ShowAlert("Required", "Enter your email address", "danger");

    return;
  }

  let codeInputValue = codeInput.value.trim();

  if (!IsValidCode(codeInputValue)) {
    ShowAlert("Required", "The code must contain exactly 6 digits!", "danger");

    return;
  }

  window.ShowLoadingSection();

  let response = await Password.CheckPasswordResetCode({
    email,
    code: codeInputValue,
  });

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  code = codeInputValue;

  codeSection.innerHTML = "";

  CreateNewPasswordSection();

  window.RemoveLoadingSection();
}

let newPasswordSection = document.querySelector(".new-password");

function CreateNewPasswordSection() {
  newPasswordSection.innerHTML = `
  <div class="container px-0">
    <div class="box rounded-3 border">
      <h5 class="mb-0 p-3">Choose a new password</h5>

      <p class="p-3 mb-0">
        Create a new password with at least 7 characters.
      </p>

      <div class="px-3">
        <input
          class="form-control"
          placeholder="Password"
          maxlength="13"
          minlength="7"
          oninput="this.value = this.value.trim()"
        />
      </div>

      <div class="footer p-3 mt-3 text-end">
        <button class="cancel btn btn-secondary" onclick=cancel()>Cancel</button>
        <button class="save btn btn-primary">Save</button>
      </div>
    </div>
  </div>`;

  let saveButton = document.querySelector("button.save");

  saveButton.addEventListener("click", savePassword);
}

async function savePassword() {
  // if (!IsValidEmail(email)) {
  //   ShowAlert("Required", "Enter your email address", "danger");

  //   return;
  // }

  // if (!IsValidCode(code)) {
  //   ShowAlert("Required", "The code must contain exactly 6 digits!", "danger");

  //   return;
  // }

  let passwordInput = document.querySelector(".new-password input");
  let newPassword = passwordInput.value.trim();

  if (!IsValidPassword(newPassword)) {
    ShowAlert("Required", "Password must be 7 to 13 characters.", "danger");

    return;
  }

  window.ShowLoadingSection();

  let response = await Password.ResetPassword({ email, code, newPassword });

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  newPasswordSection.innerHTML = "";

  window.RemoveLoadingSection();

  finished();
}

function finished() {
  document.querySelector(".finished .container").innerHTML = `
    <h1 class="mt-5 text-success">Email Verified!</h1>

    <p>
        Your email has been successfully verified.
        <br />
        You can now log in to your account.
    </p>
    
    <a href="../Login_Signup/login_signup.html" class="login">Go to Login</a>
    `;
}

window.cancel = function () {
  window.location = "../Login_Signup/login_signup.html";
};

function IsValidEmail(email) {
  return !(email == null || email == "" || email.length < 3);
}

function IsValidCode(code) {
  return !(code == null || code == "" || code.length != 6);
}

function IsValidPassword(password) {
  return !(
    password == null ||
    password == "" ||
    password.length < 7 ||
    password.length > 13
  );
}
