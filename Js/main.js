import {
  User,
  ShowConfirmMessage,
  ShowAlert,
  HandleTotal,
  ToggleClassLiked,
  generateGUID,
} from "../Js/helper.js";

import { getToken } from "../Js/token.js";
let token = getToken();

window.defaultImage = "../imgs/d1.png";

let imageElement, removeImageBtn, imageInput, uploadButton;

window.delay = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

window.SetActivityType = function (type) {
  localStorage.setItem("activityType", type);

  var titleElement = document.querySelector(".left-section h3");

  if (titleElement) titleElement.textContent = type;
};

window.ClickProfileOption = function (type) {
  SetActivityType(type);

  window.location.href = `../Activity/Activity.html`;
};

function UnAuthenication() {
  window.location.href = "../Login_Signup/login_signup.html";

  alert("You need to log in");

  throw new Error("UN"); // Throw an error to stop further execution
}

window.Reload = async function () {
  ShowLoadingSection();

  ShowAlert("Warning", "Tye Again!", "warning");

  await window.RefreshPosts();

  RemoveLoadingSection();
};

window.CreateShowPostMediaSection = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  let typePost = post.obj.postType;

  let isActive = null;

  let mediaList = null;

  isActive = post.obj.isActive;

  let isTrashSection = document.getElementById("trash") ? true : false;

  if (isActive == isTrashSection || typePost == "OriginalDeleted") {
    await Reload();

    return;
  }

  if (typePost == "Normal") {
    mediaList = post.obj.media;
  } else if (typePost == "Shared") {
    mediaList = post.obj.originalPost.media;
  }

  await post.RefreshPostInfo();

  // if (mediaList == null || mediaList.length == 0) {
  //   RemoveLoadingSection();

  //   return;
  // }

  document.querySelector(".pop-section").innerHTML = `
  <div class="show-post-media position-fixed top-0 w-100 h-100">
    <div class="overlay position-absolute w-100 h-100"></div>

    <div
      class="container position-absolute top-50 start-50 translate-middle border border-3 p-0 bg-white rounded-3"
    >
      <div class="d-flex align-items-center p-2">
        <h4 class="modal-title flex-grow-1 text-center">Photos / Videos</h4>
        <button type="button" class="btn-close shadow-none "  
                onclick="RemoveSection(event,'.pop-section .show-post-media')">
        </button>
      </div>

      ${RenderMediaItems(mediaList)}

    </div>
  </div>
  `;

  RemoveLoadingSection();
};

function RenderMediaItems(mediaList) {
  let content = '<div class="content">';

  mediaList.forEach((item) => {
    content += `
        <div class="post-media-item rounded-3 overflow-hidden">
          ${generateMediaItem(item)}
        </div>`;
  });

  content += "</div>";

  return content;
}

window.CreatePost = function (post) {
  let type = post.postType;

  let originalPost = post.originalPost;

  let isActive = post.isActive;

  let dropDownSection = isActive
    ? `
  <button 
    class="btn border-0 p-0"
    data-bs-toggle="dropdown" data-bs-offset="-1,-3"
    onclick = "ClickOptionsPostBtn(event,${post.id})" 
  >
    <i class="fa-solid fa-ellipsis"></i>
  </button>

  <ul class="dropdown-menu">

    <li class="dropdown-item" role='button' 
        onclick="ClickSavePost(event,${post.id})">
    </li>

    <li class="dropdown-item" role='button'
        onclick="ClickEditPost(${post.id})">
      Edit
    </li>

    <li class="dropdown-item" role='button'
        onclick="ClickMoveToTrash(${post.id})">
          Move To Trash
    </li>     

  </ul>
  `
    : `       
  <button
      class="btn border-0 p-0"
      data-bs-toggle="dropdown"
      data-bs-offset="-1,-3"
      >
    <i class="fa-solid fa-ellipsis"></i>
  </button>

  <ul class="dropdown-menu">
    <li class="dropdown-item" role="button" 
        onclick="ClickRestorePost(${post.id})"
        >Restore
    </li>

    <li class="dropdown-item" role="button">Delete</li>
  </ul>
`;

  let postMediaSection = "";
  let originalPostMediaSection = "";

  if (type == "Normal") {
    let postMedia = post.media;

    if (postMedia.length) {
      postMediaSection = generateMediaSection(postMedia, post.id);
    }
  } else if (type == "Shared") {
    let originalPostMedia = originalPost.media;

    if (originalPostMedia.length) {
      originalPostMediaSection = generateMediaSection(
        originalPostMedia,
        post.id
      );
    }
  }

  let OriginalSection =
    type == "Normal"
      ? ``
      : type == "OriginalDeleted"
      ? `
      <div class="shared-post p-3 mb-3 border border-1 rounded-5">
        This post may have been deleted.
      </div>`
      : `
      <div class="shared-post p-3 mb-sm-3 mb-2 border border-1 rounded-5">

          <div class="user d-flex gap-sm-3 gap-2">

            <div class="image">
              <img
                class="w-100 h-100 rounded-circle"
                src="${GetImage(originalPost.imagePath)}"
                decoding="async" alt="${defaultImage}"
                onclick="LoadUserInfo(${originalPost.userId})"
                role="button"
              />
            </div>

            <div class="info  ">
              <h6 class="m-0" onclick="LoadUserInfo(${originalPost.userId})"
                role="button">${originalPost.userName}</h6>

              <small class="text-muted fs-7"
              onmouseover="this.innerText = HandleDate3('${
                originalPost.createdAt
              }');" 
              onmouseout="this.innerText = HandleDate('${
                originalPost.createdAt
              }');"
                >${HandleDate(originalPost.createdAt)}</small
              >
            </div>

          </div>

          <p class="text px-2 my-sm-3 my-2" style="word-break: break-word;">
          <span class="short-text" style="white-space: pre-wrap;">${
            originalPost.text != null
              ? originalPost.text.length > 399
                ? originalPost.text.substring(0, 399)
                : originalPost.text
              : ""
          }</span>
          <span class="more-text d-none" style="white-space: pre-wrap;">${
            originalPost.text != null && originalPost.text.length > 399
              ? originalPost.text.substring(399)
              : ""
          }</span>
          ${
            originalPost.text != null && originalPost.text.length > 399
              ? `<a href="javascript:void(0);" class="read-more" onclick="showMore(${post.id} , true)">Read more</a>`
              : ""
          }
        </p>

            ${originalPostMediaSection}

      </div>`;

  let likeBtn = isActive
    ? `
    <span class="like ${ToggleClassLiked(post.isLiked)}" 
          onclick="window.ClickLikeBtn(event,${post.id})" role="button">
      <i class="fa-solid fa-thumbs-up"></i>
    </span>
  `
    : `
  <span class="  ${ToggleClassLiked(post.isLiked)}">
    <i class="fa-regular fa-thumbs-up"></i>
  </span>
`;

  let shareBtn =
    isActive && !post.isSharedPostDeleted
      ? `
    <span class="share"
          onclick="ClickShareBtn(${post.id},${post.originalPostId})"
          role="button">
      <i class="fa-solid fa-share"></i>
    </span>
  `
      : `
  <span class="share">
    <i class="fa-solid fa-share"></i>
  </span>
`;

  return `
<div class="post bg-white mt-3 p-3 rounded-4" id=${post.id}>

  <div class="user d-flex gap-sm-3 gap-2">

    <div class="image">
      
      <img
        class="w-100 h-100 rounded-circle border"
        src="${GetImage(post.imagePath)}"
        decoding="async" alt="${defaultImage}"
        onclick="LoadUserInfo(${post.userId})"
        role='button'
      />
      
    </div>

    <div class="info">
  
      <h5 class="m-0" onclick="LoadUserInfo(${post.userId})" 
      role='button'>${post.userName}</h5>

      <small class="text-muted"
      onmouseover="this.innerText = HandleDate3('${post.createdAt}');" 
      onmouseout="this.innerText = HandleDate('${post.createdAt}');"
  
      >${HandleDate(post.createdAt)}</small>
    
    </div>

    <div class="dropdown ms-auto">${dropDownSection}</div>

  </div>

  <p class="text px-2 my-sm-3 my-2" style="word-break: break-word;">
    <span class="short-text" style="white-space: pre-wrap;">${
      post.text != null
        ? post.text.length > 537
          ? post.text.substring(0, 537)
          : post.text
        : ""
    }</span>
    <span class="more-text d-none" style="white-space: pre-wrap;">${
      post.text != null && post.text.length > 537
        ? post.text.substring(537)
        : ""
    }</span>
    ${
      post.text != null && post.text.length > 537
        ? `<a href="javascript:void(0);" class="read-more" onclick="showMore(${post.id})">Read more</a>`
        : ""
    }
  </p>

  ${postMediaSection}

  ${OriginalSection}
  
  <div class="action-buttons px-2 d-flex justify-content-between gap-3"  >
  
    <div class="" >
      <span class="shares me-1">${HandleTotal(post.countShares)}</span>
      ${shareBtn}
    </div>

    <div class="text-center" role="button"
      onclick="ClickCommentsBtn(${post.id})">
    
      <span class="comments me-1">
        ${HandleTotal(post.countComments)}
      </span>
    
      <span class="comment">
        <i class="fa-solid fa-comment-dots"></i>
      </span>

    </div>

    <div class="text-end">

      <span class="likes me-1" 
      onclick="ClickLikesBtn(${post.id})" role="button">
        ${HandleTotal(post.countLikes)}
      </span>

      ${likeBtn}

    </div>

  </div>

</div>
`;
};

window.showMore = function (postId, isSharedPostText = false) {
  var moreText = document.querySelector(
    `.content .post[id='${postId}'] ${
      isSharedPostText ? ".shared-post" : ""
    } .more-text`
  );
  var readMoreLink = document.querySelector(
    `.content .post[id='${postId}'] ${
      isSharedPostText ? ".shared-post" : ""
    } .read-more`
  );

  if (moreText.classList.contains("d-none")) {
    moreText.classList.remove("d-none");
    readMoreLink.innerHTML = "Show less";
  } else {
    moreText.classList.add("d-none");
    readMoreLink.innerHTML = "Read more";
  }
};

function generateMediaSection(mediaList, postId) {
  const maxVisibleMedia = 4;

  let mediaSection = `
  <div class="post-media-section my-3 d-flex gap-2" role='button'
        onclick ="CreateShowPostMediaSection(${postId})">
  `;

  mediaList.slice(0, maxVisibleMedia).forEach((item, index) => {
    mediaSection += `
        <div class="position-relative rounded-3 overflow-hidden">
          ${generateMediaItem(item, false)}
      `;

    if (index < 3) mediaSection += "</div>";
  });

  if (mediaList.length > maxVisibleMedia) {
    const remainingMediaCount = mediaList.length - maxVisibleMedia;

    mediaSection += `<div class="item-overlay">+${remainingMediaCount}</div>`;

    mediaSection += `</div>`;
  } else if (mediaList.length == maxVisibleMedia) {
    mediaSection += `</div>`;
  }

  mediaSection += `</div>`;

  return mediaSection;
}

function generateMediaItem(media, enable = true) {
  if (media.type === "image") {
    return `<img src="${media.path}" class=" w-100 h-100" alt="Media">`;
  } else if (media.type === "video") {
    let section = `
    <video src="${media.path}" class="w-100 h-100" ${
      enable ? "controls" : ""
    }></video>`;

    if (!enable) {
      section += `
      <div class="item-overlay">
        <i class="fa-solid fa-play"></i>
      </div>
      `;
    }

    return section;
  }
  return "";
}

export class Post {
  static posts = [];

  static async FetchPosts(filterRequest) {
    let response = new Response();

    try {
      let data = await fetch(
        "https://victus.runasp.net/api/Posts/GetAllPosts",
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filterRequest),
        }
      );

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        // response.error = (await data.json()).error;
        response.error = "Failed to load post.";
      }
    } catch (error) {
      response.error = "Failed to load post.";
    } finally {
      return response;
    }
  }

  static RenderPosts(postsContainer) {
    postsContainer.innerHTML = "";

    Post.posts.forEach((post) => {
      postsContainer.innerHTML += CreatePost(post);
    });
  }

  static async AddPost(postRequest) {
    let response = new Response();

    try {
      let data = await fetch(`https://victus.runasp.net/api/Posts/Create`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postRequest),
      });

      if (data.ok) {
        response.obj = await data.json();
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to add post.";
      console.log(error);
    } finally {
      return response;
    }
  }

  static async getPost(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/GetPost?id=${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to get post.";
    } finally {
      return response;
    }
  }

  static async EditPost(postRequest) {
    // text = encodeURIComponent(text);

    let response = new Response();

    try {
      let data = await fetch(`https://victus.runasp.net/api/Posts/Edit`, {
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postRequest),
      });

      if (data.ok) {
        // response.obj = await data.json();
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to edit post.";
    } finally {
      return response;
    }
  }

  static async ToggleActive(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/ToggleActive/${postId}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (data.ok) {
        response.obj = await data.json();
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to change the post status.";
    } finally {
      return response;
    }
  }

  static async SavedPost(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/SavedPost/SavePost/${postId}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (data.ok) {
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to save post.";
    } finally {
      return response;
    }
  }

  static async UnSavedPost(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/SavedPost/UnSavePost/${postId}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (data.ok) {
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to unsave post.";
    } finally {
      return response;
    }
  }

  constructor() {
    this.obj = null;
  }

  async init(postId) {
    let response = await Post.getPost(postId);

    if (!response.valid) {
      ShowAlert("Error", "Failed to load post.", "danger");
      return;
    }

    this.obj = response.obj;
  }

  async RefreshPostInfo() {
    let postId = this.obj.id;

    let post = this.obj;

    const totalLikesElement = document.querySelector(
      `.content .post[id='${postId}'] .likes`
    );

    const totalCommentsElement = document.querySelector(
      `.content .post[id='${postId}'] .comments`
    );

    const totalSharesElement = document.querySelector(
      `.content .post[id='${postId}'] .shares`
    );

    totalLikesElement.innerHTML = HandleTotal(post.countLikes);
    totalCommentsElement.innerHTML = HandleTotal(post.countComments);
    totalSharesElement.innerHTML = HandleTotal(post.countShares);
  }

  async RemoveLike() {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Like/RemoveLike/${this.obj.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to remove like";
    } finally {
      return response;
    }
  }

  async AddLike() {
    let response = new Response();
    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Like/AddLike/${this.obj.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to add like";
    } finally {
      return response;
    }
  }

  async GetLikers() {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/GetLikersOnPost/${this.obj.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed Get Likers";
    } finally {
      return response;
    }
  }

  async GetComments() {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/GetCommentsOnPost/${this.obj.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to load comments.";
    } finally {
      return response;
    }
  }

  async AddComment(text) {
    let response = new Response();

    text = encodeURIComponent(text);

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Comment/CreateComment/${this.obj.id}?text=${text}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to add comment.";
    } finally {
      return response;
    }
  }

  RenderComments() {
    let commentsContent = document.querySelector(".comments .content");

    commentsContent.innerHTML = "";

    this.comments.forEach((comment) => {
      CreateCommentNode(comment);
    });
  }

  async DeleteComment(commentId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Comment/DeleteComment/${commentId}`,
        {
          method: "delete",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (data.ok) {
        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to delete comment";
    } finally {
      return response;
    }
  }

  async EditComment(commentId, text) {
    let response = new Response();

    text = encodeURIComponent(text);

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Comment/UpdateComment/${commentId}/${text}`,
        {
          method: "put",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else if (data.status == 401) {
        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to edit comment.";
    } finally {
      return response;
    }
  }
}

window.currentUser = null;

let userRequest = null;

ShowLoadingSection();

await GetCurrentUser();

async function GetCurrentUser() {
  let user = new User();

  let response = await user.Profile();

  if (!response.valid) {
    UnAuthenication();

    return;
  }

  user.obj = response.obj;
  user.id = response.obj.id;

  currentUser = user;
}

window.GetImage = function (image) {
  return image != null ? image : defaultImage;
};

window.LoadUserInfo = async function (userId) {
  ShowLoadingSection();

  await delay(300);

  alert("S");

  // window.location.href = `../User/User.html?userId=${userId}`;
};

window.ClickEditProfileItem = function () {
  userRequest = {
    name: currentUser.obj.name,
    imagePath: currentUser.obj.imagePath,
  };

  document.querySelector(".pop-section").innerHTML = `
  <div class="edit-profile">
    <button
      class="d-none"
      data-bs-toggle="modal"
      data-bs-target="#edit-profile"
    ></button>

    <div class="modal fade" id="edit-profile" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title flex-grow-1 text-center">Edit Info</h4>
            <button
              type="button"
              class="btn-close shadow-none"
              data-bs-dismiss="modal"
              aria-label="Close"
              onclick="RemoveSection(event ,'.pop-section .edit-profile')"
            ></button>
          </div>

          <div class="modal-body pb-0 px-sm-3 px-2 text-center">
            <div class="image">
              <img
                alt=""
                class="rounded-5"
                decoding="async"
                alt="${defaultImage}"
              />
            </div>

            <p class="mt-3 mb-2">
              <a
                class="link-danger link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
              >
                Remove Image
              </a>
            </p>

            <div class="my-4 upload-image">
              <button class="btn btn-primary">Upload Image</button>
              <input
                class="form-control d-none"
                type="file"
                accept="image/*"
              />
            </div>

            <div class="input-group input-group-lg">
              <span class="input-group-text">Name</span>
              <input
                type="text"
                class="form-control"
                required
                maxlength="17"
                value="${currentUser.obj.name}"
              />
            </div>

            <div class="form-floating my-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                value="${currentUser.obj.email}"
                disabled
              />
              <label for="floatingInput" class="form-label"
                >Email address</label
              >
            </div>
          </div>

          <div class="modal-footer px-sm-3 px-2 fs-1">
            <button
              class="btn btn-primary flex-fill m-0"
              onclick="SaveEditProfile()"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  imageElement = document.querySelector(".edit-profile .image img");
  removeImageBtn = document.querySelector(".edit-profile p a");
  imageInput = document.querySelector(".edit-profile div input[type='file']");
  uploadButton = document.querySelector(".edit-profile .upload-image button");

  LoadImage();

  uploadButton.addEventListener("click", () => {
    imageInput.click();
  });

  imageInput.addEventListener("change", (e) => SetImage(e));

  removeImageBtn.addEventListener("click", (e) => RemoveImage(e));

  let userNameInput = document.querySelector(
    ".edit-profile input[type='text']"
  );

  let saveButton = document.querySelector(`.edit-profile .modal-footer button`);

  userNameInput.addEventListener("keyup", () => {
    let text = userNameInput.value.trim();

    let enable = text != "";

    enable
      ? saveButton.classList.remove("disabled")
      : saveButton.classList.add("disabled");
  });
};

let current, prev, change;

function LoadImage() {
  let image = window.GetImage(currentUser.obj.imagePath);

  imageElement.src = image;

  if (image == defaultImage) {
    removeImageBtn.classList.add("invisible");
  } else {
    removeImageBtn.classList.remove("invisible");
  }

  current = "";
  prev = "";
  change = false;
}

function SetImage(event) {
  const file = event.target.files[0];

  if (!file) return;

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = (e) => {
      imageElement.src = e.target.result;

      removeImageBtn.classList.remove("invisible");

      prev = current;
      current = e.target.result;
      change = true;
    };

    reader.readAsDataURL(file);
  } else {
    event.target.value = "";

    ShowAlert("Invalid", "Please select a valid image file.", "danger");
  }
}

function RemoveImage(event) {
  event.preventDefault();
  imageElement.src = defaultImage;
  imageInput.value = "";

  userRequest.imagePath = null;

  removeImageBtn.classList.add("invisible");
}

async function HandleImage() {
  const file = imageInput.files[0];

  if (!change || prev == current || !file) return true;

  const cloudName = "dw91ky7d4";
  const uploadPreset = "n4wm4jwm";
  const folderName = "blog/Profile";

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", folderName);

  try {
    let result = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (result.ok) {
      let data = await result.json();

      userRequest.imagePath = data.secure_url;

      change = false;

      return true;
    } else {
      ShowAlert("Error", "Error uploading image.", "danger");

      return false;
    }
  } catch (error) {
    ShowAlert("Error", "Error uploading image.", "danger");
    return false;
  }
}

async function CheckUserName() {
  let userNameInput = document.querySelector(
    ".edit-profile input[type='text']"
  );
  let userNameValue = userNameInput.value.trim();

  if (userNameValue == "") {
    ShowAlert("Invalid", "Name is required.", "danger");

    return false;
  }

  if (userNameValue != currentUser.obj.name) {
    let response = await User.IsNameFound(userNameValue);

    if (!response.valid) {
      ShowAlert("Error", "Name Is Existing", "danger");

      return false;
    }

    userRequest.name = userNameValue;
  }

  return true;
}

window.SaveEditProfile = async function () {
  ShowLoadingSection();

  let checkName = await CheckUserName();

  if (!checkName) {
    RemoveLoadingSection();

    return;
  }

  let checkImage = await HandleImage();

  if (!checkImage) {
    RemoveLoadingSection();

    return;
  }

  let response = await currentUser.SaveUserInfo(userRequest);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    change = true;
    prev = null;
    current = "";

    RemoveLoadingSection();

    return;
  }

  await GetCurrentUser();

  await RefreshPage();

  ShowAlert("Done", "changes saved", "success");

  RemoveLoadingSection();
};

window.ClickChangePasswordItem = function () {
  document.querySelector(".pop-section").innerHTML = `
  <div class="change-password">
    <button
      class="d-none"
      data-bs-toggle="modal"
      data-bs-target="#change-password"
    ></button>

    <div class="modal fade" id="change-password" data-bs-backdrop="static">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4
              class="modal-title flex-grow-1 text-center text-primary fw-bolder"
            >
              Change Your Password
            </h4>
            <button
              type="button"
              class="btn-close shadow-none "
              data-bs-dismiss="modal"
              aria-label="Close"
              onclick="RemoveSection(event ,'.pop-section .change-password')"
            ></button>
          </div>

          <div class="modal-body">
            <div>
              <label for="cp" class="form-label fs-5"
                >Current Password :</label
              >

              <input
                oninput="HandleInput(event)"
                id="cp"
                type="password"
                class="form-control"
                aria-describedby="emailHelp"
                maxlength="13"
              />

              <p class="form-text text-danger mt-2">Must be at least 7 characters.</p>
            </div>

            <div class="my-4">
              <label for="np" class="form-label fs-5">New Password :</label>

              <input
                oninput="HandleInput(event)"
                class="form-control"
                id="np"
                type="password"
                maxlength="13"
              />

              <p class="form-text text-danger mt-2">Must be at least 7 characters.</p>
            </div>
          </div>

          <div class="modal-footer">
            <button
              class="change btn btn-primary flex-fill disabled"
              onclick="ChangePassword(event)"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  RemoveLoadingSection();
};

// oninput="this.value = this.value.trim()"

// window.HandleSpace = function (e) {
//   e.currentTarget.value = e.currentTarget.value.trim();
// };

window.HandleInput = function (e) {
  let input = e.currentTarget;
  let ErrorElement = input.nextElementSibling;

  let value = input.value.trim();
  input.value = value;

  let error = null;

  if (value.length < 7) error = "Must be at least 7 characters.";

  if (error != null) {
    ErrorElement.classList.remove("d-none");

    ErrorElement.innerHTML = error;
  } else if (error == null) {
    ErrorElement.classList.add("d-none");
  }

  EnableChangeButton();
};

function EnableChangeButton() {
  let changePasswordBtn = document.querySelector(".change-password .change");

  let errors = document.querySelectorAll(".change-password p.d-none");

  errors.length == 2
    ? changePasswordBtn.classList.remove("disabled")
    : changePasswordBtn.classList.add("disabled");
}

window.ChangePassword = async function () {
  ShowLoadingSection();

  let currentPasswordInput = document.getElementById("cp");

  let currentPassword = currentPasswordInput.value.trim();

  let newPasswordInput = document.getElementById("np");

  let newPassword = newPasswordInput.value.trim();

  let response = await currentUser.ChangePassword(currentPassword, newPassword);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  let closeBtn = document.querySelector(".change-password .btn-close");

  closeBtn.click();

  RemoveLoadingSection();

  ShowAlert("Done", "changes saved", "success");
};

let previewContainer = null;

let SelectedFiles = [];
let MediaList = [];

window.ManagePostSection = async function (postId = null) {
  let post = null;

  let uploadMediaSection = `
    <div class="previewContainer my-3" role='button'></div>

    <div class="upload-media text-center">
      <button class="btn btn-primary">Upload Media</button>
      <input class="d-none" type="file" multiple accept="image/*,video/*" />
    </div>
`;

  if (postId) {
    post = new Post();
    await post.init(postId);

    if (post.obj.postType != "Normal") {
      uploadMediaSection = "";
    }
  }

  document.querySelector(".pop-section").innerHTML = `
    <div class="manage-post">
      <button
        class="d-none"
        data-bs-toggle="modal"
        data-bs-target="#manage-post"
      ></button>

      <div
        class="modal fade"
        id="manage-post"
        data-bs-backdrop="static" 
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">

              <h4 class="modal-title">${
                postId == null ? "Create" : "Edit"
              } Post</h4>

              <button
                type="button"
                class="btn-close shadow-none "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-3">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="${defaultImage}"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>

              </div>

              <textarea
                class="w-100 fs-5 border-0"
                rows="11"
                placeholder="Say something about this..."
              ></textarea>

              ${uploadMediaSection}

            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="post-btn btn btn-primary w-100 fs-5 disabled">
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;

  let postInput = document.querySelector(".manage-post textarea");

  if (postId == null || post.obj.postType == "Normal") {
    postInput.addEventListener("keyup", EnablePostBtn);

    previewContainer = document.querySelector(".manage-post .previewContainer");

    previewContainer.addEventListener("click", CreatePostMediaSection);

    let fileInput = document.querySelector(
      ".manage-post .upload-media input[type='file']"
    );

    fileInput.addEventListener("change", async (e) => await SetMedia(e));

    let uploadButton = document.querySelector(
      ".manage-post .upload-media button"
    );

    uploadButton.addEventListener("click", () => {
      fileInput.click();
    });
  }

  let postBtn = document.querySelector(".manage-post .post-btn");

  if (postId == null) {
    postBtn.addEventListener("click", async () => {
      await AddPost();
    });
  } else {
    let text = post.obj.text != null ? post.obj.text : "";

    postInput.value = text;

    if (post.obj.postType == "Normal") {
      EnablePostBtn();

      if (post.obj.media.length) {
        MediaList.push(...post.obj.media);

        await RenderMediaPreview();
      }
    } else {
      postBtn.classList.remove("disabled");
    }

    postBtn.addEventListener("click", async (_) => {
      await EditPost(postId);
    });
  }

  let closeBtn = document.querySelector(".manage-post .btn-close");

  closeBtn.addEventListener("click", (_) => {
    document.querySelector(`.pop-section .manage-post`).remove();
    SelectedFiles = [];
    MediaList = [];
  });
};

function EnablePostBtn() {
  let postInput = document.querySelector(".pop-section .manage-post textarea");
  let postBtn = document.querySelector(".pop-section .manage-post .post-btn");

  let enable = postInput.value.trim() != "" || MediaList.length != 0;

  enable
    ? postBtn.classList.remove("disabled")
    : postBtn.classList.add("disabled");
}

function CreatePostMediaSection() {
  ShowLoadingSection();

  document.querySelector(".pop-section2").innerHTML = `
  <div class="manage-post-media position-fixed top-0 w-100 h-100">
    <div class="overlay position-absolute w-100 h-100"></div>

    <div
      class="container position-absolute top-50 start-50 translate-middle border border-3 p-0 bg-white rounded-3"
    >
      <div class="d-flex align-items-center p-2">
        <h4 class="modal-title flex-grow-1 text-center">Photos / Videos</h4>
        <button type="button" class="btn-close shadow-none"
                onclick="RemoveSection(event,'.pop-section2 .manage-post-media')">
        </button>
      </div>

      <div class="content"></div>
    </div>
  </div>
  `;

  RenderMediaItems2();

  RemoveLoadingSection();
}

function RenderMediaItems2() {
  const postMediaContent = document.querySelector(
    ".manage-post-media .content"
  );

  postMediaContent.innerHTML = "";

  MediaList.forEach((media, index) => {
    const mediaElement = createMediaElement(media.path, media.type);

    mediaElement.classList.add("media-item", "position-relative");

    const removeButton = document.createElement("button");
    removeButton.classList.add(
      "remove-media-button",
      "btn-close",
      "position-absolute",
      "top-0",
      "end-0"
    );

    mediaElement.appendChild(removeButton);

    postMediaContent.appendChild(mediaElement);

    removeButton.addEventListener("click", () => removeMediaElement(index));
  });
}

function removeMediaElement(index) {
  ShowLoadingSection();

  const media = MediaList.splice(index, 1)[0];

  const fileIndex = SelectedFiles.findIndex((file) => {
    return file.Identifier == media.Identifier;
  });

  if (fileIndex != -1) SelectedFiles.splice(fileIndex, 1);

  // console.log(MediaList);
  // console.log(SelectedFiles);

  RenderMediaItems2();

  RenderMediaPreview();

  EnablePostBtn();

  RemoveLoadingSection();
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      resolve(e.target.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function SetMedia(e) {
  const files = Object.values(e.target.files).filter((f) => {
    return f.type.startsWith("image/") || f.type.startsWith("video/");
  });

  e.target.value = "";

  if (files.length == 0) return;

  ShowLoadingSection();

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    let guid = generateGUID();

    file.Identifier = guid;

    SelectedFiles.push(file);

    const dataUrl = await readFileAsDataURL(file);
    MediaList.push({
      path: dataUrl,
      type: file.type.startsWith("image/") ? "image" : "video",
      Identifier: guid,
    });
  }

  await RenderMediaPreview();

  EnablePostBtn();

  RemoveLoadingSection();
}

function RenderMediaPreview() {
  const maxPreviews = 4;

  previewContainer.innerHTML = "";

  const totalFiles = MediaList.length;

  for (let i = 0; i < Math.min(totalFiles, maxPreviews); i++) {
    const media = MediaList[i];

    const mediaElement = createMediaElement(media.path, media.type, false);
    mediaElement.classList.add(
      "preview-item",
      "position-relative",
      "rounded-3",
      "overflow-hidden"
    );

    previewContainer.appendChild(mediaElement);
  }

  if (totalFiles > maxPreviews) {
    const remainingCount = totalFiles - maxPreviews;

    const showMoreOverlay = document.createElement("div");
    showMoreOverlay.classList.add("item-overlay");
    showMoreOverlay.textContent = `+${remainingCount}`;

    const lastMediaItem = previewContainer.lastElementChild;
    lastMediaItem.appendChild(showMoreOverlay);
  }
}

function createMediaElement(path, type, enable = true) {
  const mediaItem = document.createElement("div");

  if (type == "image") {
    const img = document.createElement("img");
    img.src = path;
    mediaItem.appendChild(img);
  } else if (type == "video") {
    const video = document.createElement("video");
    video.src = path;
    video.controls = enable;
    mediaItem.appendChild(video);
  }

  return mediaItem;
}

async function uploadMedia() {
  const cloudName = "dw91ky7d4";
  const uploadPreset = "n4wm4jwm";
  const folderName = "blog/Media";
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  for (const file of SelectedFiles) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("folder", folderName);

    try {
      const result = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (result.ok) {
        let data = await result.json();

        const media = MediaList.find((media) => {
          return file.Identifier == media.Identifier;
        });

        media.path = data.secure_url;
      } else {
        ShowAlert(
          "Error",
          "Failed to upload certain media. Please try again.",
          "danger"
        );
        return false;
      }
    } catch (error) {
      ShowAlert("Error", "Failed to upload media. Please try again.", "danger");

      return false;
    }
  }

  return true;
}

window.AddPost = async function () {
  ShowLoadingSection();

  let postInput = document.querySelector(".manage-post textarea");

  let text = postInput.value;

  text = text.trim() == "" ? null : text;

  let checkUploadMedia = await uploadMedia();

  if (!checkUploadMedia) {
    RemoveLoadingSection();

    return;
  }

  let postRequest = {
    text: text,
    media: MediaList,
  };

  let response = await Post.AddPost(postRequest);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  await RefreshPosts();

  let closeBtn = document.querySelector(".manage-post .btn-close");

  closeBtn.click();

  RemoveLoadingSection();
};

window.ClickOptionsPostBtn = async function (event, postId) {
  let menu = event.currentTarget.nextElementSibling;

  if (!menu.classList.contains("show")) return;

  ShowLoadingSection();

  let options = menu.children;

  await delay(199);

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    menu.classList.add("d-none");

    await Reload();

    return;
  }

  post.RefreshPostInfo();

  options[0].textContent = post.obj.isSaved ? "UnSave" : "Save";

  if (currentUser.id == post.obj.userId) {
    options[1].classList.remove("d-none");
    options[2].classList.remove("d-none");
  } else {
    options[1].classList.add("d-none");
    options[2].classList.add("d-none");
  }

  RemoveLoadingSection();
};

window.ClickSavePost = async function (event, postId) {
  let element = event.currentTarget;

  let text = element.textContent;

  let post = new Post();
  await post.init(postId);

  let isActive = post.obj.isActive;

  let isSaved = post.obj.isSaved;

  if (
    !isActive ||
    (text == "UnSave" && !isSaved) ||
    (text == "Save" && isSaved)
  ) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  ShowConfirmMessage(post.obj.isSaved ? "Unsave post" : "Save Post");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await ToggleSavedPost(postId);
  };
};

window.ToggleSavedPost = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  let closeBtn = document.querySelector(".confirm-message .btn-close");

  let text = document.querySelector(
    ".confirm-message .modal-title"
  ).textContent;

  let isActive = post.obj.isActive;

  let isSaved = post.obj.isSaved;

  closeBtn.click();

  if (
    !isActive ||
    (text == "Unsave post" && !isSaved) ||
    (text == "Save Post" && isSaved)
  ) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  let response = post.obj.isSaved
    ? await Post.UnSavedPost(postId)
    : await Post.SavedPost(postId);

  RemoveLoadingSection();

  if (!response.valid) ShowAlert("Error", response.error, "danger");
};

window.ClickEditPost = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  await ManagePostSection(postId);

  let toggleModelBtn = document.querySelector(".manage-post button");

  toggleModelBtn.click();

  RemoveLoadingSection();
};

window.EditPost = async function (postId) {
  ShowLoadingSection();

  let closeBtn = document.querySelector(".manage-post .btn-close");

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    closeBtn.click();

    await Reload();

    return;
  }

  let postInput = document.querySelector(".manage-post textarea");

  let text = postInput.value;

  text = text.trim() == "" ? null : text;

  await uploadMedia();

  let postRequest = {
    id: postId,
    text: text,
    media: MediaList,
  };

  let response = await Post.EditPost(postRequest);

  if (!response.valid) {
    RemoveLoadingSection();

    ShowAlert("Error", response.error, "danger");

    return;
  }

  closeBtn.click();

  await window.RefreshPosts();

  RemoveLoadingSection();
};

let headerActivePost = null;

window.ClickMoveToTrash = async function (postId) {
  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    await Reload();

    return;
  }

  headerActivePost = "Trash";

  post.RefreshPostInfo();

  ShowConfirmMessage("Move post to trash.");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await ToggleActivePost(postId);
  };
};

window.ClickRestorePost = async function (postId) {
  let post = new Post();
  await post.init(postId);

  if (post.obj.isActive) {
    await Reload();

    return;
  }

  headerActivePost = "Restore";

  ShowConfirmMessage("Restore post to profile.");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await ToggleActivePost(postId);
  };
};

async function ToggleActivePost(postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  let closeBtn = document.querySelector(".confirm-message .btn-close");

  let isActive = post.obj.isActive;

  closeBtn.click();

  if (
    headerActivePost == null ||
    (!isActive && headerActivePost == "Trash") ||
    (isActive && headerActivePost == "Restore")
  ) {
    await Reload();

    return;
  }

  let response = await Post.ToggleActive(postId);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  await window.RefreshPosts();

  RemoveLoadingSection();
}

let isClickLike = false;

window.ClickLikeBtn = async function (event, postId) {
  if (isClickLike) {
    return;
  }

  isClickLike = true;

  const clickedElement = event.currentTarget;

  let post = new Post();
  await post.init(postId);

  let isLiked = post.obj.isLiked;

  let isLikedClass = clickedElement.classList.contains("liked");

  if (!post.obj.isActive || isLiked != isLikedClass) {
    await Reload();

    isClickLike = false;

    return;
  }

  let response = isLiked ? await post.RemoveLike() : await post.AddLike();

  isClickLike = false;

  if (response.valid) {
    clickedElement.classList.toggle("liked");

    post.obj.countLikes += isLiked ? -1 : 1;

    post.RefreshPostInfo();
  } else {
    ShowAlert("Error", response.error, "danger");
  }
};

window.ClickLikesBtn = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  let isActive = post.obj.isActive;

  let isTrashSection = document.getElementById("trash") ? true : false;

  if (isActive == isTrashSection) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  let response = await post.GetLikers();

  if (!response.valid) {
    ShowAlert("Error", "Failed to display likers", "danger");

    RemoveLoadingSection();

    return;
  }

  let likers = response.obj;

  CreateLikersSection(likers.length);

  likers.forEach((liker) => {
    CreateLikerNode(liker);
  });

  RemoveLoadingSection();
};

function CreateLikersSection(totalLikes) {
  document.querySelector(".pop-section").innerHTML = `
  <div class="likers position-fixed top-0 w-100 h-100">
  
    <div class="overlay position-absolute w-100 h-100"></div>

      <div class="container position-absolute top-50 start-50 translate-middle 
        border border-3 p-0 bg-white rounded-3" >

        <div class="d-flex align-items-center bg-primary p-3 position-sticky top-0">

          <h2 class="flex-grow-1 ps-1 text-white m-0">Total : ${totalLikes}</h2>
        
          <button
            type="button"
            class="btn-close shadow-none "
            aria-label="Close"
            onclick="RemoveSection(event , '.pop-section .likers')"
          ></button>

        </div>

        <div class="content"></div>

      </div>
    </div>
    `;

  document.body.classList.add("hide-scrollbar");
}

function CreateLikerNode(liker) {
  let content = document.querySelector(".likers .content");
  content.innerHTML += `
  <div class="liker d-flex gap-sm-3 gap-2 align-items-center h3 m-0 p-sm-3 p-2"
      role="button" id =${liker.id}
      onclick="LoadUserInfo(${liker.id})"
      >

    <div class="image rounded-5 overflow-hidden">
      <img src="${GetImage(
        liker.imagePath
      )}" decoding="async" alt="${defaultImage}"
      class="w-100 h-100" />
    </div>

      ${liker.name}
    
  </div>
  `;
}

let post;

window.ClickCommentsBtn = async function (postId) {
  ShowLoadingSection();

  post = new Post();
  await post.init(postId);

  let isActive = post.obj.isActive;

  let isTrashSection = document.getElementById("trash") ? true : false;

  if (isActive == isTrashSection) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  let response = await post.GetComments();

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  post.comments = response.obj;

  CreateCommentsSection(post.comments.length, isActive);

  post.RenderComments();

  RemoveLoadingSection();
};

function CreateCommentsSection(totalComments, enableCreateComment = true) {
  let addCommentSection = enableCreateComment
    ? `
  <div class="create-comment border rounded-3 p-sm-3 p-2 d-flex align-items-start gap-sm-3 gap-2" >
      
    <div class="image rounded-circle overflow-hidden">
      <img src="${GetImage(
        currentUser.obj.imagePath
      )}" decoding="async" alt="${defaultImage}"/>
    </div>

    <textarea
      class="flex-grow-1 border-0"
      rows="3"
      placeholder="Say something about this..."
      onkeyup = "window.TypeComment(event,'.comments .create-comment button')"
    ></textarea>

    <button class="btn btn-outline-primary rounded-4 disabled" 
      onclick="window.PostComment()" 
    >
      <i class="fa-solid fa-paper-plane"></i>    
    </button>

  </div>
  `
    : ``;

  document.querySelector(".pop-section").innerHTML = `
  <div class="comments position-fixed top-0 w-100 h-100">

    <div class="overlay position-absolute w-100 h-100"></div>

    <div class="container position-absolute top-50 start-50 
    translate-middle border border-3 p-0 bg-white rounded-3" >

      <div class="d-flex align-items-center bg-primary p-3">

        <h2 class="flex-grow-1 ps-1 text-white m-0">
          Total : ${totalComments}
        </h2>

        <button
          type="button"
          class="btn-close shadow-none "
          aria-label="Close"
          onclick="RemoveSection(event,'.pop-section .comments')"
        ></button>

      </div>

      <div class="content"></div>

      ${addCommentSection}

    </div>
  </div>
    `;

  document.body.classList.add("hide-scrollbar");
}

function CreateCommentNode(comment) {
  let content = document.querySelector(".comments .content");

  let addOptionsComment =
    currentUser.id == comment.userId && post.obj.isActive
      ? `
    <div class="dropdown mb-4 align-self-center">

      <button 
        class="btn border-0 p-0"
        data-bs-toggle="dropdown" data-bs-offset="19, -51" 
      >
        <i class="fa-solid fa-ellipsis"></i>
      </button>

      <ul class="dropdown-menu">

        <li class="dropdown-item" role='button'
            onclick="ClickEditComment(${comment.id})">
          Edit
        </li>

        <li class="dropdown-item" role='button'
            onclick="ClickDeleteComment(${comment.id})">
              Delete
        </li>     

      </ul>

    </div>`
      : "";

  content.innerHTML += `
  <div class="comment d-flex gap-sm-3 gap-2 p-3 pe-4">

    <div class="image">
      <img src="${GetImage(comment.imagePath)}" alt="${defaultImage}"
            class="rounded-circle border"
            role="button" 
            onclick="LoadUserInfo(${comment.userId})"
      />
    </div>

    <div>
      <div class="info rounded-3 py-2 ps-2 pe-3 mb-1">
        <h5 class="mb-1">${comment.userName}</h5>

        <p class="ps-1 mb-0" style="white-space: pre-wrap;word-break: break-word;">${
          comment.text
        }</p>
      </div>

      <small class="text-muted ps-1"
      onmouseover="this.innerText = HandleDate3('${comment.createdAt}');" 
      onmouseout="this.innerText = HandleDate2('${comment.createdAt}');"
      >${HandleDate2(comment.createdAt)}</small>

    </div>

    ${addOptionsComment}

  </div>
  `;
}

window.TypeComment = function (event, buttonName) {
  let textarea = event.currentTarget;

  // textarea.style.height = textarea.scrollHeight + "px";

  let text = textarea.value.trim();

  let button = document.querySelector(`${buttonName}`);

  let enable = text != "";

  enable
    ? button.classList.remove("disabled")
    : button.classList.add("disabled");
};

window.PostComment = async function () {
  ShowLoadingSection();

  let postId = post.obj.id;

  await post.init(postId);

  let isActive = post.obj.isActive;

  if (!isActive) {
    let closeBtn = document.querySelector(".comments h3.close-btn");

    closeBtn.click();

    await Reload();

    return;
  }

  let commentInput = document.querySelector(".comments textarea");

  let response = await post.AddComment(commentInput.value);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  ClickCommentsBtn(postId);

  RemoveLoadingSection();
};

window.ClickEditComment = async function (commentId) {
  ShowLoadingSection();

  let postId = post.obj.id;

  await post.init(postId);

  let isActive = post.obj.isActive;

  if (!isActive) {
    let closeBtn = document.querySelector(".comments h3.close-btn");

    closeBtn.click();

    await Reload();

    return;
  }

  EditcommentSection(commentId);

  let toggleModelBtn = document.querySelector(".edit-comment button");

  toggleModelBtn.click();

  RemoveLoadingSection();
};

let comment;

function EditcommentSection(commentId) {
  comment = post.comments.find((e) => {
    return e.id == commentId;
  });

  document.querySelector(".pop-section2").innerHTML = `
    <div class="edit-comment">
      <button
        class="d-none"
        data-bs-toggle="modal"
        data-bs-target="#edit-comment"
      ></button>

      <div
        class="modal fade"
        id="edit-comment"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >

        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">

              <h4 class="modal-title">Edit Comment</h4>
              <button
                type="button"
                class="btn-close shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                onclick="RemoveSection(event,'.pop-section2 .edit-comment')"
              ></button>

            </div>

            <div class="modal-body">

              <div class="mb-3 d-flex align-items-center">

                <div class="image me-sm-3 me-2">
                  <img
                    class="rounded-circle border border-primary"
                    src="${GetImage(
                      currentUser.obj.imagePath
                    )}" decoding="async" alt="${defaultImage}"
                  />
                </div>

                <h5 class="mb-0">${currentUser.obj.name}</h5>

              </div>

              <textarea
                class="w-100 fs-5 border-0"
                rows="5"
                placeholder="Say something about this..."
                onkeyup = "window.TypeComment(event,'.edit-comment .modal-footer button')"
              >${comment.text}</textarea>

            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary w-100 fs-5"
                onclick="window.EditComment(${commentId})"
              >
                Post
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
    `;
}

window.EditComment = async function (commentId) {
  ShowLoadingSection();
  let closeEditCommentBtn = document.querySelector(".edit-comment .btn-close");

  let postId = post.obj.id;

  await post.init(postId);

  let isActive = post.obj.isActive;

  if (!isActive) {
    closeEditCommentBtn.click();

    let closeBtn = document.querySelector(".comments h3.close-btn");

    closeBtn.click();

    await Reload();

    return;
  }

  let postInput = document.querySelector(".edit-comment textarea");

  let text = postInput.value.trim();

  let response = await post.EditComment(commentId, text);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  ClickCommentsBtn(postId);

  closeEditCommentBtn.click();

  RemoveLoadingSection();
};

window.ClickDeleteComment = async function (commentId) {
  let postId = post.obj.id;

  await post.init(postId);

  let isActive = post.obj.isActive;

  if (!isActive) {
    let closeBtn = document.querySelector(".comments h3.close-btn");

    closeBtn.click();

    await Reload();

    return;
  }

  ShowConfirmMessage("Delete Comment");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await DeleteComment(commentId);
  };
};

async function DeleteComment(commentId) {
  ShowLoadingSection();

  let closeBtn = document.querySelector(".confirm-message .btn-close");

  closeBtn.click();

  let postId = post.obj.id;

  await post.init(postId);

  let isActive = post.obj.isActive;

  if (!isActive) {
    let closeBtn = document.querySelector(".comments h3.close-btn");

    closeBtn.click();

    await Reload();

    return;
  }

  let response = await post.DeleteComment(commentId);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  ClickCommentsBtn(postId);

  RemoveLoadingSection();
}

window.ClickShareBtn = async function (postId, originalPostId) {
  ShowLoadingSection();

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  if (originalPostId == null) CreateShareSection(postId);
  else CreateShareSection(originalPostId);

  let toggleModelBtn = document.querySelector(".share button");

  toggleModelBtn.click();

  RemoveLoadingSection();
};

function CreateShareSection(postId) {
  document.querySelector(".pop-section").innerHTML = `
  <div class="share">
    <button
      class ='d-none' data-bs-toggle="modal"
      data-bs-target="#shareModal">
    </button>

    <div
      class="modal fade"
      id="shareModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      role="dialog"
    >

      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-3 shadow">
          <div class="modal-header fs-5">
            <div class="Image me-3">
              <img
                class="rounded-circle border border-primary"
                src="${GetImage(
                  currentUser.obj.imagePath
                )}" decoding="async" alt="${defaultImage}"
              />
            </div>
            ${currentUser.obj.name}
          </div>

          <div class="modal-body">

            <textarea
              class="share-input border border-white-50 p-3 w-100 rounded-3"
              placeholder="Say something about this..."
              rows = "9"
            ></textarea>

          </div>

          <div
            class="modal-footer d-flex justify-content-between border-top-0"
          >
            <button
              type="button"
              class="close btn btn-secondary px-3"
              data-bs-dismiss="modal"
              onclick="RemoveSection(event , '.pop-section .share')"

            >
              Close
            </button>

            <button type="button" class="btn btn-primary px-3 btn-share"
                    onclick="window.SharePost(${postId})"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}

window.SharePost = async function (postId) {
  ShowLoadingSection();

  let closeBtn = document.querySelector(".share button.close");

  let post = new Post();
  await post.init(postId);

  if (!post.obj.isActive) {
    closeBtn.click();

    await Reload();

    return;
  }

  let shareInput = document.querySelector(".share textarea");

  let text = shareInput.value.trim();

  text = text == "" ? null : text;

  let postRequest = {
    text: text,
    originalPostId: postId,
  };

  let response = await Post.AddPost(postRequest);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  closeBtn.click();

  await window.RefreshPosts();

  RemoveLoadingSection();
};

// When you navigate from one HTML page to another, All JavaScript variables,
// including global variables like those on window, are reset.
