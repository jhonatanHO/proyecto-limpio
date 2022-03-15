$(document).ready(function () {
    
    /****************************************************/
    /*********************** DESPACHO ***********************/
    /****************************************************/
    
 
    
        // BLOCK DESPACHO
        jQuery('.fm-container-horario .fm-right-horario .view-content').slick({
            infinite: false,
            slidesToShow: 7,
            slidesToScroll: 7,
            autoplay: false,
            // arrows: true,
            dots: false,
            prevArrow: $('.prev-despacho'),
            nextArrow: $('.next-despacho'),
            responsive: [{
                    breakpoint: 576,
                    settings: {
                        // arrows: true,
                        centerPadding: '0px',
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        // arrows: true,
                        centerPadding: '0px',
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        // arrows: true,
                        centerPadding: '0px',
                        slidesToShow: 7,
                        slidesToScroll: 7
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        // arrows: true,
                        centerPadding: '0px',
                        slidesToShow: 7,
                        slidesToScroll: 7
                    }
                }
            ]
        });


});
    