document.addEventListener('DOMContentLoaded', () => {
    let divHeight = document.querySelector(".bg-image").offsetHeight,
        navbar = document.querySelector("nav");
    let lastKnownScrollPosition = 0;
    window.addEventListener(
        "resize",
        function (event) {
            divHeight = document.querySelector(".bg-image").offsetHeight;
            lastKnownScrollPosition = 0;
        },
        true
    );

    document.addEventListener("scroll", function () {
        lastKnownScrollPosition = window.scrollY;
        if (divHeight > lastKnownScrollPosition) {
            navbar.style.backgroundColor = "rgba(20, 20, 20, 0.6)";
        } else if (divHeight < lastKnownScrollPosition) {
            navbar.style.backgroundColor = "rgba(20, 20, 20, 1)";
        }
    });
});