import { Response } from "../Js/helper.js";

export function saveToken(token) {
  localStorage.setItem("authToken", token);
}

export function getToken() {
  return localStorage.getItem("authToken");
}

export function saveRefreshToken(token) {
  localStorage.setItem("refreshToken", token);
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

window.UnAuthenication = function () {
  window.location.href = "../Login_Signup/login_signup.html";

  alert("You need to log in");

  throw "Erorr";
};

window.VerifyToken = async function () {
  if (IsTokenValid()) return;

  var response = await RefreshToken();

  if (!response.valid) {
    window.UnAuthenication();
  } else {
    var newToken = response.obj;

    saveToken(newToken);

    window.token = getToken();
  }
};

async function RefreshToken() {
  let response = new Response();

  try {
    let data = await fetch(`https://victus.runasp.net/api/Token/RefreshToken`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(window.refreshToken),
    });

    if (data.ok) {
      response.obj = await data.json();

      response.valid = true;
    } else {
      response.error = await data.json();
    }
  } catch (error) {
    response.error = "Failed to refresh token!";
  } finally {
    return response;
  }
}

function parseJwt(token) {
  const base64Url = token.split(".")[1]; // Get the payload

  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Convert URL-friendly characters to base64

  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload); // Parse to JSON
}

function IsTokenValid() {
  let data;

  try {
    data = parseJwt(token);
  } catch (error) {
    return false;
  }

  console.log(
    new Date(data.exp * 1000),
    new Date(data.exp * 1000) > new Date()
  );

  return new Date(data.exp * 1000) > new Date();
}
