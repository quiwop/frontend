import htmlHead from "./htmlHead_1.js";
import header from "./header_1.js";

document.addEventListener("DOMContentLoaded", () => {
  htmlHead();
  if (document.querySelector("header")) {
    header("header");
  }
});
