export default function header(container) {
  const $header = document.querySelector(container);
  $header.innerHTML = `
    <nav class="navbar">
      <a href="./index" aria-label="Ir a la página de inicio" class="logo">
        <img src="https://quiwop.github.io/media/Quiwop.png" alt="Logotipo de Quiwop" />
      </a>
      <button id="icon-menu" class="icon-menu" aria-label="Abrir menú de navegación">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="container-menu" id="container-menu">
        <ul class="menu-content">
          <li class="menu-item">
              <a href="./index" class="menu-link">Inicio</a>
          </li>
          <li class="menu-item">
              <a href="" class="menu-link">Planes</a>
          </li>
          <li class="menu-item">
              <a href="" class="menu-link">Comunidad</a>
          </li>
          <li class="menu-item">
              <a href="" class="menu-link">Sobre nosotros</a>
          </li>
          <li class="menu-item">
              <a href="" class="menu-link">Contáctanos</a>
          </li>
          <li class="menu-item menu-item-btn">
              <a href="./login" class="menu-link">Iniciar sesión</a>
          </li>
        </ul>
      </div>
    </nav>`;
  $header.classList.add("header");
  if ($header.classList.contains("header")) {
    const $icon = document.querySelectorAll(".icon-menu *");
    const $menu = document.querySelector(".container-menu");
    const $link = document.querySelectorAll(".menu-link");
    setTimeout(() => {
      $icon.forEach((e) => {
        e.style.transition = "all 0.4s ease-in-out";
      });
      $menu.style.transition = "all 0.5s ease-in-out";
      $link.forEach((e) => {
        setTimeout(() => {
          e.style.transition = `all 0.2s ease-in-out`;
        });
      });
    }, 500);
  }
}
