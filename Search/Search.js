import {} from "../Js/main.js";
import { Post } from "../Js/clsPost.js";
import { ShowAlert, ShowConfirmMessage } from "../Js/helper.js";
import { User } from "../Js/clsUser.js";

let SearchInput = document.querySelector("div .search input");

let navItems = document.querySelectorAll(".left-section > ul > li");
let allBtn = document.querySelector("div .left-section ul li a[href='#all']");
let postsBtn = document.querySelector(
  "div .left-section ul li a[href='#posts']"
);
let usersBtn = document.querySelector(
  "div .left-section ul li a[href='#users']"
);
let seeAllSection = document.querySelector(
  ".right-section div[id='all'] .users .see-all"
);

let datePostedElement = document.querySelector(
  ".left-section ul li .date-posted"
);

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    navItems.forEach((i) => {
      i.classList.remove("show");
    });

    item.classList.add("show");
  });
});

const Type = {
  ALL: "all",
  POSTS: "posts",
  USERS: "users",
};

let UserContent;

let textValue = null;

let datePosted = null;

let type = Type.ALL;
let lastType = null;

SearchInput.addEventListener("input", OnInput);

datePostedElement.addEventListener("change", SelectDate);

function OnInput() {
  textValue = SearchInput.value.trim().toLowerCase();

  textValue = textValue == "" ? null : textValue;

  lastType = null;

  LoadDate();
}

function SelectDate() {
  let value = datePostedElement.value;

  datePosted = value == "" ? null : new Date(value);

  lastType = null;

  LoadDate();
}

function LoadDate() {
  if (type == Type.ALL) {
    ClickAll();
  } else if (type == Type.POSTS) {
    ClickPosts();
  } else if (type == Type.USERS) {
    ClickUsers();
  }
}

allBtn.addEventListener("click", async () => {
  await ClickAll();
});

postsBtn.addEventListener("click", async () => {
  await ClickPosts();
});

usersBtn.addEventListener("click", async () => {
  await ClickUsers();
});

ClickAll();

window.RefreshPosts = async function () {
  await LoadPosts();
};

async function ClickAll() {
  if (lastType == Type.ALL) return;

  type = Type.ALL;
  lastType = Type.ALL;

  window.postsContainer = document.querySelector(
    ".right-section div[id='all'] .posts .content"
  );

  UserContent = document.querySelector(
    ".right-section div[id='all'] .users .content"
  );

  window.pageNumber = 1;

  postsContainer.innerHTML = "";

  // await LoadUsers();

  // await LoadPosts();

  await Promise.all([LoadUsers(), LoadPosts()]);

  window.LoadingPosts();
}

async function ClickPosts() {
  if (lastType == Type.POSTS) return;

  type = Type.POSTS;
  lastType = Type.POSTS;

  window.postsContainer = document.querySelector(
    ".right-section div[id='posts'] .content"
  );

  window.pageNumber = 1;

  postsContainer.innerHTML = "";

  await LoadPosts();

  window.LoadingPosts();
}

async function LoadPosts() {
  if (currentUser == null) return;

  let filterRequest = { pageNumber, Text: textValue, datePosted };

  let response = await Post.FetchPosts(filterRequest);

  if (response.valid) {
    Post.posts = response.obj;

    Post.RenderPosts();
  } else {
    ShowAlert("Error", response.error, "danger");
  }
}

async function ClickUsers() {
  if (lastType == Type.USERS) return;

  type = Type.USERS;
  lastType = Type.USERS;

  UserContent = document.querySelector(
    ".right-section div[id='users'] .content"
  );

  await LoadUsers();
}

async function LoadUsers() {
  let filterRequest = { Text: textValue };

  let response = await User.FetchUsers(filterRequest);

  if (!response.valid) {
    ShowAlert("Error", "Failed to display Users", "danger");

    RemoveLoadingSection();

    return;
  }

  let users = response.obj;

  let count = users.length;

  UserContent.innerHTML = "";

  seeAllSection.innerHTML = "";

  if (count == 0) return;

  let maxUsers = 2;

  if (type == Type.ALL && count > maxUsers) {
    for (let i = 0; i < maxUsers; i++) {
      const element = users[i];

      CreateUserNode(element);
    }
    if (count > maxUsers) {
      CreateSeeAllSection();
    }
  } else {
    users.forEach((user) => {
      CreateUserNode(user);
    });
  }
}

function CreateUserNode(user) {
  UserContent.innerHTML += `
  <div
    class="user fs-5 d-flex gap-3 align-items-center m-0 p-sm-3 p-3"
    role="button"
    id="${user.id}"
    onclick="LoadUserInfo(${user.id})"
  >
    <div class="image rounded-5 overflow-hidden">
      <img
        src="${GetImage(user.imagePath)}"
        decoding="async"
        alt="${defaultImage}"
        class="w-100 h-100 rounded-circle border"
      />
    </div>
    ${user.name}
  </div>
  `;
}

function CreateSeeAllSection() {
  seeAllSection.innerHTML = `
  <div class="bg-white rounded-s4 px-3 pb-3">
    <button class="btn btn-primary w-100">See all</button>
  </div>
  `;

  let seeAllBtn = seeAllSection.querySelector("button");

  seeAllBtn.addEventListener("click", () => {
    navItems[2].querySelector("a").click();
  });
}
