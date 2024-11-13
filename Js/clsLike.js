import { Post } from "../Js/clsPost.js";
import { Response, ShowAlert } from "../Js/helper.js";

class Like {
  static async RemoveLike(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Like/RemoveLike/${postId}`,
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

  static async AddLike(postId) {
    let response = new Response();
    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Like/AddLike/${postId}`,
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

  static async GetLikers(postId) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Posts/GetLikersOnPost/${postId}`,
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
}

let isClickLike = false;

window.ClickLikeBtn = async function (event, postId) {
  if (isClickLike) {
    return;
  }

  isClickLike = true;

  const clickedElement = event.currentTarget;

  let post = new Post();
  await post.initInfo(postId);

  let isLiked = post.obj.isLiked;

  let isLikedClass = clickedElement.classList.contains("liked");

  if (!post.obj.isActive || isLiked != isLikedClass) {
    await Reload();

    isClickLike = false;

    return;
  }

  let response = isLiked
    ? await Like.RemoveLike(postId)
    : await Like.AddLike(postId);

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
  await post.initInfo(postId);

  let isActive = post.obj.isActive;

  let isTrashSection = document.getElementById("trash") ? true : false;

  if (isActive == isTrashSection) {
    await Reload();

    return;
  }

  let response = await Like.GetLikers(postId);

  post.RefreshPostInfo();

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
      class="w-100 h-100 rounded-circle border" />
    </div>

      ${liker.name}
    
  </div>
  `;
}
