import {} from "../Js/clsToken.js";
import { GetCurrentUser } from "../Js/clsUser.js";
import { ShowAlert } from "../Js/helper.js";

window.defaultImage = "../imgs/d1.png";

window.UnAuthenication = function () {
  window.location.href = "../Login_Signup/login_signup.html";

  alert("You need to log in");

  throw new Error("UN"); // Throw an error to stop further execution
};

window.currentUser = null;

window.ShowLoadingSection();

await GetCurrentUser();

// window.RemoveLoadingSection();

window.SetActivityType = function (type) {
  localStorage.setItem("activityType", type);

  var titleElement = document.querySelector(".left-section h3");

  if (titleElement) titleElement.textContent = type;
};

window.ClickProfileOption = function (type) {
  SetActivityType(type);

  window.location.href = `../Activity/Activity.html`;
};

window.Reload = async function () {
  ShowLoadingSection();

  ShowAlert("Warning", "Tye Again!", "warning");

  await window.RefreshPosts();

  RemoveLoadingSection();
};

window.GetImage = function (image) {
  return image != null ? image : defaultImage;
};

window.LoadUserInfo = async function (userId) {
  ShowLoadingSection();

  window.location.href = `../User/User.html?userId=${userId}`;

  await delay(333);

  RemoveLoadingSection();
};

// When you navigate from one HTML page to another, All JavaScript variables,
// including global variables like those on window, are reset.
