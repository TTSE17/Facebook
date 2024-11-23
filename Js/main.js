import { getToken, getRefreshToken } from "../Js/clsToken.js";
import { GetUserInfoFromStorrage } from "../Js/clsUser.js";
import { ShowAlert } from "../Js/helper.js";

window.defaultImage = "../imgs/d1.png";
window.postsContainer = document.querySelector(".posts .content");

window.ShowLoadingSection();

window.token = getToken();
window.refreshToken = getRefreshToken();

if (token == null || refreshToken == null) {
  UnAuthenication();
}

var userInfo = GetUserInfoFromStorrage();

if (userInfo == null) {
  UnAuthenication();
}

window.currentUser = userInfo;

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

  pageNumber = 1;

  if (postsContainer != null) postsContainer.innerHTML = "";

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

window.pageNumber = 1;

window.LoadingPosts = () => {
  let checkNextRequest = true;

  window.addEventListener("scroll", async () => {
    if (!checkNextRequest) return;

    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 597
    ) {
      checkNextRequest = false;

      pageNumber++;

      console.log(pageNumber);

      await RefreshPosts();

      checkNextRequest = true;
    }
  });
};
