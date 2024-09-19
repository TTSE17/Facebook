import { Post } from "../Js/main.js";

import { User, ShowAlert } from "../Js/helper.js";

let profileImage = document.querySelector(".user-info .image img");

let userName = document.querySelector(".user-info h3");

let profileOptions = document.querySelector(".profile-options");

var postsContainer = document.querySelector(".posts .content");

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const userId = getQueryParam("userId") ?? 0;

function Invalid() {
  window.location.href = "../Login_Signup/login_signup.html";

  alert("The provided user ID is invalid. Please check the URL and try again.");

  throw new Error("Invalid user ID. Redirecting to login page."); // Throw an error to stop further execution
}

let user = null;

window.RefreshPage = async function () {
  await Promise.all([LoadUserPosts(), GetUser()]);

  LoadUserInfo();
};

window.RefreshPosts = async function () {
  if (currentUser.id != user.id) return;

  await LoadUserPosts();
};

await LoadPage();

async function LoadPage() {
  ShowLoadingSection();

  await RefreshPage();

  RemoveLoadingSection();
}

async function GetUser() {
  if (currentUser.id == userId) {
    user = currentUser;

    CreateCurrentUserProfile();

    return;
  }

  user = new User(userId);

  let response = await user.GetUser();

  if (!response.valid) {
    // ShowAlert("Error", response.error,'danger');

    Invalid();

    return;
  }

  CreateGuestUserProfile();

  user.obj = response.obj;
}

function CreateCurrentUserProfile() {
  profileOptions.innerHTML = `
  <div class="current-user">

  <div class = "container p-0 d-flex gap-3"> 
    
    <button
      class="btn btn-secondary"
      data-bs-toggle="dropdown"
      data-bs-offset="1,3"
    >
      <i class="fa-solid fa-ellipsis"></i>
    </button>

    <ul class="dropdown-menu py-0">

      <li class="dropdown-item py-2 pe-3" role="button" 
                onclick="ClickProfileOption('trash')"
      >Trash</li>

      <li class="px-2">
        <hr class="dropdown-divider m-0" />
      </li>

      <li class="dropdown-item py-2 pe-3" role="button"
                onclick="ClickProfileOption('activity')"
      >Activity Log</li>

      <li class="px-2">
        <hr class="dropdown-divider m-0" />
      </li>

      <li class="dropdown-item py-2 pe-3" role="button"
                onclick="ClickProfileOption('saved')"
      >Saved Posts</li>

      <li class="px-2">
        <hr class="dropdown-divider m-0" />
      </li>

      <li class="change-password dropdown-item py-2 pe-3" role="button"
          onclick="ClickChangePassword()"
      >Change Password</li>

      <li class="px-2">
        <hr class="dropdown-divider m-0" />
      </li>

      <li class="dropdown-item py-2 pe-3" role="button"
          onclick="ClickProfileLink()"
      >Profile Link</li>
    </ul>

    <button
      class="edit-profile btn btn-primary flex-grow-1"
      style="letter-spacing: 0.5px;"
      onclick="ClickEditProfile()"
    >
      Edit Profile
    </button>
    
    </div>
    
  </div>
  `;
}

window.ClickEditProfile = function () {
  ShowLoadingSection();

  ClickEditProfileItem();

  let toggleModalBtn = document.querySelector(".edit-profile button");

  toggleModalBtn.click();

  RemoveLoadingSection();
};

window.ClickChangePassword = function () {
  ShowLoadingSection();

  ClickChangePasswordItem();

  let toggleModalBtn = document.querySelector(".change-password button");

  toggleModalBtn.click();

  RemoveLoadingSection();
};

window.ClickProfileLink = function () {
  const url = window.location.href;

  navigator.clipboard.writeText(url).then(
    function () {
      ShowAlert("Done!", "URL Copied To Clipboard Successfully!", "success");
    },
    function (err) {
      ShowAlert("Erorr!", "ailed to copy the URL. Please try again.", "danger");
    }
  );
};

function CreateGuestUserProfile() {
  profileOptions.innerHTML = `
  <div class="guest-user px-3">
    
    <button
      class="btn btn-primary w-100 fs-5"
      style="letter-spacing: 0.5px;"
      onclick="ClickProfileLink()"
    >
      Copy Profile Link
    </button>

  </div>`;
}

async function LoadUserPosts() {
  let filterRequest = { UserId: userId };

  let response = await Post.FetchPosts(filterRequest);

  if (response.valid) {
    Post.posts = response.obj;

    Post.RenderPosts(postsContainer);
  } else {
    // ShowAlert("Error", response.error,'danger');
    Invalid();
  }
}

function LoadUserInfo() {
  profileImage.src = GetImage(user.obj.imagePath);
  userName.innerHTML = user.obj.name;
}
