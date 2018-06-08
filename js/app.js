document.addEventListener("DOMContentLoaded", function () {

    //Obsługa slidera
    var liElements = document.querySelectorAll(".slider>div>ul>li");
    var sliderIndex = 0;
    var sliderButtons = document.querySelectorAll(".col-10");

    function moveSlideToRight() {

        liElements[sliderIndex].classList.remove("slideFromRight");
        liElements[sliderIndex].classList.remove("slideFromLeft");
        liElements[sliderIndex].classList.add("slideToRight");
        setTimeout(function () {
            liElements[sliderIndex].style.display="none";
            liElements[sliderIndex].classList.remove("slideToRight");

        if (++sliderIndex > (liElements.length - 1)) {
            sliderIndex = 0;
        }

        liElements[sliderIndex].style.display="flex";
        liElements[sliderIndex].classList.add("slideFromLeft");

        clearInterval(interval);
        interval = setInterval(moveSlideToRight,8000);
        }, 1000)

    }

    function moveSlideToLeft() {

        liElements[sliderIndex].classList.remove("slideFromLeft");
        liElements[sliderIndex].classList.remove("slideFromRight");
        liElements[sliderIndex].classList.add("slideToLeft");

        setTimeout(function () {
            liElements[sliderIndex].style.display="none";
            liElements[sliderIndex].classList.remove("slideToLeft");

            if (--sliderIndex < 0) {
                sliderIndex = liElements.length - 1;
            }

            liElements[sliderIndex].style.display="flex";
            liElements[sliderIndex].classList.add("slideFromRight");

            clearInterval(interval);
            interval = setInterval(moveSlideToLeft,8000);
        }, 1000)
    }


    sliderButtons[1].addEventListener('click',moveSlideToRight);


    sliderButtons[0].addEventListener('click', moveSlideToLeft);

    var interval = setInterval(moveSlideToRight,8000);

    //Obsługa kalkulatora


    function summaryTheOrder() {
        var tableOfSummary = [];
        tableOfSummary.push(parseInt(titleOfChairValue.innerText));
        tableOfSummary.push(parseInt(colorOfChairValue.innerText));
        tableOfSummary.push(parseInt(patternOfChairValue.innerText));
        tableOfSummary.push(parseInt(trasportValue.innerText));

        let sum = 0;
        for (var i = 0; i < tableOfSummary.length; i++) {
            if (!isNaN(tableOfSummary[i])) {
                sum += tableOfSummary[i];
            }
        }

        sumOfPrices.innerText = sum;
    }


    var dropdownElementsCalculator = document.querySelectorAll(".drop_down_list");
    var ulDropdownElements = document.querySelectorAll('.list_panel');
    var transportCheckbox = document.getElementById('transport');

    for (let i = 0; i < dropdownElementsCalculator.length; i++) {
        dropdownElementsCalculator[i].children[2].classList.toggle('invisible');
    }



    var titleOfChair = document.querySelector('.summary_panel>.panel_left>.title');
    var colorOfChair = document.querySelector('.summary_panel>.panel_left>.color');
    var patternOfChair = document.querySelector('.summary_panel>.panel_left>.pattern');
    var titleOfChairValue = document.querySelector('.summary_panel>.panel_right>.title');
    var colorOfChairValue = document.querySelector('.summary_panel>.panel_right>.color');
    var patternOfChairValue = document.querySelector('.summary_panel>.panel_right>.pattern');
    var trasportValue = document.querySelector('.summary_panel>.panel_right>.transport');
    var sumOfPrices = document.querySelector('.sum');

    for (var i = 0; i < ulDropdownElements.length; i++) {
        console.log(ulDropdownElements[i].children.length);
        for (var j = 0; j < ulDropdownElements[i].children.length; j++) {

            switch (i) {
                case 0:
                    ulDropdownElements[i].children[j].addEventListener('click', function () {

                        titleOfChair.innerText = this.innerText;
                        titleOfChairValue.innerHTML = this.getAttribute('data-price');

                        this.parentElement.parentElement.children[0].innerText = this.innerText;
                        console.log(this.parentElement.classList);


                        summaryTheOrder();


                    })
                    break;

                case 1:
                    ulDropdownElements[i].children[j].addEventListener('click', function () {

                        colorOfChair.innerText = this.innerText;
                        colorOfChairValue.innerHTML = this.getAttribute('data-price');

                        this.parentElement.parentElement.children[0].innerText = this.innerText;


                        summaryTheOrder();

                    })
                    break;

                case 2:
                    ulDropdownElements[i].children[j].addEventListener('click', function () {

                        patternOfChair.innerText = this.innerText;
                        patternOfChairValue.innerHTML = this.getAttribute('data-price');

                        this.parentElement.parentElement.children[0].innerText = this.innerText;
                        summaryTheOrder();
                    })
                    break;
            }
        }
    }


    var transportOfChair = document.querySelector('.summary_panel>.panel_left>.transport');

    transportCheckbox.addEventListener('change', function () {
        if (trasportValue.innerText === '') {
            transportOfChair.innerText = "Transport";
            trasportValue.innerText = transportCheckbox.getAttribute('data-transport-price');
        } else {
            transportOfChair.innerText = '';
            trasportValue.innerText = '';
        }

        summaryTheOrder();

    })

    dropdownElementsCalculator[0].addEventListener('click', function () {
        dropdownElementsCalculator[0].children[2].classList.toggle('invisible');
    })
    dropdownElementsCalculator[1].addEventListener('click', function () {
        dropdownElementsCalculator[1].children[2].classList.toggle('invisible');
    })

    dropdownElementsCalculator[2].addEventListener('click', function () {
        dropdownElementsCalculator[2].children[2].classList.toggle('invisible');
    })



    //Wysuwane menu w mobile-view


    var menuButton = $('#menu');
    var menu  = $('.slideMenu');
    var i = 0;

    menuButton.on('click', function () {
        if(i==0){


            $('nav').animate({height: "400px"},1500);
            i = 1;
        } else {
            i = 0;

            $('nav').animate({height: "80px"},1500);
        }

        menu.slideToggle(1500);

    })


});


