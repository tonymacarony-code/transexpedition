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



    // Get all the dropdown from document
    document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

    // Dropdown Open and Close function
    function dropDownFunc(dropDown) {
        console.log(dropDown.classList.contains('click-dropdown'));

        if (dropDown.classList.contains('click-dropdown') === true) {
            dropDown.addEventListener('click', function (e) {
                e.preventDefault();

                if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                    // Close the clicked dropdown
                    this.parentElement.classList.remove('dropdown-open');
                    this.nextElementSibling.classList.remove('dropdown-active');

                } else {
                    // Close the opend dropdown
                    closeDropdown();

                    // add the open and active class(Opening the DropDown)
                    this.parentElement.classList.add('dropdown-open');
                    this.nextElementSibling.classList.add('dropdown-active');
                }
            });
        }

        if (dropDown.classList.contains('hover-dropdown') === true) {

            dropDown.onmouseover = dropDown.onmouseout = dropdownHover;

            function dropdownHover(e) {
                if (e.type == 'mouseover') {
                    // Close the opend dropdowns
                    closeDropdown();

                    // add the open and active class(Opening the DropDown)
                    this.parentElement.classList.add('dropdown-open');
                    this.nextElementSibling.classList.add('dropdown-active');

                }

                // if(e.type == 'mouseout'){
                //     // close the dropdown after user leave the list
                //     e.target.nextElementSibling.onmouseleave = closeDropdown;
                // }
            }
        }

    };


    // Listen to the doc click
    window.addEventListener('click', function (e) {

        // Close the menu if click happen outside menu
        if (e.target.closest('.dropdown-container') === null) {
            // Close the opend dropdown
            closeDropdown();
        }

    });


    // Close the openend Dropdowns
    function closeDropdown() {
        console.log('run');

        // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
        document.querySelectorAll('.dropdown-container').forEach(function (container) {
            container.classList.remove('dropdown-open')
        });

        document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
            menu.classList.remove('dropdown-active');
        });
    }

    // close the dropdown on mouse out from the dropdown list
    document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
        // close the dropdown after user leave the list
        dropDownList.onmouseleave = closeDropdown;
    });



});