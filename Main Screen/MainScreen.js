import {} from "../Js/main.js";
import { Post } from "../Js/clsPost.js";
import { ShowAlert } from "../Js/helper.js";
import {} from "../Js/clsPassword.js";

let editInfoBtn = document.querySelector(".navbar .edit-info");

let changePasswordItem = document.querySelector(".navbar .change-password");

let profileBtn = document.querySelector(".navbar .image");
let profileImage = document.querySelector(".navbar .image img");

let homeImage = document.querySelector(".home-header img");
var createPostBtn = document.querySelector(".home-header button");

var recentBtn = document.querySelector(".posts .post-header li:first-child a");
var popularBtn = document.querySelector(".posts .post-header li:last-child a");

var postsContainer = document.querySelector(".posts .content");

let recentBtnActive = recentBtn.classList.contains("active");

window.RefreshPage = async function () {
  LoadCurrentUserInfo();

  await RefreshPosts();
};

window.RefreshPosts = async function () {
  await LoadPosts();
};

await LoadPage();

async function LoadPage() {
  // ShowLoadingSection();

  RefreshPage(); // wait

  RemoveLoadingSection();
}

async function LoadPosts() {
  let filterReuest = {
    type: recentBtnActive ? null : "popular",
  };

  let response = await Post.FetchPosts(filterReuest);

  if (response.valid) {
    Post.posts = response.obj;

    Post.RenderPosts(postsContainer);
  } else {
    ShowAlert("Error", response.error, "danger");
  }
}

function LoadCurrentUserInfo() {
  profileImage.src = window.GetImage(currentUser.obj.imagePath);
  homeImage.src = profileImage.src;
}

editInfoBtn.addEventListener("click", () => {
  ShowLoadingSection();

  window.ClickEditProfileItem();

  let toggleModelBtn = document.querySelector(".edit-profile button");

  toggleModelBtn.click();

  RemoveLoadingSection();
});

changePasswordItem.addEventListener("click", () => {
  ShowLoadingSection();

  window.ClickChangePasswordItem();

  let toggleModelBtn = document.querySelector(".change-password button");

  toggleModelBtn.click();

  RemoveLoadingSection();
});

profileBtn.addEventListener("click", async () => {
  window.LoadUserInfo(currentUser.obj.id);
});

createPostBtn.addEventListener("click", () => {
  ShowLoadingSection();

  window.ManagePostSection();

  let toggleModelBtn = document.querySelector(".manage-post button");

  toggleModelBtn.click();

  RemoveLoadingSection();
});

recentBtn.addEventListener("click", async () => {
  if (recentBtnActive) return;

  // ShowLoadingSection();

  recentBtnActive = true;

  LoadPosts(); // wait

  // RemoveLoadingSection();
});

popularBtn.addEventListener("click", async () => {
  if (!recentBtnActive) return;

  // ShowLoadingSection();

  recentBtnActive = false;

  LoadPosts(); // wait

  // RemoveLoadingSection();
});

/*
  Functions and variables are scoped to the module. 
  They are not available in the global scope unless you explicitly 
  attach them to the window object or export/import them properly.

  Functions like HandleDate, HandleTotal, and AddClassLiked: These are called within the same module, 
  so they do not need to be attached to the window object.
  Function ClickLikeBtn: This needs to be attached to the window object because 
  it is being called from an inline HTML onclick attribute, which expects the function to be in the global scope.
*/
