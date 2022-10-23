const body = document.body;
export function changeTheme(btn) {
  const $btn = document.getElementById(btn);
  const $icon = document.querySelector(".mode .mode-text i");
  const $text = document.querySelector(".mode .mode-text p");
  if (localStorage.getItem("theme") === "dark-theme") {
    body.classList.add("dark-theme");
    $btn.classList.add("active");
    $icon.classList.add("fa-moon");
    $icon.classList.remove("fa-sun");
    $text.textContent = "Modo oscuro";
  } else {
    body.classList.remove("dark-theme");
    $btn.classList.remove("active");
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
    $text.textContent = "Modo claro";
  }
  $btn.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
      $btn.classList.remove("active");
      $icon.classList.remove("fa-moon");
      $icon.classList.add("fa-sun");
      $text.textContent = "Modo claro";
      localStorage.setItem("theme", "light-theme");
    } else {
      body.classList.add("dark-theme");
      $btn.classList.add("active");
      $icon.classList.add("fa-moon");
      $icon.classList.remove("fa-sun");
      $text.textContent = "Modo oscuro";
      localStorage.setItem("theme", "dark-theme");
    }
  });
}

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
