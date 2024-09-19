import { getToken } from "../Js/token.js";

let token = getToken();

class Response {
  constructor() {
    this.valid = false;
    this.obj = null;
    this.error = null;
  }
}

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
        response.obj = await data.json();

        response.valid = true;
      } else {
        response.error = (await data.json()).error;
      }
    } catch (error) {
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
        // UnAuthenication();
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

export function ShowConfirmMessage(header) {
  document.querySelector(".alerts").innerHTML += `
    <div class="confirm-message">

      <button
        class="d-none"
        data-bs-toggle="modal"
        data-bs-target="#confirm-message"
        >
      </button>

      <div
        class="modal fade "
        id="confirm-message"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content modal-sm">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">${header}</h5>
              <button
                type="button"
                class="btn-close shadow-none "
                data-bs-dismiss="modal"
                aria-label="Close"
                onclick="RemoveSection(event,'.alerts .confirm-message')"
              ></button>
            </div>

            <div class="modal-body">Are You Sure ?!</div>
            
            <div class="modal-footer">

              <button type="button" class="yes btn btn-primary">
                Yes
              </button>

              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
`;

  let toggleModelBtn = document.querySelector(".confirm-message button");

  toggleModelBtn.click();
}

export function ShowAlert(header, message, type) {
  document.body.classList.add("hide-scrollbar");

  document.querySelector(".alerts").innerHTML += `
  <div class="alert-message position-fixed top-0 w-100 h-100">

    <div class="overlay position-absolute w-100 h-100"></div>

    <div class="container mt-4">

      <div class="alert alert-${type} alert-dismissible mb-0">
        <button
          type="button"
          class="btn-close shadow-none"
          data-bs-dismiss="alert"
          onclick="RemoveSection(event,'.alerts .alert-message')"
        ></button>
        <h2 class="alert-heading">${header}</h2>
        <h5>${message}</h5>
      </div>

    </div>
  </div>
  `;
}

export function HandleTotal(Total) {
  return Total > 999 ? "+999" : Total;
}

export function ToggleClassLiked(isLiked) {
  return isLiked ? "liked" : "";
}

export function generateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;

    // "y" section is one of 8, 9, A, or B

    var v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

window.HandleDate = function (dateText) {
  // dateText = "2024-07-21T09:17:17";

  let date = new Date(dateText);

  let seconds = (new Date() - date) / 1000;

  if (seconds < 60) return "Now";

  let minutes = seconds / 60;

  if (minutes < 60) return parseInt(minutes) + "m";

  let hours = minutes / 60;

  if (hours < 24) return parseInt(hours) + "h";

  return dateText.split("T")[0];
};

window.HandleDate2 = function (dateText) {
  // dateText = "2024-07-28T14:51:30.11";

  let date = new Date(dateText);

  let seconds = (new Date() - date) / 1000;

  if (seconds < 60) return "Now";

  let minutes = seconds / 60;

  if (minutes < 60) return parseInt(minutes) + "m";

  let hours = minutes / 60;

  if (hours < 24) return parseInt(hours) + "h";

  let days = hours / 24;

  if (days < 7) return parseInt(days) + "d";

  let weeks = days / 7;

  if (weeks < 4) return parseInt(weeks) + "w";

  if (days < 30) return 1 + "m";

  let months = days / 30;

  if (months < 12) return parseInt(months) + "m";

  let years = months / 12;

  return parseInt(years) + "y";
};

window.HandleDate3 = function (dateText) {
  const date = new Date(dateText);

  const datePart = date.toISOString().split("T")[0];

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;

  if (hours == 0) hours = 12;

  const timePart = `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;

  return `${datePart} ${timePart}`;
};

var LoadingSection = document.querySelector(".loading");

window.ShowLoadingSection = function () {
  LoadingSection.classList.remove("d-none");
};

window.RemoveLoadingSection = function () {
  LoadingSection.classList.add("d-none");
};

window.RemoveSection = function (e, sectionName) {
  document.body.classList.remove("hide-scrollbar");

  // if (e != null) e.preventDefault();

  let section = document.querySelector(`${sectionName}`);
  if (section != null) {
    section.remove();
  } else {
    ShowAlert("Error", "Not Found", "danger");
  }
};
