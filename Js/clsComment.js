import { Post } from "../Js/clsPost.js";
import { Response, ShowConfirmMessage, ShowAlert } from "../Js/helper.js";

class Comment {
  static comments = [];

  static async GetComments(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/GetCommentsOnPost/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.ok) {
        this.comments = await data.json();

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

  static async AddComment(postId, text) {
    console.log(text);
    let response = new Response();

    text = encodeURIComponent(text);

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Comment/CreateComment/${postId}?text=${text}`,
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

  static RenderComments() {
    let commentsContent = document.querySelector(".comments .content");

    commentsContent.innerHTML = "";

    this.comments.forEach((comment) => {
      window.CreateCommentNode(comment);
    });
  }

  static async EditComment(commentId, text) {
    let response = new Response();

    text = encodeURIComponent(text);

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Comment/UpdateComment/${commentId}?text=${text}`,
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

  static async DeleteComment(commentId) {
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

  let response = await Comment.GetComments(post.obj.id);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  CreateCommentsSection(Comment.comments.length, isActive);

  Comment.RenderComments();

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

window.CreateCommentNode = function (comment) {
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
};

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
  if (post.obj == null) return;

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

  if (commentInput.value == "") {
    ShowAlert("Error", "Text Required", "danger");

    RemoveLoadingSection();

    return;
  }

  let response = await Comment.AddComment(postId, commentInput.value);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  commentInput.textContent = "";

  ClickCommentsBtn(postId); // wait

  RemoveLoadingSection();
};

window.ClickEditComment = async function (commentId) {
  if (post.obj == null) return;

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
  comment = Comment.comments.find((e) => {
    return e.id == commentId;
  });

  if (comment == null) return;

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

  let response = await Comment.EditComment(commentId, text);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  closeEditCommentBtn.click();

  ClickCommentsBtn(postId); // wait

  RemoveLoadingSection();
};

window.ClickDeleteComment = async function (commentId) {
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

  ShowConfirmMessage("Delete Comment");

  let yesBtn = document.querySelector(".confirm-message button.yes");

  yesBtn.onclick = async () => {
    await DeleteComment(commentId);
  };

  RemoveLoadingSection();
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

  let response = await Comment.DeleteComment(commentId);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    RemoveLoadingSection();

    return;
  }

  ClickCommentsBtn(postId); // wait

  RemoveLoadingSection();
}
