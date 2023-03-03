// here handler modal

const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const authBtn = document.querySelector(".auth-btn");
const closeBtn = document.querySelectorAll(".modal_close-wrapper");

authBtn.addEventListener("click", () => {
  modal.classList.add("modal-active");
  body.classList.add("modal-active");
});

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", () => {
    modal.classList.remove("modal-active");
    body.classList.remove("modal-active");
  });
}

// auth modals

const loginModal = document.querySelector(".modal_main-wrapper");
// const registerModal = document.querySelector('.register-inner');

const registerBtn = document.querySelector(".load_sign-up-modal");
const loginBtn = document.querySelector(".load_log-in-modal");

registerBtn.addEventListener("click", () => {
  loginModal.classList.remove("login-active");
});

loginBtn.addEventListener("click", () => {
  loginModal.classList.add("login-active");
});
