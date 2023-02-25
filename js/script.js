const botton = document.querySelector(".btn_top");

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        botton.classList.remove("visible");
    } else {
        botton.classList.add("visible");
    }
});
