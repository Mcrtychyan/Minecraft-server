
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
const modalCloseBtn = document.getElementById('modalBtnAboutDonate');
const modalSale = document.querySelector('.modal-sale');
const buttonsSale = document.querySelectorAll('.detailed__btn');
const btnSaleClose = document.getElementById('modalBtnBuyTovar');
const buttonBuy = document.querySelectorAll('.sale__buy');
 
btn.addEventListener('click', function () {
    body.classList.add('active');
    modal.classList.add('active');
});

buttonsSale.forEach(function(buttonSale) {
    buttonSale.addEventListener('click', function() {
        body.classList.add('active');
        modal.classList.add('active');
    });
});

buttonBuy.forEach(function(buttonBuy) {
    buttonBuy.addEventListener('click', function() {
        body.classList.add('active');
        modalSale.classList.add('active');
    });
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

btnSaleClose.addEventListener('click', function () {
    body.classList.remove('active');
    modalSale.classList.remove('active');
});

