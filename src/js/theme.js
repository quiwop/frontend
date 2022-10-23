const body = document.body;

export function theme() {
  if (!localStorage.getItem("theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("theme", "dark-theme");
    } else {
      localStorage.setItem("theme", "light-theme");
    }
  }
  if (localStorage.getItem("theme") === "dark-theme") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
}
