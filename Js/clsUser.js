import { Response, ShowAlert } from "../Js/helper.js";

export class User {
  static async IsNameFound(name) {
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

  constructor(userId) {
    this.id = Number(userId);
    this.obj = null;
  }

  async Profile() {
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

  async GetUser() {
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

  async SaveUserInfo(userRequest) {
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

  async ChangePassword(currentPassword, newPassword) {
    let response = new Response();

    let request = {
      currentPassword: currentPassword,
      newPassword: newPassword,
    };

    try {
      let data = await fetch(
        "https://victus.runasp.net/api/Users/ChangePassword",
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
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
      response.error = "Failed to change password";
    } finally {
      return response;
    }
  }

  async AllActivity() {
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

  async AllSavedPosts() {
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
}

console.log("USER");

export async function GetCurrentUser() {
  let user = new User();

  let response = await user.Profile();

  if (!response.valid) {
    // UnAuthenication();

    ShowAlert("Error", response.error, "danger");

    return;
  }

  user.obj = response.obj;
  user.id = response.obj.id;

  window.currentUser = user;
}

let userRequest = null,
  imageElement,
  removeImageBtn,
  imageInput,
  uploadButton;

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

  let response = await window.currentUser.SaveUserInfo(userRequest);

  if (!response.valid) {
    ShowAlert("Error", response.error, "danger");

    change = true;
    prev = null;
    current = "";

    RemoveLoadingSection();

    return;
  }

  await GetCurrentUser();

  RefreshPage(); // wait

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
