const modal = document.querySelector(".modal")
const click = document.getElementById("sama-details")
const close = document.querySelector(".close")
const backgroundClose = document.querySelector(".center")

click.onclick = function() {
   modal.classList.add("active");
};

close.onclick = function(event) {
    modal.classList.remove("active");
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
    message.classList.add('show');

    setTimeout(() => {
        message.classList.remove('show');
    }, 1500);
};

document.getElementById('copy-email').addEventListener('click', () => {
    copy('emailderamonbv@gmail.com')
});

document.getElementById('copy-phone').addEventListener('click', () => {
    copy('+55 12 99224-5370')
});


const switchButton = document.getElementById('switch-theme');

let lightModeEnabled = false;

const lightModeLink = document.createElement('link');
lightModeLink.rel = 'stylesheet';
lightModeLink.href = 'css/light-mode.css';
lightModeLink.id = 'light-mode-css';

switchButton.addEventListener('click', () => {
    lightModeEnabled = !lightModeEnabled;

    if (lightModeEnabled) {
        document.head.appendChild(lightModeLink);
    } else {
        const existingLink = document.getElementById('light-mode-css');
        if (existingLink) {
            existingLink.remove();
        }
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const paragraph = document.getElementById('typewriter');
    const caret = document.getElementById('caret');
    const text = paragraph.getAttribute('data-text');
    paragraph.innerHTML = "";
    paragraph.appendChild(caret);

    let i = 0;
    const speed = 25;
    function typeWriter() {
        if (i < text.length) {
            caret.before(document.createTextNode(text.charAt(i)));
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
