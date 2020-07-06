$(window).load(function() {
    $(".loader").fadeOut(1500);
    $("body").css("overflow-y", "auto");

    $(".contact-hero img.arrow").addClass("animated-arrow");
    $(".contact-page-section .info").addClass("animated-info-box");
});
$(document).ready(function() {

    /* Home Slider */
    /* branches */

    $('.branches .cssr').click(function (e) {

        $('#message1').show();


        e.preventDefault();
        $(".branches .for-arrow").removeClass("active");
        $(this).parent().toggleClass('active');
        $('section.qc').fadeOut();
        $('section.events').fadeOut();
        $('section.csr').fadeIn();
        $('.cssr .arrow').addClass('rotate-arrow');
        $('.qcc .arrow').removeClass('rotate-arrow');
        $('.eventss .arrow').removeClass('rotate-arrow');
        $('.csr-slider').slick({
            slidesToShow: 1,
            prevArrow: $('ul.csr li.right'),
            nextArrow: $('ul.csr li.left')
        });

        

    });
    $('.branches .qcc').click(function (e) {

        $('#message1').show();


        e.preventDefault();
        $(".branches .for-arrow").removeClass("active");
        $(this).parent().toggleClass('active');
        $('section.csr').fadeOut();
        $('section.events').fadeOut();
        $('section.qc').fadeIn();
        $('.qcc .arrow').addClass('rotate-arrow');
        $('.cssr .arrow').removeClass('rotate-arrow');
        $('.eventss .arrow').removeClass('rotate-arrow');
        $('.qc-slider').slick({
            slidesToShow: 1,
            prevArrow: $('ul.qc li.right'),
            nextArrow: $('ul.qc li.left')
        });

        
    });

    $('.branches .eventss').click(function (e) {

        $('#message1').show();


        e.preventDefault();
        $(".branches .for-arrow").removeClass("active");
        $(this).parent().toggleClass('active');
        $('section.csr').fadeOut();
        $('section.qc').fadeOut();
        $('section.events').fadeIn();
        $('.eventss .arrow').addClass('rotate-arrow');
        $('.qcc .arrow').removeClass('rotate-arrow');
        $('.cssr .arrow').removeClass('rotate-arrow');
        $('.events-slider').slick({
            slidesToShow: 1,
            prevArrow: $('ul.event li.right'),
            nextArrow: $('ul.event li.left')
        });

        
    });

    $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');

        },
        allowPageScroll: "vertical"

    });


    $(document).on('click', '.event.arrows .left', function() {
        $("section.events ul.events li.active").removeClass("active").next().addClass("active");
    });

    $(document).on('click', '.event.arrows .right', function() {
        $("section.events ul.events li.active").removeClass("active").prev().addClass("active");
    });


    // $("#showMenu").click(function() {
    //     $("header .navbar-nav").toggleClass("active");
    //     $(this).toggleClass("is-active");
    // })

    // Fire wow.js
    new WOW().init();




    // products Tabs
    $('.products a').click(function () {
        $('.all-products').fadeOut();
    });
    $('.products a.facial').click(function () {
        $('#hero-bg').attr("src", "./img/products/Facial1.png");

        //$('.products').addClass('facial').removeClass('Kitchen pocket Toilet Napkins');
    });
    $('.products a.Kitchen').click(function () {
        $('#hero-bg').attr("src", "./img/products/Kitchen1.png");

        //$('.products').addClass('Kitchen').removeClass('facial pocket Toilet Napkins');
    });
    $('.products a.pocket').click(function () {
        $('#hero-bg').attr("src", "./img/products/Pocket1.png");

        //$('.products').addClass('pocket').removeClass('facial Kitchen Toilet Napkins');
    });
    $('.products a.Toilet').click(function () {
        $('#hero-bg').attr("src", "./img/products/Toilet1.png");

        //$('.products').addClass('Toilet').removeClass('facial Kitchen pocket Napkins');
    });
    $('.products a.Napkins').click(function () {
        $('#hero-bg').attr("src", "./img/products/Napkins1.png");

        //$('.products').addClass('Napkins').removeClass('facial Kitchen pocket Toilet');
    });

    // change img color

    $('.products a.facial').mouseenter(function () {
        $(this).find('img').attr("src", "img/products/product1-wh.png");
    });
    $('.products a.facial').mouseleave(function () {
        $(this).find('img').attr("src", "img/products/product1.png");
    });
    $('.products a.kitchen').mouseenter(function () {
        $(this).find('img').attr("src", "img/products/product2-wh.png");
    });
    $('.products a.kitchen').mouseleave(function () {
        $(this).find('img').attr("src", "img/products/product2.png");
    });
    $('.products a.pocket').mouseenter(function () {
        $(this).find('img').attr("src", "img/products/product3-wh.png");
    });
    $('.products a.pocket').mouseleave(function () {
        $(this).find('img').attr("src", "img/products/product3.png");
    });
    $('.products a.Toilet').mouseenter(function () {
        $(this).find('img').attr("src", "img/products/product4-wh.png");
    });
    $('.products a.Toilet').mouseleave(function () {
        $(this).find('img').attr("src", "img/products/product4.png");
    });
    $('.products a.Napkins').mouseenter(function () {
        $(this).find('img').attr("src", "img/products/product5-wh.png");
    });
    $('.products a.Napkins').mouseleave(function () {
        $(this).find('img').attr("src", "img/products/product5.png");
    });


    /* Add new dropdown */
    $(".add-more").click(function() {
        $(".education .col-md-7:last").after('<div class="col-md-7 col-xs-12"><div class="form-group"><label>Educational Level</label><select class="form-control"><option>Choose ...</option><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div>');
    });

    /* Datepicker */
    $('.datepicker').datepicker({
        autoclose: true
    });
});

function trigger_nylon() {
    $('#nylon').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_compressed() {
    $('#compressed').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_classic() {
    $('#classic').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_compressed2() {
    $('#compressed2').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}
/////////////////////

function show_nylon() {
    $('.nylon').css("transform", "unset!important");

    $('.nylon').show();
    $('.aroma').hide();
    $('.duplex').hide();
    $('.tamara').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_aroma() {
    $('.aroma').css("transform", "unset!important");
    $('.nylon').hide();
    $('.aroma').show();
    $('.duplex').hide();
    $('.tamara').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_duplex() {
    $('.duplex').css("transform", "unset!important");
    $('.nylon').hide();
    $('.aroma').hide();
    $('.duplex').show();
    $('.tamara').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_tamara() {
    $('.tamara').css("transform", "unset!important");
    $('.nylon').hide();
    $('.aroma').hide();
    $('.duplex').hide();
    $('.tamara').show();
    $(".loader").show().delay(3000).fadeOut();
}

function show_compressed2() {
    $('.compressed2').css("transform", "unset!important");
    $('.compressed2').show();
    $('.compressed-aroma2').hide();
    $('.semi-compressed2').hide();
    $('.economy2').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_compressed_aroma2() {
    $('.compressed-aroma2').css("transform", "unset!important");
    $('.compressed2').hide();
    $('.compressed-aroma2').show();
    $('.semi-compressed2').hide();
    $('.economy2').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_semi_compressed2() {
    $('.semi-compressed2').css("transform", "unset!important");
    $('.compressed2').hide();
    $('.compressed-aroma2').hide();
    $('.semi-compressed2').show();
    $('.economy2').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_economy2() {
    $('.economy2').css("transform", "unset!important");
    $('.compressed2').hide();
    $('.compressed-aroma2').hide();
    $('.semi-compressed2').hide();
    $('.economy2').show();
    $(".loader").show().delay(3000).fadeOut();
}

function show_compressed() {
    $('.compressed').css("transform", "unset!important");
    $('.compressed').show();
    $('.semi-compressed').hide();
    $('.economy').hide();
    $('.multipurpose-rolls').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_semi_compressed() {
    $('.semi-compressed').css("transform", "unset!important");
    $('.compressed').hide();
    $('.semi-compressed').show();
    $('.economy').hide();
    $('.multipurpose-rolls').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_economy() {
    $('.economy').css("transform", "unset!important");
    $('.compressed').hide();
    $('.semi-compressed').hide();
    $('.economy').show();
    $('.multipurpose-rolls').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_multipurpose_rolls() {
    $('.multipurpose-rolls').css("transform", "unset!important");
    $('.compressed').hide();
    $('.semi-compressed').hide();
    $('.economy').hide();
    $('.multipurpose-rolls').show();
    $(".loader").show().delay(3000).fadeOut();
}

function show_classic() {
    $('.classic').css("transform", "unset!important");
    $('.classic').show();
    $('.aromac').hide();
    $(".loader").show().delay(3000).fadeOut();
}

function show_aromac() {
    $('.aromac').css("transform", "unset!important");
    $('.classic').hide();
    $('.aromac').show();
    $(".loader").show().delay(3000).fadeOut();
}


function loading() {
    $(".loader").show().delay(3000).fadeOut();
}



$(window).load(function() {
    // products

    //$('.nylon-slider').slick({
    //    dots: false,
    //    centerMode: true,
    //    centerPadding: '0',
    //    infinite: false,
    //    autoplay: true,
    //    autoplaySpeed: 2000,
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    focusOnSelect: true,
    //    prevArrow: $('ul.nylon li.right'),
    //    nextArrow: $('ul.nylon li.left')
    //});

    $('.SlideAFNnylon').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.SlideAFNnylon',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.AFNnylon li.right'),
        nextArrow: $('ul.AFNnylon li.left')
    });


    //$('.SlideAFNnylon2').slick({
    //    lazyLoad: 'ondemand',
    //    asNavFor: '.SlideAFNnylon',
    //    dots: false,
    //    centerMode: true,
    //    centerPadding: '0',
    //    infinite: false,
    //    autoplay: true,
    //    autoplaySpeed: 2000,
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    focusOnSelect: true,
    //    prevArrow: $('ul.AFNnylon li.right'),
    //    nextArrow: $('ul.AFNnylon li.left')
    //});

    $('.sliderNavFor').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon-all-1 li.right'),
        nextArrow: $('ul.nylon-all-1 li.left')
    });

    $('.sliderNavFor1').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor1',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon400 li.right'),
        nextArrow: $('ul.nylon400 li.left')
    });

    $('.sliderNavFor2').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor2',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon550 li.right'),
        nextArrow: $('ul.nylon550 li.left')
    });

    $('.sliderNavFor3').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor3',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon777 li.right'),
        nextArrow: $('ul.nylon777 li.left')
    });

    $('.sliderNavFor4').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor4',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.duplex li.right'),
        nextArrow: $('ul.duplex li.left')
    });

    $('.sliderNavFor5').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor5',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.kitchen-all-1 li.right'),
        nextArrow: $('ul.kitchen-all-1 li.left')
    });

    $('.sliderNavFor6').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor6',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.tamara li.right'),
        nextArrow: $('ul.tamara li.left')
    });

    $('.sliderNavFor7').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor7',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.aroma li.right'),
        nextArrow: $('ul.aroma li.left')
    });

    $('.sliderNavFor8').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor8',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed li.right'),
        nextArrow: $('ul.compressed li.left')
    });

    $('.sliderNavFor81').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor81',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed li.right'),
        nextArrow: $('ul.compressed li.left')
    });

    $('.sliderNavFor9').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor9',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.classic li.right'),
        nextArrow: $('ul.classic li.left')
    });

    $('.sliderNavFor10').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor10',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.classica li.right'),
        nextArrow: $('ul.classica li.left')
    });

    $('.sliderNavFor11').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor11',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.economy li.right'),
        nextArrow: $('ul.economy li.left')
    });

    $('.sliderNavFor12').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor12',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.multi li.right'),
        nextArrow: $('ul.multi li.left')
    });

    $('.sliderNavFor13').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor13',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed2 li.right'),
        nextArrow: $('ul.compressed2 li.left')
    });

    $('.sliderNavFor131').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor131',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed2 li.right'),
        nextArrow: $('ul.compressed2 li.left')
    });

    $('.sliderNavFor14').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor14',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.economy2 li.right'),
        nextArrow: $('ul.economy2 li.left')
    });

    $('.sliderNavFor15').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor15',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.sami2 li.right'),
        nextArrow: $('ul.sami2 li.left')
    });

    $('.sliderNavFor16').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor16',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.sami3 li.right'),
        nextArrow: $('ul.sami3 li.left')
    });

    $('.sliderNavFor17').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor17',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.aromac3 li.right'),
        nextArrow: $('ul.aromac3 li.left')
    });





    //allslick make ease
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        // init Isotope
        var $grid = $('.items').isotope({
            // options
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).addClass('in').siblings().removeClass('in');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            if ($('.tab-pane').hasClass('active')) {
                $('.items').addClass('visible');
            } else {
                $('.items').removeClass('visible');
            }
        });
        $('.filter-group').on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).addClass('in').siblings().removeClass('in');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
});