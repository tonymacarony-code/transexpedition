document.addEventListener('DOMContentLoaded', () => {
    let headerForm = document.getElementById('header-form');
    let aboutForm = document.getElementById('about-form');
    let footerForm = document.getElementById('footer-form');

    headerForm.addEventListener('submit', async (e) => {
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
        var message = `\n | Имя: ${data.name} \n | Телефон: ${data.phone} \n | Email: ${data.email} \n | Комментарий: ${data.comment} \n`;

        var token = '5481519098:AAHfqzfVxtqlN0IJjsVrtKnu2JAzLvDg8es';
        var chat_id = -1001752986825;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

        var oReq = await fetch(url);
    });
    aboutForm.addEventListener('submit', async (e) => {
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
        var message = `\n | Имя: ${data.name} \n | Телефон: ${data.phone} \n | Email: ${data.email} \n | Комментарий: ${data.comment} \n`;

        var token = '5481519098:AAHfqzfVxtqlN0IJjsVrtKnu2JAzLvDg8es';
        var chat_id = -1001752986825;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

        var oReq = await fetch(url);
    });
    footerForm.addEventListener('submit', async (e) => {
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
        var message = `\n | Имя: ${data.name} \n | Телефон: ${data.phone} \n | Email: ${data.email} \n | Комментарий: ${data.comment} \n`;

        var token = '5481519098:AAHfqzfVxtqlN0IJjsVrtKnu2JAzLvDg8es';
        var chat_id = -1001752986825;
        var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

        var oReq = await fetch(url);
    });
});
