
function copyIP() {
    const ipText = document.getElementById("server-ip").textContent;
    const msg = document.getElementById("copy-msg");

    navigator.clipboard.writeText(ipText).then(() => {
        msg.style.display = "inline-block";
        msg.style.opacity = "1";

        setTimeout(() => {
            msg.style.display = "none";
        }, 2000);
    });
}


const btn = document.getElementById('modalOpen');
const body = document.body;
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__btn')
const modalSale = document.querySelector('.modal-sale');
const btnSale = document.getElementById('modalOpens');

btn.addEventListener('click', function () {
    body.classList.add('active');
    modal.classList.add('active');
});

btnSale.addEventListener('click', function () {
    body.classList.add('active');
    modalSale.classList.add('active');
});

modalCloseBtn.addEventListener('click', function () {
    body.classList.remove('active');
    modal.classList.remove('active');
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        body.classList.remove('active');
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        body.classList.remove('active');
        modalSale.classList.remove('active');
    }
});

modalCloseBtn.addEventListener('click', function () {
    body.classList.remove('active');
    modalSale.classList.remove('active');
});