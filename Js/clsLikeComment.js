import { Post } from "../Js/clsPost.js";
import { HandleTotal, Response, ShowAlert } from "../Js/helper.js";

class LikeComment {
  static async RemoveLikeComment(commentId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/LikeComment/RemoveLikeComment/${commentId}`,
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
      response.error = "Failed to remove like comment";
    } finally {
      return response;
    }
  }

  static async AddLikeComment(commentId) {
    let response = new Response();
    try {
      let data = await fetch(
        `https://victus.runasp.net/api/LikeComment/AddLikeComment/${commentId}`,
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
      response.error = "Failed to add like comment";
    } finally {
      return response;
    }
  }

  static async GetLikersComment(commentId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/LikeComment/GetLikersOnComment/${commentId}`,
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
      response.error = "Failed Get Likers On Comment";
    } finally {
      return response;
    }
  }
}

let isClickLike = false;

window.ClickLikeCommentBtn = async function (event, commentId, postId) {
  if (isClickLike) {
    return;
  }

  isClickLike = true;

  const clickedElement = event.currentTarget;

  let isLikedClass = clickedElement.classList.contains("liked");

  let post = new Post();
  await post.initInfo(postId);

  if (!post.obj.isActive) {
    let closeBtn = document.querySelector(".comments button.btn-close");

    closeBtn.click();

    await Reload();

    isClickLike = false;

    return;
  }

  let response = isLikedClass
    ? await LikeComment.RemoveLikeComment(commentId)
    : await LikeComment.AddLikeComment(commentId);

  isClickLike = false;

  if (response.valid) {
    let info2Section = document.querySelector(
      `.comments .comment[id='${commentId}'] .info2`
    );

    document
      .querySelector(`.comments .comment[id='${commentId}'] .like-comment`)
      .classList.toggle("liked");

    const totalLikesCommentElement = document.querySelector(
      `.comments .comment[id='${commentId}'] .likes-comment`
    );

    if (totalLikesCommentElement == null) {
      info2Section.innerHTML += `
      <div class="right" onclick="ClickLikesCommentBtn(${commentId})" role="button">
        <small class="likes-comment">1</small>
    
        <small class="text-primary">
          <i class="fa-regular fa-thumbs-up"></i>
        </small>
      </div>`;

      return;
    }

    let countLikes = +totalLikesCommentElement.innerHTML;

    countLikes += isLikedClass ? -1 : 1;

    if (countLikes == 0) {
      let rightSection = document.querySelector(
        `.comments .comment[id='${commentId}'] .info2 .right`
      );

      rightSection.remove();

      return;
    }

    totalLikesCommentElement.innerHTML = HandleTotal(countLikes);
  } else {
    ShowAlert("Error", response.error, "danger");
  }
};

window.ClickLikesCommentBtn = async function (commentId) {
  ShowLoadingSection();

  let response = await LikeComment.GetLikersComment(commentId);

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
  document.querySelector(".pop-section").innerHTML += `
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
      class="w-100 h-100 rounded-circle border" />
    </div>

      ${liker.name}
    
  </div>
  `;
}
