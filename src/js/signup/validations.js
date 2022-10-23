import customSelect from "./customSelect.js";
import { domain } from "../api.js";

export default function formValidations() {
  const $form = document.querySelector(".signup-container-form form");
  const $input = document.querySelectorAll(".signup-input input");
  const $containerIcon = document.querySelectorAll(".signup-icon");
  const $alertMessage = document.querySelectorAll(".signup-alert-message");
  const $btnSubmit = document.querySelector(".signup-form-btn button");

  let idStatus = false;
  let nameStatus = false;
  let emailStatus = false;
  let countryStatus = false;
  let pwdStatus = false;
  let globalStatus = false;

  const $select = document.getElementById("country");
  (async () => {
    try {
      const res = await fetch(`${domain()}/countries`);
      const data = await res.json();
      if (!res.ok) {
        throw { status: res.status, statusText: res.statusText };
      } else {
        data.body.forEach((e) => {
          $select.insertAdjacentHTML(
            "beforeend",
            `<option value="${e.id}">${e.name}</option>`
          );
        });
        customSelect();
        countryStatus = true;
        globalStatus = true;
      }
    } catch (err) {
      console.clear();
      countryStatus = false;
      globalStatus = false;
      const $selectContainer = document.querySelector(".custom-select");
      $selectContainer.innerHTML = `
        <div class="signup-alert-message">
          <p>No se han podido cargar los países.</p>
        </div>
      `;
    }
  })();

  // Para que no se vea un zoom en las letras del botón, si se pone en el css este estilo se puede apreciar el zoom
  setTimeout(() => {
    $btnSubmit.style.transition = "all 0.5s ease-in-out";
  }, 500);

  const $iconRight = `<i class="fa-solid fa-circle-check" style="color: #83CE1D"></i>`;
  const $iconAlert = `<i class="fa-solid fa-circle-exclamation" style="color: #FFB800;"></i>`;
  const $eyeHidden = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
      <path d="M479.1,1.5C477.5,2.4,450,29.1,418,61.1l-58.1,58l-10.7-5.3C266.4,73,187,82.5,102,143.6c-32.5,23.3-72.8,62.7-97.1,95
        c-5.1,6.6-6.2,12.1-3.5,17.4c2.3,4.6,17.7,23.4,30.5,37.5c22.4,24.4,51.6,50.4,75.2,66.6l7,4.9l-55.2,55.1
        c-30.4,30.3-56.1,56.8-57.1,58.7c-2.3,4.7-2.3,8.7,0.1,13.5c2.2,4.4,7.8,7.8,12.7,7.8c1.7,0,4.6-0.9,6.6-1.9
        C25.7,495.8,496.4,25,498.5,20.7C504.5,8.7,490.9-4.7,479.1,1.5z M274.2,150.4c4.5,1.2,11.3,3.4,15.1,5c7.1,2.9,21.2,11.2,21.2,12.4
        c0,0.4-4.6,5.3-10.2,10.8l-10.2,10.2l-5.2-2.9c-14.5-8.2-32.9-10.9-49.5-7.5c-38.5,7.9-64.1,44.7-57.8,83.2c1.4,8,3.2,13.8,7.4,22.1
        l3.4,6.8l-10.1,10.1c-5.5,5.6-10.4,10.1-10.7,10.1c-1.2,0-9.5-14.1-12.4-21.2c-5.9-14.2-7.4-22.7-7.3-39.9c0.1-12.6,0.5-17.1,2.1-23
        c5.4-19.8,14.3-35.8,27.4-48.8c15.1-15.2,36.3-26,57.2-29.3C244.3,146.9,264.9,148,274.2,150.4z"/>
      <path d="M378.1,184l-31.6,31.6l2.1,6.4c10.5,34,0,74.2-26.2,100.4C296.2,348.6,256,359,222,348.6l-6.4-2.1L192,370
        c-12.9,12.9-23.2,23.7-22.9,24c1.2,1.2,22.4,8.3,31.8,10.7c18.8,4.7,27.6,5.8,49.5,5.8c16.8-0.1,22.7-0.5,32.2-2.2
        c34.9-6.3,69-20.7,103.1-43.4c35.9-23.9,71.9-57.2,102.6-95c15.5-19,15.5-21,0-40.1c-22.6-27.7-56.9-61.8-76.3-75.7l-2.4-1.9
        L378.1,184z"/>
      <path d="M280.9,281.2c-31.4,31.4-40.4,41-39.2,41.5c5.4,2.1,24.8-0.4,35.1-4.4c20.6-8.1,38.2-27.8,44.1-49.6
        c1.9-6.7,3-24.6,1.9-26.8C321.9,240.5,314.3,247.7,280.9,281.2z"/>
    </svg>
  `;
  const $openEye = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
        <path d="M2404,4080c-846-49-1644-502-2280-1294c-166-207-166-244,1-453c635-793,1436-1245,2286-1292c961-52,1870,402,2585,1293
          c166,207,166,244-1,453c-464,579-1016,977-1626,1172c-190,61-419,105-599,116C2574,4086,2532,4087,2404,4080z M2772,3614
          c287-54,563-250,713-505c180-308,199-680,51-995c-58-123-114-203-209-301c-535-551-1446-383-1756,324c-112,255-114,567-5,833
          c105,259,334,485,595,588C2359,3636,2557,3654,2772,3614z"/>
        <path d="M2455,3130c-163-35-307-136-389-274c-61-101-81-176-80-296c0-116,11-163,57-260c43-89,167-213,258-257
          c321-155,694,3,810,342c33,97,34,249,2,350c-73,231-285,392-528,401C2536,3138,2477,3135,2455,3130z"/>
      </g>
    </svg>
  `;

  const alertMessage = (txt, position) => {
    $alertMessage[position].innerHTML = `<p>${txt}</p>`;
  };

  const btnEnabled = () => {
    $btnSubmit.disabled = false;
    $btnSubmit.style.background = "var(--light-mode-buttons)";
    $btnSubmit.style.color = "#fff";
  };

  const btnDisabled = () => {
    $btnSubmit.disabled = true;
    $btnSubmit.style.background = "transparent";
    $btnSubmit.style.color = "var(--light-mode-txt)";
  };

  const alert = (txt, position) => {
    btnDisabled();
    alertMessage(txt, position);
    $containerIcon[position].innerHTML = $iconAlert;
    $btnSubmit.classList.remove("active");
  };

  const right = (txt, position) => {
    alertMessage(txt, position);
    $containerIcon[position].innerHTML = $iconRight;
    $btnSubmit.classList.add("active");
  };

  const eyeHidden = () => {
    $containerIcon[3].innerHTML = $eyeHidden;
    $input[3].setAttribute("type", "password");
  };
  eyeHidden();

  const openEye = () => {
    $containerIcon[3].innerHTML = $openEye;
    $input[3].setAttribute("type", "text");
  };

  const expressions = {
    id: /^[0-9]{6,15}$/,
    name: /^[a-zA-ZÑñÁÉÍÓÚÜáéíóúü0-9_.\s]{4,49}$/g, // Letras, números y espacios, pueden llevar acentos.
    email:
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  };

  const validations = (e) => {
    let value;
    switch (e.target.name) {
      case "id":
        value = e.target.value.replace(/\s+/g, " ");
        e.target.value = value;
        if (expressions.id.test(value)) {
          right("", 0);
          idStatus = true;
          globalStatus = true;
        } else if (e.target.value.trim().length < 6) {
          alert("El número debe tener mínimo 6 caracteres.", 0);
          idStatus = false;
          globalStatus = false;
        } else if (e.target.value.trim().length > 14) {
          alert("El número no debe ser mayor a 14 caracteres.", 0);
          idStatus = false;
          globalStatus = false;
        }
        break;
      case "name":
        value = e.target.value.replace(/\s+/g, " ");
        e.target.value = value;
        if (expressions.name.test(value)) {
          right("", 1);
          nameStatus = true;
          globalStatus = true;
        } else if (e.target.value.trim().length < 4) {
          alert("El nombre debe tener mínimo 4 caracteres", 1);
          nameStatus = false;
          globalStatus = false;
        } else if (e.target.value.trim().length > 49) {
          alert("El nombre no debe ser mayor a 49 caracteres.", 1);
          nameStatus = false;
          globalStatus = false;
        } else if (!expressions.name.test(value)) {
          alert("Ingresa letras, números, guiones y puntos", 1);
          nameStatus = false;
          globalStatus = false;
        }
        break;
      case "email":
        let email = e.target.value.replace(/\s+/g, "").toLowerCase();
        e.target.value = email;
        if (expressions.email.test(email)) {
          right("", 2);
          emailStatus = true;
          globalStatus = true;
        } else if (e.target.value.trim().length > 49) {
          alert("El email no debe ser mayor a 49 caracteres", 2);
          emailStatus = false;
          globalStatus = false;
        } else if (!expressions.email.test(value)) {
          alert(
            "Ingresa una estructura valida, por ejemplo user@example.com",
            2
          );
          emailStatus = false;
          globalStatus = false;
        }
        break;
      case "pwd":
        let pwd = e.target.value;
        if (pwd.length < 6) {
          alertMessage("La contraseña debe tener mínimo 6 caracteres", 3);
          pwdStatus = false;
          globalStatus = false;
        } else if (pwd.length >= 6 && pwd.length <= 29) {
          alertMessage("", 3);
          pwdStatus = true;
          globalStatus = true;
        } else if (pwd.length > 29) {
          alertMessage("La contraseña no debe ser mayor a 29 caracteres", 3);
          pwdStatus = false;
          globalStatus = false;
        }
        break;
    }
    if (
      idStatus &&
      nameStatus &&
      emailStatus &&
      countryStatus &&
      pwdStatus &&
      globalStatus
    ) {
      btnEnabled();
    } else {
      btnDisabled();
    }
  };

  $input.forEach((e) => {
    e.addEventListener("keyup", (el) => {
      validations(el);
    });
    e.addEventListener("blur", validations);
    e.addEventListener("blur", (el) => {
      if (el.target.name == "name") el.target.value = el.target.value.trim();
    });
  });

  let eye = false;
  $containerIcon[3].addEventListener("click", () => {
    if (eye) {
      eyeHidden();
      eye = false;
    } else {
      openEye();
      eye = true;
    }
  });
  document.addEventListener("submit", async (e) => {
    if (e.target == $form) {
      e.preventDefault();
      $input.forEach((el) => {
        el.click();
        if (el.name == "name") el.value = el.value.trim();
        el.addEventListener("click", validations);
      });
      if (
        idStatus &&
        nameStatus &&
        emailStatus &&
        countryStatus &&
        pwdStatus &&
        globalStatus
      ) {
        const swalCustomClass = Swal.mixin({
          customClass: {
            confirmButton: "swal-btn swal-confirm-btn",
            cancelButton: "swal-btn swal-cancel-btn",
          },
          buttonsStyling: true,
        });
        try {
          const $id = document.getElementById("id").value;
          const $name = document.getElementById("name").value;
          const $email = document.getElementById("email").value;
          let $countryId;
          if (document.getElementById("country")) {
            $countryId = document.getElementById("country").value;
          }
          const $pwd = document.getElementById("pwd").value;
          let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
              instiId: $id,
              name: $name,
              email: $email,
              countryId: $countryId,
              pwd: $pwd,
            }),
          };
          const res = await fetch(`${domain()}/institutions/sign-up`, options);
          const data = await res.json();
          if (!res.ok) {
            throw {
              status: res.status,
              statusText: res.statusText,
              data: data,
            };
          } else {
            swalCustomClass.fire({
              position: "center",
              icon: data.body.icon,
              title: data.body.title,
              text: data.body.text,
              showConfirmButton: false,
              timer: 2500,
            });
            setTimeout(() => {
              window.location.href = "./login";
            }, 2500);
          }
        } catch (err) {
          console.clear();
          let status = err.status || 500;
          let message = err.statusText || "Error interno.";
          if (status == 400 && err.data.body.code == "ER_NO_REFERENCED_ROW_2") {
            swalCustomClass.fire({
              icon: "error",
              title: "País de origen",
              text: "Por favor recarga la página, no es posible detectar el país de origen.",
            });
          } else if (status != 500) {
            swalCustomClass.fire({
              icon: err.data.body.icon,
              title: err.data.body.title,
              text: err.data.body.text || "",
            });
          } else {
            swalCustomClass.fire({
              icon: "error",
              title: "Error",
              text: `Error ${status}: ${message}`,
            });
          }
        }
      }
    }
  });
}
