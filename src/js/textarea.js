document.addEventListener('DOMContentLoaded', () => {
    function countChar(val) {
        var len = val.value.length;
        if (len >= 500) {
            val.value = val.value.substring(0, 500);
        } else {
            $('#charNum').text(500 - len);
        }
    };






    var navbar = document.querySelector('nav')

    console.log(navbar)
    window.onscroll = function () {

        // pageYOffset or scrollY
        if (window.pageYOffset >= 859) {
            navbar.classList.add('bg-opacity-100')
        } else {
            navbar.classList.remove('bg-opacity-100')
            navbar.classList.add('bg-opacity-60')
        }
    }



});