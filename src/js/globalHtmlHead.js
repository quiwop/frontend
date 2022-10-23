export default function htmlHead() {
  document.querySelector("head").insertAdjacentHTML(
    "beforeend",
    `
      <!-- Global styles -->
      <link rel="stylesheet" href="./src/css/global.css" />
      <link rel="stylesheet" href="./src/css/alerts.css" />;
      <!-- Favicon -->
      <link rel="shortcut icon" href="https://quiwop.github.io/media/favicon.png" />
      <!-- Font Family -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    `
  );
}
