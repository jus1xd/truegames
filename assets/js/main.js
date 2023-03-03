// here handler modal 

const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const authBtn = document.querySelector('.auth-btn');
const closeBtn = document.querySelector('.modal_close-wrapper');

authBtn.addEventListener('click', () => {
    modal.classList.add('modal-active');
    body.classList.add('modal-active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    body.classList.remove('modal-active');
});
