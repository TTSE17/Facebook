import {} from "../Js/helper.js";
import { ConfirmEmail } from "../Js/clsEmail.js";

let container = document.querySelector(".container");

const token = getQueryParam("token") ?? null;

console.log(token);

Verify();

async function Verify() {
  if (token == null) {
    invalid("It looks like this verification link is invalid!");

    return;
  }

  window.ShowLoadingSection();

  let response = await ConfirmEmail(token);

  if (!response.valid) {
    invalid(response.error);

    window.RemoveLoadingSection();

    return;
  }

  verified();

  window.RemoveLoadingSection();
}

function invalid(text) {
  container.innerHTML = `
    <h1 class="mt-5 text-danger">Verification Failed!</h1>

    <p>${text}</p>
    `;
}

function verified() {
  container.innerHTML = `
    <h1 class="mt-5 text-success">Email Verified!</h1>

    <p>
        Your email has been successfully verified.
        <br />
        You can now log in to your account.
    </p>
    
    <a href="../Login_Signup/login_signup.html" class="btn">Go to Login</a>
    `;
}
