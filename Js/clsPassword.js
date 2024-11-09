import { Response, ShowAlert } from "../Js/helper.js";

export class Password {
  static async ChangePassword(currentPassword, newPassword) {
    let response = new Response();

    let request = {
      currentPassword,
      newPassword,
    };

    try {
      let data = await fetch(
        "https://victus.runasp.net/api/Password/ChangePassword",
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

  static async SendPasswordResetCode(email) {
    let response = new Response();

    try {
      let data = await fetch(
        `https://victus.runasp.net/api/Password/SendPasswordResetCode?email=${email}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(email),
        }
      );

      if (data.ok) {
        response.valid = true;
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Error";
    } finally {
      return response;
    }
  }

  static async CheckPasswordResetCode(request) {
    let response = new Response();

    try {
      let data = await fetch(
        "https://victus.runasp.net/api/Password/CheckPasswordResetCode",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }
      );

      if (data.ok) {
        response.valid = true;
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed";
    } finally {
      return response;
    }
  }

  static async ResetPassword(request) {
    let response = new Response();

    try {
      let data = await fetch(
        "https://victus.runasp.net/api/Password/ResetPassword",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(request),
        }
      );

      if (data.ok) {
        response.valid = true;
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
      response.error = "Failed";
    } finally {
      return response;
    }
  }
}

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

  let response = await Password.ChangePassword(currentPassword, newPassword);

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
