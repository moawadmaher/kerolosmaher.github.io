$(window).load(function () {
    //document.addEventListener('contextmenu', event => event.preventDefault());

    $(".loader").fadeOut(1500);
    $("body").css("overflow-y", "auto");

    $(".contact-hero img.arrow").addClass("animated-arrow");
    $(".contact-page-section .info").addClass("animated-info-box");


    
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 500;
    document.documentElement.scrollTop = 500;
}

$('.slide-size img').click(function (e) {
    console.log(e);
    $('#imgshow').attr('src', e.originalEvent.path[0].currentSrc);
    $('#divshow').show();
});

function closeshow() {
    $('#divshow').hide();
}

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

    //$('.products a.facial').mouseenter(function () {
    //    $(this).find('img').attr("src", "img/products/product1-wh.png");
    //});
    //$('.products a.facial').mouseleave(function () {
    //    $(this).find('img').attr("src", "img/products/product1.png");
    //});
    //$('.products a.kitchen').mouseenter(function () {
    //    $(this).find('img').attr("src", "img/products/product2-wh.png");
    //});
    //$('.products a.kitchen').mouseleave(function () {
    //    $(this).find('img').attr("src", "img/products/product2.png");
    //});
    //$('.products a.pocket').mouseenter(function () {
    //    $(this).find('img').attr("src", "img/products/product3-wh.png");
    //});
    //$('.products a.pocket').mouseleave(function () {
    //    $(this).find('img').attr("src", "img/products/product3.png");
    //});
    //$('.products a.Toilet').mouseenter(function () {
    //    $(this).find('img').attr("src", "img/products/product4-wh.png");
    //});
    //$('.products a.Toilet').mouseleave(function () {
    //    $(this).find('img').attr("src", "img/products/product4.png");
    //});
    //$('.products a.Napkins').mouseenter(function () {
    //    $(this).find('img').attr("src", "img/products/product5-wh.png");
    //});
    //$('.products a.Napkins').mouseleave(function () {
    //    $(this).find('img').attr("src", "img/products/product5.png");
    //});


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
    $('.tab-category').removeClass('category-active');
    $('#tab-category1').addClass('category-active');

    $('#tab-category1').find('img').attr("src", "img/products/product1-wh.png");
    $('#tab-category3').find('img').attr("src", "img/products/product3.png");
    $('#tab-category4').find('img').attr("src", "img/products/product4.png");
    $('#tab-category5').find('img').attr("src", "img/products/product5.png");
    $('#tab-category2').find('img').attr("src", "img/products/product2.png");

    document.body.scrollTop = 0;

    $('#nylon').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_compressed() {

    $('.tab-category').removeClass('category-active');
    $('#tab-category2').addClass('category-active');

    $('#tab-category1').find('img').attr("src", "img/products/product1.png");
    $('#tab-category3').find('img').attr("src", "img/products/product3.png");
    $('#tab-category4').find('img').attr("src", "img/products/product4.png");
    $('#tab-category5').find('img').attr("src", "img/products/product5.png");
    $('#tab-category2').find('img').attr("src", "img/products/product2-wh.png");

    document.body.scrollTop = 0;

    $('#compressed').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_classic() {

    $('.tab-category').removeClass('category-active');
    $('#tab-category3').addClass('category-active');

    $('#tab-category1').find('img').attr("src", "img/products/product1.png");
    $('#tab-category3').find('img').attr("src", "img/products/product3-wh.png");
    $('#tab-category4').find('img').attr("src", "img/products/product4.png");
    $('#tab-category5').find('img').attr("src", "img/products/product5.png");
    $('#tab-category2').find('img').attr("src", "img/products/product2.png");

    document.body.scrollTop = 0;

    $('#classic').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_compressed2() {

    $('.tab-category').removeClass('category-active');
    $('#tab-category4').addClass('category-active');

    $('#tab-category1').find('img').attr("src", "img/products/product1.png");
    $('#tab-category3').find('img').attr("src", "img/products/product3.png");
    $('#tab-category4').find('img').attr("src", "img/products/product4-wh.png");
    $('#tab-category5').find('img').attr("src", "img/products/product5.png");
    $('#tab-category2').find('img').attr("src", "img/products/product2.png");

    document.body.scrollTop = 0;

    $('#compressed2').trigger("click");
    $(".loader").show().delay(3000).fadeOut();
}

function trigger_napkins() {
    $('.tab-category').removeClass('category-active');
    $('#tab-category5').addClass('category-active');

    $('#tab-category1').find('img').attr("src", "img/products/product1.png");
    $('#tab-category3').find('img').attr("src", "img/products/product3.png");
    $('#tab-category4').find('img').attr("src", "img/products/product4.png");
    $('#tab-category5').find('img').attr("src", "img/products/product5-wh.png");
    $('#tab-category2').find('img').attr("src", "img/products/product2.png");

    document.body.scrollTop = 0;
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
    //    infinite: true,
    //    autoplay: true,
    //    autoplaySpeed: 2000,
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    focusOnSelect: true,
    //    prevArrow: $('ul.nylon li.right'),
    //    nextArrow: $('ul.nylon li.left')
    //});

    $('.SlideAFNnylon').slick({
        asNavFor: '.SlideAFNnylono',
        lazyLoad: 'ondemand',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('ul.AFNnylon li.right'),
        nextArrow: $('ul.AFNnylon li.left')
    });

    $('.SlideAFNnylono').slick({
        asNavFor: '.SlideAFNnylon',
        lazyLoad: 'ondemand',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.SlideAFNnylon').hover(function () {
        $('.SlideAFNnylon').slick('slickPause');
    });
    $('.SlideAFNnylon').mouseleave(function () {
        $('.SlideAFNnylon').slick('slickPlay');
    });



    //$('.SlideAFNnylon2').slick({
    //    lazyLoad: 'ondemand',
    //    asNavFor: '.SlideAFNnylon',
    //    dots: false,
    //    centerMode: true,
    //    centerPadding: '0',
    //    infinite: true,
    //    autoplay: true,
    //    autoplaySpeed: 2000,
    //    slidesToShow: 1,
    //    slidesToScroll: 1,
    //    focusOnSelect: true,
    //    prevArrow: $('ul.AFNnylon li.right'),
    //    nextArrow: $('ul.AFNnylon li.left')
    //});


    $('.sliderNavFor1').slick({
        asNavFor: '.sliderNavFor1o',
        lazyLoad: 'ondemand',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('ul.nylon400 li.right'),
        nextArrow: $('ul.nylon400 li.left')
    });

    $('.sliderNavFor1o').slick({
        asNavFor: '.sliderNavFor1',
        lazyLoad: 'ondemand',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.sliderNavFor1').hover(function () {
        $('.sliderNavFor1').slick('slickPause');
    });
    $('.sliderNavFor1').mouseleave(function () {
        $('.sliderNavFor1').slick('slickPlay');
    });

    $('.sliderNavFor999').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor999o',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon999 li.right'),
        nextArrow: $('ul.nylon999 li.left')
    });
    $('.sliderNavFor999o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor999',
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor999').hover(function () {
        $('.sliderNavFor999').slick('slickPause');
    });
    $('.sliderNavFor999').mouseleave(function () {
        $('.sliderNavFor999').slick('slickPlay');
    });

    $('.sliderNavFor2').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor2o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon550 li.right'),
        nextArrow: $('ul.nylon550 li.left')
    });

    $('.sliderNavFor2o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor2',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor2').hover(function () {
        $('.sliderNavFor2').slick('slickPause');
    });
    $('.sliderNavFor2').mouseleave(function () {
        $('.sliderNavFor2').slick('slickPlay');
    });


    $('.sliderNavFor3').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor3o',
        dots: false,
        centerPadding: '0',
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon777 li.right'),
        nextArrow: $('ul.nylon777 li.left')
    });

    $('.sliderNavFor3o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor3',
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor3').hover(function () {
        $('.sliderNavFor3').slick('slickPause');
    });
    $('.sliderNavFor3').mouseleave(function () {
        $('.sliderNavFor3').slick('slickPlay');
    });


    $('.sliderNavFor4').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor4o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.duplex500 li.right'),
        nextArrow: $('ul.duplex500 li.left')
    });

    $('.sliderNavFor4o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor4',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor4').hover(function () {
        $('.sliderNavFor4').slick('slickPause');
    });
    $('.sliderNavFor4').mouseleave(function () {
        $('.sliderNavFor4').slick('slickPlay');
    });


    $('.sliderNavFor7').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor7o',
        dots: false,
        centerPadding: '0',
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.aroma li.right'),
        nextArrow: $('ul.aroma li.left')
    });

    $('.sliderNavFor7o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor7',
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });


    $('.sliderNavFor7').hover(function () {
        $('.sliderNavFor7').slick('slickPause');
    });
    $('.sliderNavFor7').mouseleave(function () {
        $('.sliderNavFor7').slick('slickPlay');
    });


    $('.sliderNavFor8').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor8o',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed li.right'),
        nextArrow: $('ul.compressed li.left')
    });
    $('.sliderNavFor8o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor8',
        rtl: true,
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor8').hover(function () {
        $('.sliderNavFor8').slick('slickPause');
    });
    $('.sliderNavFor8').mouseleave(function () {
        $('.sliderNavFor8').slick('slickPlay');
    });

    $('.sliderNavFor80').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor80o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed80 li.right'),
        nextArrow: $('ul.compressed80 li.left')
    });
    $('.sliderNavFor80o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor80',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor80').hover(function () {
        $('.sliderNavFor80').slick('slickPause');
    });
    $('.sliderNavFor80').mouseleave(function () {
        $('.sliderNavFor80').slick('slickPlay');
    });

    $('.sliderNavFor81').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor81o',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed li.right'),
        nextArrow: $('ul.compressed li.left')
    });

    $('.sliderNavFor81o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor81',
        rtl: true,
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor81').hover(function () {
        $('.sliderNavFor81').slick('slickPause');
    });
    $('.sliderNavFor81').mouseleave(function () {
        $('.sliderNavFor81').slick('slickPlay');
    });

    $('.sliderNavFor9').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor9o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        focusOnSelect: true,
        prevArrow: $('ul.classic li.right'),
        nextArrow: $('ul.classic li.left')
    });
    $('.sliderNavFor9o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor9',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor9').hover(function () {
        $('.sliderNavFor9').slick('slickPause');
    });
    $('.sliderNavFor9').mouseleave(function () {
        $('.sliderNavFor9').slick('slickPlay');
    });

    $('.sliderNavFor90').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor90o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.classic90 li.right'),
        nextArrow: $('ul.classic90 li.left')
    });

    $('.sliderNavFor90o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor90',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor90').hover(function () {
        $('.sliderNavFor90').slick('slickPause');
    });
    $('.sliderNavFor90').mouseleave(function () {
        $('.sliderNavFor90').slick('slickPlay');
    });



    $('.sliderNavFor10').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor10o',
        dots: false,
        centerPadding: '0',
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.classica li.right'),
        nextArrow: $('ul.classica li.left')
    });
    $('.sliderNavFor10o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor10',
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor10').hover(function () {
        $('.sliderNavFor10').slick('slickPause');
    });
    $('.sliderNavFor10').mouseleave(function () {
        $('.sliderNavFor10').slick('slickPlay');
    });


    $('.sliderNavFor11').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor11o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.economy li.right'),
        nextArrow: $('ul.economy li.left')
    });
    $('.sliderNavFor11o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor11',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor11').hover(function () {
        $('.sliderNavFor11').slick('slickPause');
    });
    $('.sliderNavFor11').mouseleave(function () {
        $('.sliderNavFor11').slick('slickPlay');
    });

    $('.sliderNavFor12').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor12o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.multiee li.right'),
        nextArrow: $('ul.multiee li.left')
    });
    $('.sliderNavFor12o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor12',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor12').hover(function () {
        $('.sliderNavFor12').slick('slickPause');
    });
    $('.sliderNavFor12').mouseleave(function () {
        $('.sliderNavFor12').slick('slickPlay');
    });

    $('.sliderNavFor13').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor13o',
        dots: false,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed2 li.right'),
        nextArrow: $('ul.compressed2 li.left')
    });
    $('.sliderNavFor13o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor13',
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });
    $('.sliderNavFor13').hover(function () {
        $('.sliderNavFor13').slick('slickPause');
    });
    $('.sliderNavFor13').mouseleave(function () {
        $('.sliderNavFor13').slick('slickPlay');
    });


    $('.sliderNavFor131').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor131o',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed131 li.right'),
        nextArrow: $('ul.compressed131 li.left')
    });
    $('.sliderNavFor131o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor131',
        rtl: true,
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor131').hover(function () {
        $('.sliderNavFor131').slick('slickPause');
    });
    $('.sliderNavFor131').mouseleave(function () {
        $('.sliderNavFor131').slick('slickPlay');
    });

    $('.sliderNavFor14').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor14o',
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.multi li.right'),
        nextArrow: $('ul.multi li.left')
    });
    $('.sliderNavFor14o').slick({
        lazyLoad: 'ondemand',
        asNavFor: '.sliderNavFor14',
        rtl: true,
        dots: false,
        
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true
    });

    $('.sliderNavFor14').hover(function () {
        $('.sliderNavFor14').slick('slickPause');
    });
    $('.sliderNavFor14').mouseleave(function () {
        $('.sliderNavFor14').slick('slickPlay');
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