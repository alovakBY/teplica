"use strict";

function modal() {
  const callbackBtn = document.querySelectorAll(".header__callback-callback");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".modal__close");

  document.body.addEventListener("click", (e) => {
    if (!e.target.closest(".header__callback-callback")) return;
    modal.classList.add("modalActive");
    document.body.classList.add("bodyActiv");
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.remove("modalActive");
    document.body.classList.remove("bodyActiv");
  });
}

export default modal;
