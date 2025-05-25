const modal = document.querySelector(".modal")
const click = document.getElementById("sama-details")
const close = document.querySelector(".close")
const backgroundClose = document.querySelector(".center")

click.onclick = function() {
   modal.classList.add("active")
};

close.onclick = function(event) {
    modal.classList.remove("active")
    event.stopPropagation();
};

window.onclick = function(event) {
    if (event.target == backgroundClose) {
        modal.classList.remove("active");
    }
};

function copy(text) {
    navigator.clipboard.writeText(text);

    const message = document.getElementById('copied');
    message.classList.add('show')

    setTimeout(() => {
        message.classList.remove('show');
    }, 1500);
}

document.getElementById('copy-email').addEventListener('click', () => {
    copy('emailderamonbv@gmail.com')
});

document.getElementById('copy-phone').addEventListener('click', () => {
    copy('+55 12 99224-5370')
});
