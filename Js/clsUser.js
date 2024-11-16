import { Response, ShowAlert } from "../Js/helper.js";

export class User {
  static async IsNameFound(name) {
    await window.VerifyToken();

    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Users/IsNameFound?name=${name}`,
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
        // response.error = (await data.json()).error;
        response.error = "Failed";
      }
    } catch (error) {
      response.error = "Failed";
    } finally {
      return response;
    }
  }

  static async Register(request) {
    let response = new Response();

    try {
      let data = await fetch("https://victus.runasp.net/api/Users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (data.ok) {
        response.valid = true;
      } else {
        response.error = (await data.json()).error;
      }
    } catch (ex) {
      response.error = "Register failed";
    } finally {
      return response;
    }
  }

  static async Login(request) {
    let response = new Response();

    try {
      let data = await fetch("https://victus.runasp.net/api/Users/Login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (data.ok) {
        response.obj = await data.json();

        response.valid = true;
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Login failed";
    } finally {
      return response;
    }
  }

  static async SaveUserInfo(userRequest) {
    await window.VerifyToken();

    let response = new Response();

    try {
      let data = await fetch("https://victus.runasp.net/api/Users/update", {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRequest),
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
      response.error = "Failed to save information";
    } finally {
      return response;
    }
  }

  static async AllActivity() {
    await window.VerifyToken();

    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Activity/AllActivity`,
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
      response.error = "Failed To retrieve activity";
    } finally {
      return response;
    }
  }

  static async AllSavedPosts() {
    await window.VerifyToken();

    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/SavedPost/AllSavedPosts`,
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
      response.error = "Failed To retrieve saved posts";
    } finally {
      return response;
    }
  }

  static async Profile() {
    await window.VerifyToken();

    let response = new Response();

    try {
      let data = await fetch(`https://victus.runasp.net/api/Users/Profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
      response.error = "Failed to retrieve profile";
    } finally {
      return response;
    }
  }

  constructor(userId) {
    this.id = Number(userId);
    this.obj = null;
  }

  async GetUser() {
    await window.VerifyToken();

    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Users/GetUser?id=${this.id}`,
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
        response.error = "Unauthorized";

        UnAuthenication();
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed to retrieve user";
    } finally {
      return response;
    }
  }
}

export function SaveUserInfoInStorrage(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

export function GetUserInfoFromStorrage() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

async function UpdateCurrentUser() {
  let response = await User.Profile();

  if (!response.valid) {
    // UnAuthenication();

    ShowAlert("Error", response.error, "danger");

    return;
  }

  window.currentUser = response.obj;

  SaveUserInfoInStorrage(currentUser);
}

let userRequest = null,
  imageElement,
  removeImageBtn,
  imageInput,
  uploadButton;

window.ClickEditProfileItem = function () {
  userRequest = {
    name: currentUser.name,
    imagePath: currentUser.imagePath,
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
                class="rounded-circle border"
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
                value="${currentUser.name}"
              />
            </div>

            <div class="form-floating my-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                value="${currentUser.email}"
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
  let image = window.GetImage(currentUser.imagePath);

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

  if (userNameValue != currentUser.name) {
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

  let response = await User.SaveUserInfo(userRequest);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    change = true;
    prev = null;
    current = "";

    RemoveLoadingSection();

    return;
  }

  await UpdateCurrentUser();

  RefreshPage(); // wait

  ShowAlert("Done", "changes saved", "success");

  RemoveLoadingSection();
};
