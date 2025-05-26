const modal = document.querySelector('.modal')
const click = document.getElementById('basic-git-certificate-details')

click.onclick = function() {
    modal.classList.add('active');
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('active');
    }
};

const switchButton = document.getElementById('switch-theme');

let lightModeEnabled = false;

const lightModeLink = document.createElement('link');
lightModeLink.rel = 'stylesheet';
lightModeLink.href = 'css/curriculum-light-mode.css';
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
