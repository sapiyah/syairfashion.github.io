var prevScrollpos = window.pageYOffset;
var header = document.getElementById("header");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-80px"; // Sesuaikan dengan tinggi header
    }

    prevScrollpos = currentScrollPos;
};
