import htmlHead from "./htmlHead_1.js";
import header from "./header_1.js";
import menu from "../menu.js";

document.addEventListener("DOMContentLoaded", () => {
  htmlHead();
  if (document.querySelector("header")) {
    header("header");
    if (document.querySelector("header").classList.contains("header")) {
      menu("icon-menu", "container-menu");
    }
  }
});
