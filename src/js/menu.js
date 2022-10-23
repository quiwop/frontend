export default function menu(btnMenu, menu) {
  let interval = setInterval(() => {
    const $btnMenu = document.getElementById(btnMenu);
    const $menu = document.getElementById(menu);
    if ($btnMenu && $menu) {
      clearInterval(interval);
      if (window.innerWidth < 1100) {
        $btnMenu.addEventListener("click", () => {
          $btnMenu.classList.toggle("active-menu");
          $menu.classList.toggle("show-menu");
          document.body.classList.toggle("disable-scroll");
          $btnMenu.ariaLabel = "Cerrar menú de navegación";
          if (!$btnMenu.classList.contains("active-menu")) {
            $btnMenu.ariaLabel = "Abrir menú de navegación";
          }
        });
        const $icon = document.querySelectorAll(".icon-menu *");
        const $link = document.querySelectorAll(".menu-link");
        setTimeout(() => {
          $icon.forEach((e) => {
            e.style.transition = "all 0.5s ease";
          });
          $menu.style.transition = "all 0.5s ease";
          $link.forEach((e) => {
            setTimeout(() => {
              e.style.transition = `all 0.5s ease`;
            });
          });
        }, 500);
      }
    }
  }, 100);
}
