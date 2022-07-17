document.addEventListener('DOMContentLoaded', () => {
    let headerForm = document.getElementById('header-form');
    let aboutForm = document.getElementById('about-form');
    let footerForm = document.getElementById('footer-form');

    headerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = {
            name: document.getElementsByName('popup-name')[0].value,
            phone: document.getElementsByName('popup-phone')[0].value,
            email: document.getElementsByName('popup-email')[0].value,
            comment: document.getElementsByName('popup-comment')[0].value,
        };
        document
            .getElementById('popup-submit')
            .setAttribute('disabled', 'disabled');
        console.log(data);
    });
    aboutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = {
            name: document.getElementsByName('popup2-name')[0].value,
            phone: document.getElementsByName('popup2-phone')[0].value,
            email: document.getElementsByName('popup2-email')[0].value,
            comment: document.getElementsByName('popup2-comment')[0].value,
        };
        document
            .getElementById('popup2-submit')
            .setAttribute('disabled', 'disabled');
        console.log(data);
    });
    footerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = {
            name: document.getElementsByName('footer-name')[0].value,
            phone: document.getElementsByName('footer-phone')[0].value,
            email: document.getElementsByName('footer-email')[0].value,
            comment: document.getElementsByName('footer-comment')[0].value,
        };
        document
            .getElementById('footer-submit')
            .setAttribute('disabled', 'disabled');
        console.log(data);
    });
});
