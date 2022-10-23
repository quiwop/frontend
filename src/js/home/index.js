import { isLoggedIn } from "../isLoggedIn.js";
import htmlHead from "./htmlHead_2.js";
import menu from "../menu.js";
import { changeTheme } from "../theme.js";

isLoggedIn();
document.addEventListener("DOMContentLoaded", () => {
  htmlHead();
  let interval = setInterval(() => {
    const $mobileHeader = document.querySelector(".m-header");
    const $desktopHeader = document.querySelector(".d-header");
    const $modeBtn = document.getElementById("mode-btn");
    if ($mobileHeader || $desktopHeader) {
      if ($modeBtn) {
        clearInterval(interval);
        menu("icon-menu", "container-menu");
        changeTheme("mode-btn");
      }
    }
  }, 100);
});
