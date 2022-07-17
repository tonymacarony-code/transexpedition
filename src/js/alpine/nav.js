export default ($el) => ({
    mobileMenu: false,
    html: document.querySelector('html'),
    menu: $el.querySelector('.menu'),
    init() {
        this.mobileMenuItem();
    },
    hamburgerClick() {
        this.mobileMenu = !this.mobileMenu;
        this.html.classList.toggle('overflow-hidden');
    },
    mobileMenuItem() {
        var menu = this.menu,
            dropMenu = menu.querySelectorAll('.menu-item-has-children');

        dropMenu.forEach(function (item) {
            item.addEventListener('click', function (e) {
                if (e.target == e.currentTarget) {
                    item.classList.toggle('open');
                }
            });
        });
    },
});
