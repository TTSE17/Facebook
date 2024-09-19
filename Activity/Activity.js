import { Post } from "../Js/main.js";
import { ShowAlert, ShowConfirmMessage } from "../Js/helper.js";

let trashBtn = document.querySelector("div .left-section ul a[href='#trash']");
let activityLogBtn = document.querySelector(
  "div .left-section ul a[href='#activity']"
);
let savedPostsBtn = document.querySelector(
  "div .left-section ul a[href='#saved']"
);

var postsContainer = document.querySelector(".posts .content");
var activityContainer = document.querySelector(".right-section #activity");
var savedContainer = document.querySelector(".right-section #saved");

function GetActivityType() {
  return localStorage.getItem("activityType");
}

let activityType = null;

trashBtn.addEventListener("click", ClickTrash);
activityLogBtn.addEventListener("click", ClickActivityLog);
savedPostsBtn.addEventListener("click", ClickSavedPosts);

window.RefreshPosts = function () {
  activityType = GetActivityType();

  if (activityType == null) {
    RemoveLoadingSection();

    return;
  }

  if (activityType == "trash") trashBtn.click();
  else if (activityType == "activity") activityLogBtn.click();
  else if (activityType == "saved") savedPostsBtn.click();
};

async function ClickTrash() {
  ShowLoadingSection();

  await LoadTrash();

  RemoveLoadingSection();
}

async function ClickActivityLog() {
  ShowLoadingSection();

  await LoadActivity();

  RemoveLoadingSection();
}

async function ClickSavedPosts() {
  ShowLoadingSection();

  await LoadSavedPosts();

  RemoveLoadingSection();
}

LoadContent();

RemoveLoadingSection();

function LoadContent() {
  RefreshPosts();
}

async function LoadTrash() {
  let filterRequest = { UserId: currentUser.id, IsActive: false };

  let response = await Post.FetchPosts(filterRequest);

  if (response.valid) {
    Post.posts = response.obj;

    Post.RenderPosts(postsContainer);
  } else {
    ShowAlert("Error", response.error, "danger");
    //   Invalid();
  }
}

async function LoadActivity() {
  let response = await currentUser.AllActivity();

  if (response.valid) {
    RenderActivity(response.obj);
  } else {
    ShowAlert("Error", response.error, "danger");
    //   Invalid();
  }
}

function RenderActivity(list) {
  activityContainer.innerHTML = "";

  list.forEach((item) => {
    CreateActivity(item);
  });
}

function CreateActivity(item) {
  let isActive = item.isActive;
  let text = item.text || "";

  let clickOnPostSection = isActive
    ? `role='button' onclick ='LoadPost(${item.postId})'`
    : "";

  let withPost =
    currentUser.id == item.userId
      ? "His Own Post"
      : `<span class="fs-5 text-black">${item.name}</span>'s Post`;

  let typeText = item.activityType == "Like" ? "Like" : "Commented On";

  activityContainer.innerHTML += `
  <div class="bg-white mt-3 p-md-3 p-2 rounded-3" ${clickOnPostSection}>

    <div class="d-flex gap-md-3 gap-2">

      <div>
      
        <img class="rounded-circle border"
            src="${GetImage(item.imagePath)}" 
            decoding="async" alt="${defaultImage}"  />

      </div>

      <div class="content pt-1">

        <h6 class="mb-1 text-muted">
          You ${typeText} ${withPost}
        </h6>

        <p class="text-muted small mb-0">${text}</p>

      </div>

    </div>

    <small class="text-muted mt-1 text-end d-block">
      ${HandleDate3(item.createdAt)}
    </small>
    
  </div>
  `;
}

window.LoadPost = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    await Reload();

    return;
  }

  window.location.href = `../Post/Post.html?postId=${postId}`;
};

async function LoadSavedPosts() {
  let response = await currentUser.AllSavedPosts();

  if (response.valid) {
    RenderSavedPosts(response.obj);
  } else {
    ShowAlert("Error", response.error, "danger");
    //   Invalid();
  }
}

function RenderSavedPosts(list) {
  savedContainer.innerHTML = "";

  list.forEach((item) => {
    CreateSavedPost(item);
  });
}

function CreateSavedPost(item) {
  savedContainer.innerHTML += `
  <div class="bg-white mt-3 p-md-3 p-2 rounded-3">

    <div class="d-flex gap-md-3 gap-2">
 
      <div>
        <img class="rounded-circle border"
              src="${GetImage(item.imagePath)}" 
              decoding="async" alt="${defaultImage}"  />
      </div>

      <div class="content pt-1 flex-grow-1">

        <div class="d-flex justify-content-between">
          <a href="#" onclick="LoadPost(${item.postId})">Show</a>
          
          <button type="button" class="btn btn-close shadow-none " 
                  onclick="ClickUnSavePost(${item.postId})">
          </button>
        
        </div>
        
        <h6 class="mt-1 text-black">
          Saved From
          <span class="fs-5 text-black">${item.name}</span>'s Post
        </h6>

      </div>

    </div>

    <small class="text-muted text-end d-block">
      ${HandleDate3(item.savedAt)}
    </small>

  </div>
  `;
}

window.ClickUnSavePost = function (postId) {
  ShowConfirmMessage("UnSave Post");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await UnSavePost(postId);
  };
};

async function UnSavePost(postId) {
  ShowLoadingSection();

  let closeBtn = document.querySelector(".confirm-message .btn-close");
  closeBtn.click();

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isSaved) {
    await Reload();

    return;
  }

  let response = await Post.UnSavedPost(postId);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");
  }

  await LoadSavedPosts();

  RemoveLoadingSection();
}
