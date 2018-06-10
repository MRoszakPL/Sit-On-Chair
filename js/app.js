$(function () {

    //Slider
    var liElements = $(".slider > div > ul > li");
    var sliderIndex = 0;
    var sliderButtons = $(".col-10");


    function moveSlideToRight() {

        liElements.eq(sliderIndex).removeClass("slideFromRight");
        liElements.eq(sliderIndex).removeClass("slideFromLeft");
        liElements.eq(sliderIndex).addClass("slideToRight");

        setTimeout(function () {
            liElements.eq(sliderIndex).css('display', 'none');
            liElements.eq(sliderIndex).removeClass("slideToRight");

            if (++sliderIndex > (liElements.length - 1)) {
                sliderIndex = 0;
            }

            liElements.eq(sliderIndex).css('display', 'flex');
            liElements.eq(sliderIndex).addClass("slideFromLeft");

            //Clearing set behaviour of slider
            clearInterval(interval);

            //Setting new behaviour
            interval = setInterval(moveSlideToRight, 8000);
        }, 1000)
    }

    function moveSlideToLeft() {

        liElements.eq(sliderIndex).removeClass("slideFromLeft");
        liElements.eq(sliderIndex).removeClass("slideFromRight");
        liElements.eq(sliderIndex).addClass("slideToLeft");

        setTimeout(function () {
            liElements.eq(sliderIndex).css('display', 'none');
            liElements.eq(sliderIndex).removeClass("slideToLeft");

            if (--sliderIndex < 0) {
                sliderIndex = liElements.length - 1;
            }

            liElements.eq(sliderIndex).css('display', 'flex');
            lliElements.eq(sliderIndex).addClass("slideFromRight");

            //Clearing set behaviour of slider
            clearInterval(interval);

            //Setting new behaviour
            interval = setInterval(moveSlideToLeft, 8000);
        }, 1000)
    }


    //Assign button of slider to actions
    sliderButtons.eq(0).on('click', moveSlideToLeft);
    sliderButtons.eq(1).on('click', moveSlideToRight);

    //Default slider behaviour
    var interval = setInterval(moveSlideToRight, 8000);

    //Calculator
    var transportOfChair = $('.panel_left>.transport');
    var trasportValue = $('.panel_right>.transport');
    var transportCheckbox = $('#transport');

    var titleOfChair = $('.panel_left>.title');
    var titleOfChairValue = $('.panel_right>.title');

    var colorOfChair = $('.panel_left>.color');
    var colorOfChairValue = $('.panel_right>.color');

    var patternOfChair = $('.panel_left>.pattern');
    var patternOfChairValue = $('.panel_right>.pattern');


    var dropdownElementsCalculator = $(".drop_down_list");
    var ulDropdownElements = $('.list_panel');


    var sumOfPrices = $('.sum');


    //Making summary of cost
    function summaryTheOrder() {

        var tableOfSummary = [];

        tableOfSummary.push(parseInt(titleOfChairValue.text()));
        tableOfSummary.push(parseInt(colorOfChairValue.text()));
        tableOfSummary.push(parseInt(patternOfChairValue.text()));
        tableOfSummary.push(parseInt(trasportValue.text()));

        let sum = 0;
        for (var i = 0; i < tableOfSummary.length; i++) {
            if (!isNaN(tableOfSummary[i])) {
                sum += tableOfSummary[i];
            }
        }

        sumOfPrices.text(sum);
    }

    //All dropdownElements should be invisible at start
    ulDropdownElements.toggle('invisible');


    //When we select value in dropdown we need to set proper values in other elements
    for (var i = 0; i < ulDropdownElements.length; i++) {

        switch (i) {
            case 0:
                ulDropdownElements.eq(i).children().on('click', function () {

                    var element = $(this);

                    titleOfChair.text(element.text());
                    titleOfChairValue.html(element.attr('data-price'));

                    element.parent().parent().children().eq(0).text(element.text());

                    summaryTheOrder();

                })
                break;

            case 1:

                ulDropdownElements.eq(i).children().on('click', function () {

                    var element = $(this);

                    colorOfChair.text(element.text());
                    colorOfChairValue.html(element.attr('data-price'));

                    element.parent().parent().children().eq(0).text(element.text());

                    summaryTheOrder();

                })
                break;

            case 2:


                ulDropdownElements.eq(i).children().on('click', function () {

                    var element = $(this);

                    patternOfChair.text(element.text());
                    patternOfChairValue.html(element.attr('data-price'));

                    element.parent().parent().children().eq(0).text(element.text());

                    summaryTheOrder();
                })
                break;
        }
    }


    //Changing when transport checkbox change state
    transportCheckbox.on('change', function () {

        if (trasportValue.text() === '') {
            transportOfChair.text("Transport");
            trasportValue.text(transportCheckbox.attr('data-transport-price'));
        } else {
            transportOfChair.text('');
            trasportValue.text('');
        }
        summaryTheOrder();

    })

    //Hide/Show dropdown elements of calculator
    dropdownElementsCalculator.on('click', function () {
        var element = $(this);
        element.children().eq(2).toggle('invisible');
    })

    //Sliding menu from above in mobile-view
    var menuButton = $('#menu');
    var menu = $('.slideMenu');
    var i = 0;

    menuButton.on('click', function () {
        if (i == 0) {
            $('nav').animate({height: "25rem"}, 1500);
            i = 1;
        } else {
            i = 0;
            $('nav').animate({height: "5rem"}, 1500);
        }

        menu.slideToggle(1500);
    })

    //Detection of width change
    var laptopScreen = window.matchMedia("(min-width: 1024px)");

    laptopScreen.addListener(function (laptopScreen) {
        if (laptopScreen.matches) {
            $('nav').animate({height: "4rem"}, 1500);
            menu.show();
        } else {
            if(i==1){
                $('nav').animate({height: "25rem"}, 1500);
            } else {
                $('nav').animate({height: "5rem"}, 1500);
                menu.hide();
            }


        }
    });


});


