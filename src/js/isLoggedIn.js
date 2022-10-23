import { domain } from "./api.js";
import header from "./home/header_2.js";

export async function isLoggedIn() {
  if (localStorage.getItem("instiId") && localStorage.getItem("token")) {
    try {
      const instiId = localStorage.getItem("instiId");
      const token = localStorage.getItem("token");
      let options = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const res = await fetch(`${domain()}/institutions/${instiId}`, options);
      const data = await res.json();
      if (!res.ok) {
        throw {
          status: res.status,
          statusText: res.statusText,
        };
      } else {
        header("header", data.body[0].name);
      }
    } catch (err) {
      localStorage.removeItem("instiId");
      localStorage.removeItem("token");
      window.location.href = "./login";
    }
  } else {
    localStorage.removeItem("instiId");
    localStorage.removeItem("token");
    window.location.href = "./login";
  }
}
