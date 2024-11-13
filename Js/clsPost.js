import {
  Response,
  ShowConfirmMessage,
  ShowAlert,
  HandleTotal,
  generateGUID,
  ToggleClassLiked,
} from "../Js/helper.js";

import {} from "../Js/clsComment.js";
import {} from "../Js/clsLike.js";

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

  static async getPostInfo(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/getPostInfo?id=${postId}`,
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

  static async DeletePost(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/DeletePost/${postId}`,
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
      response.error = "Failed to delete post" + error;
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

  async initInfo(postId) {
    let response = await Post.getPostInfo(postId);

    if (!response.valid) {
      ShowAlert("Error", "Failed to load post.", "danger");
      return;
    }

    this.obj = response.obj;
  }

  async RefreshPostInfo() {
    let post = this.obj;

    let postId = post.id;

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
}

//

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

    <li class="dropdown-item" role="button" onclick="ClickDeletePost(${post.id})">
      Delete
    </li>
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
    isActive && type != "OriginalDeleted"
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

//

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

              <h4 class="modal-title flex-grow-1 text-center">${
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

        RenderMediaPreview();
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

  RenderMediaPreview();

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

async function AddPost() {
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

  let closeBtn = document.querySelector(".manage-post .btn-close");

  closeBtn.click();

  window.RefreshPosts(); // wait

  RemoveLoadingSection();
}

window.ClickOptionsPostBtn = async function (event, postId) {
  let menu = event.currentTarget.nextElementSibling;

  if (!menu.classList.contains("show")) return;

  menu.classList.add("d-none");

  ShowLoadingSection();

  let options = menu.children;

  // await delay(199);

  let post = new Post();
  await post.initInfo(postId);

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

  menu.classList.remove("d-none");

  RemoveLoadingSection();
};

window.ClickSavePost = async function (event, postId) {
  ShowLoadingSection();

  let element = event.currentTarget;

  let text = element.textContent;

  let post = new Post();
  await post.initInfo(postId);

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

  RemoveLoadingSection();
};

window.ToggleSavedPost = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.initInfo(postId);

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
  await post.initInfo(postId);

  if (!post.obj.isActive) {
    await Reload();

    return;
  }

  post.RefreshPostInfo();

  await window.ManagePostSection(postId);

  let toggleModelBtn = document.querySelector(".manage-post button");

  toggleModelBtn.click();

  RemoveLoadingSection();
};

async function EditPost(postId) {
  ShowLoadingSection();

  let closeBtn = document.querySelector(".manage-post .btn-close");

  let post = new Post();
  await post.initInfo(postId);

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

  window.RefreshPosts(); // wait

  RemoveLoadingSection();
}

let headerActivePost = null;

window.ClickMoveToTrash = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.initInfo(postId);

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

  RemoveLoadingSection();
};

window.ClickRestorePost = async function (postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.initInfo(postId);

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

  RemoveLoadingSection();
};

async function ToggleActivePost(postId) {
  ShowLoadingSection();

  let post = new Post();
  await post.initInfo(postId);

  let closeBtn = document.querySelector(".confirm-message .btn-close");

  closeBtn.click();

  let isActive = post.obj.isActive;

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

window.ClickShareBtn = async function (postId, originalPostId) {
  ShowLoadingSection();

  let post = new Post();
  await post.initInfo(postId);

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
  await post.initInfo(postId);

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

  window.RefreshPosts(); // wait

  RemoveLoadingSection();
};

window.ClickDeletePost = async function (postId) {
  ShowLoadingSection();

  var post = new Post();

  await post.initInfo(postId);

  if (post.obj.isActive) {
    await Reload();

    return;
  }

  ShowConfirmMessage("Delete Post");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await DeletePost(postId);
  };

  RemoveLoadingSection();
};

async function DeletePost(postId) {
  ShowLoadingSection();

  var post = new Post();

  await post.initInfo(postId);

  let closeBtn = document.querySelector(".confirm-message .btn-close");

  closeBtn.click();

  let isActive = post.obj.isActive;

  if (isActive) {
    await Reload();

    return;
  }

  let response = await Post.DeletePost(postId);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  await window.RefreshPosts();

  RemoveLoadingSection();
}
