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
