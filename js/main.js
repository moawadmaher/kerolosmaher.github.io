$(window).load(function() {
    $(".loader").fadeOut(1500);
    $("body").css("overflow-y", "auto");

    $(".contact-hero img.arrow").addClass("animated-arrow");
    $(".contact-page-section .info").addClass("animated-info-box");
});
$(document).ready(function() {

    /* Home Slider */


    /* branches */

    $('.branches .cssr').click(function(e) {
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

    })
    $('.branches .qcc').click(function(e) {
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

    })

    $('.branches .eventss').click(function(e) {
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
    $('.products a').click(function() {
        $('.all-products').fadeOut();
    })
    $('.products a.facial').click(function() {
        $('.products').addClass('facial').removeClass('Kitchen pocket Toilet Napkins');
    })
    $('.products a.Kitchen').click(function() {
        $('.products').addClass('Kitchen').removeClass('facial pocket Toilet Napkins');
    })
    $('.products a.pocket').click(function() {
        $('.products').addClass('pocket').removeClass('facial Kitchen Toilet Napkins');
    })
    $('.products a.Toilet').click(function() {
        $('.products').addClass('Toilet').removeClass('facial Kitchen pocket Napkins');
    })
    $('.products a.Napkins').click(function() {
        $('.products').addClass('Napkins').removeClass('facial Kitchen pocket Toilet');
    })

    // change img color

    $('.products a.facial').mouseenter(function() {
        $(this).find('img').attr("src", "img/products/product1-wh.png");
    })
    $('.products a.facial').mouseleave(function() {
        $(this).find('img').attr("src", "img/products/product1.png");
    })
    $('.products a.kitchen').mouseenter(function() {
        $(this).find('img').attr("src", "img/products/product2-wh.png");
    })
    $('.products a.kitchen').mouseleave(function() {
        $(this).find('img').attr("src", "img/products/product2.png");
    })

    $('.products a.pocket').mouseenter(function() {
        $(this).find('img').attr("src", "img/products/product3-wh.png");
    })
    $('.products a.pocket').mouseleave(function() {
        $(this).find('img').attr("src", "img/products/product3.png");
    })

    $('.products a.Toilet').mouseenter(function() {
        $(this).find('img').attr("src", "img/products/product4-wh.png");
    })
    $('.products a.Toilet').mouseleave(function() {
        $(this).find('img').attr("src", "img/products/product4.png");
    })
    $('.products a.Napkins').mouseenter(function() {
        $(this).find('img').attr("src", "img/products/product5-wh.png");
    })
    $('.products a.Napkins').mouseleave(function() {
        $(this).find('img').attr("src", "img/products/product5.png");
    })


    /* Add new dropdown */
    $(".add-more").click(function() {
        $(".education .col-md-7:last").after('<div class="col-md-7 col-xs-12"><div class="form-group"><label>Educational Level</label><select class="form-control"><option>Choose ...</option><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div>');
    });

    /* Datepicker */
    $('.datepicker').datepicker({
        autoclose: true,
    });
});

//function trigger_nylon() {
//    $('#nylon').trigger("click");
//}

//function trigger_Compressed() {
//    $('#Compressed').trigger("click");
//}

//function trigger_colored() {
//    $('#colored').trigger("click");
//}

//function trigger_CCompressed() {
//    $('#CCompressed').trigger("click");
//}

//function trigger_Colorrred() {
//    $('#Colorrred').trigger("click");
//}

$(window).load(function() {
    // products

    $('.nylon-slider').slick({
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon li.right'),
        nextArrow: $('ul.nylon li.left')
    });
    $('.kitchen-slider').slick({
        rtl: true,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: -1,
        focusOnSelect: true,
        prevArrow: $('ul.nylon li.right'),
        nextArrow: $('ul.nylon li.left')
        
    });
    $('.pocket-slider').slick({
        dots: false,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.pocket li.right'),
        nextArrow: $('ul.pocket li.left')
    });
    $('.Toilet-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.Toilet li.right'),
        nextArrow: $('ul.Toilet li.left')
    });
    $('.facial-slider').slick({
        dots: true,
        centerMode: true,

        customPaging: function (slider, i) {
            if (i === 0) {
                return '<img src="img/products/white/100-Classic.png" style="position:absolute;right:0;top:0;width:120px;"/>';
            }
            if (i === 1) {
                return '<img src="img/products/white/100-Classic.png" style="position:absolute;right:0;top:80px;width:120px;"/>';
            }
            if (i === 2) {
                return '<img src="img/products/white/550-Classic-white.png" style="position:absolute;right:0;top:160px;width:120px;"/>';
            }
            if (i === 3) {
                return '<img src="img/products/white/550-Classic-white.png" style="position:absolute;right:0;top:240px;width:120px;"/>';
            }


            
        },
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.facial li.right'),
        nextArrow: $('ul.facial li.left'),
    });
    $('.aroma-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.aroma li.right'),
        nextArrow: $('ul.aroma li.left'),
    });
    $('.duplex-slider').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('ul.duplex li.right'),
        nextArrow: $('ul.duplex li.left'),
    });
    $('.compressed-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.compressed li.right'),
        nextArrow: $('ul.compressed li.left'),
    });
    $('.semi-compressed-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.semi-compressed li.right'),
        nextArrow: $('ul.semi-compressed li.left'),
    });
    $('.colored-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.colored li.right'),
        nextArrow: $('ul.colored li.left'),
    });
    $('.aa-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.aa li.right'),
        nextArrow: $('ul.aa li.left'),
    });
    $('.CCompressed-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.CCompressed li.right'),
        nextArrow: $('ul.CCompressed li.left'),
    });
    $('.SSemi-compressed-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.SSemi-compressed li.right'),
        nextArrow: $('ul.SSemi-compressed li.left'),
    });
    $('.economy-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.economy li.right'),
        nextArrow: $('ul.economy li.left'),
    });
    $('.arroma-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.arroma li.right'),
        nextArrow: $('ul.arroma li.left'),
    });
    $('.Colorrred-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.Colorrred li.right'),
        nextArrow: $('ul.Colorrred li.left'),
    });
    $('.white-slider').slick({
        dots: true,
        centerMode: true,
        centerPadding: '0',
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('ul.white li.right'),
        nextArrow: $('ul.white li.left'),
    });

    //allslick make ease










    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        // init Isotope
        var $grid = $('.items').isotope({
            // options

        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).addClass('in').siblings().removeClass('in');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            if ($('.tab-pane').hasClass('active')) {
                $('.items').addClass('visible');
            } else {
                $('.items').removeClass('visible');
            }
        })
        $('.filter-group').on('click', 'button', function() {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).addClass('in').siblings().removeClass('in');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        })
    });


});