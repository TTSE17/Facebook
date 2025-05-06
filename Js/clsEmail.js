import { Response } from "../Js/helper.js";

export async function ConfirmEmail(token) {
  let response = new Response();

  try {
    let data = await fetch(
      `https://victus.runasp.net/api/Token/ConfirmEmail?token=${token}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (data.ok) {
      response.valid = true;
    } else {
      response.error = await data.json();
    }
  } catch (error) {
    response.error = "An error occurred during verification. Please try again.";
  } finally {
    return response;
  }
}
