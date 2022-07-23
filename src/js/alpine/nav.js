export default ($el) => ({
    mobileMenu: false,
    html: document.querySelector('body'),
    menu: $el.querySelector('.menu'),
    init() {
        this.mobileMenuItem();
    },
    hamburgerClick() {
        this.mobileMenu = !this.mobileMenu;
        this.html.classList.toggle('overflow-hidden');
        this.html.classList.toggle('touch-none');
    },
});
