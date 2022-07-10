
document.addEventListener('DOMContentLoaded', () => {
    var phone_input = document.getElementById("myform_phone");

    phone_input.addEventListener('input', () => {
        phone_input.setCustomValidity('');
        phone_input.checkValidity();
    });

    phone_input.addEventListener('invalid', () => {
        if (phone_input.value === '') {
            phone_input.setCustomValidity('Введіть номер телефону!');
        } else {
            phone_input.setCustomValidity('Введіть номер телефону у форматі: +380123456789');
        }
    });
});