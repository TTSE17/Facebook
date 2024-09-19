import { Post } from "../Js/main.js";

import { ShowAlert } from "../Js/helper.js";

var content = document.querySelector(".content");

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const postId = getQueryParam("postId") ?? 0;

function Invalid() {
  window.location.href = "../Login_Signup/login_signup.html";

  alert("The provided post ID is invalid. Please check the URL and try again.");

  throw new Error("Invalid post ID. Redirecting to login page."); // Throw an error to stop further execution
}

let post = null;

window.RefreshPosts = async function () {
  await GetPost();

  LoadPostInfo();
};

await RefreshPosts();

async function GetPost() {
  let response = await Post.getPost(postId);

  RemoveLoadingSection();

  if (!response.valid) {
    // ShowAlert("Error", response.error, "danger");

    Invalid();

    return;
  }

  post = response.obj;

  // Post.posts.push(post); // To Find In GetPost
}

function LoadPostInfo() {
  if (post == null) return;

  if (!post.isActive) {
    document.querySelector(".alerts").innerHTML = "";

    window.location.href = `../Activity/Activity.html`;

    alert("This post may have been deleted.");

    return;
  }
  content.innerHTML = CreatePost(post);
}
