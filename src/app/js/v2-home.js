$(document).ready(function () {

/****************************************************/
/********************** HEADER **********************/
/****************************************************/

    // BLOCK SCROLL
    $(document).scroll(function (event) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop <= 42) {
            $('.espacio-header').removeClass('scroll-active');
            $('.container-menu-top').removeClass('scroll-active');
            $('.container-buscar').removeClass('scroll-active');
            $('.container-menu-footer').removeClass('scroll-active');
            $('.btn-subir').removeClass('scroll-active');
        } else {
            $('.espacio-header').addClass('scroll-active');
            $('.container-menu-top').addClass('scroll-active');
            $('.container-buscar').addClass('scroll-active');
            $('.container-menu-footer').addClass('scroll-active');
            $('.btn-subir').addClass('scroll-active');
        }
    });



    // BLOCK BUSCAR
    $('.js-input-focus').focus(function(){
        var inputtext = $('.js-input-focus').val();
        var longitud = inputtext.length;
        $('.content-buscador').addClass("focus-active");
        $('.fondo-buscados').addClass("focus-active");
        $('body').addClass("oveflow-hidden");
        if(longitud >= 3){
            $('.container-buscados').addClass("focus-active");
            $('.btn-limpiar-buscar').addClass("limpiar-active");
            /****************** AQUI HACER LA FUNCION DE BUSQUEDA ******************/
            buscar();
        }else{
            $('.container-buscados').removeClass("focus-active");
            /****************** AQUI DESHACER LA FUNCION DE BUSQUEDA ******************/
            nobuscar();
        }
    });
    $('.js-input-focus').blur(function(){});
    $('.fondo-buscados').click(function() {
        $('.content-buscador').removeClass("focus-active");
        $('.container-buscados').removeClass("focus-active");
        $('.fondo-buscados').removeClass("focus-active");
        $('body').removeClass("oveflow-hidden");

        $('.btn-limpiar-buscar').removeClass("limpiar-active");
    });
    $('.js-input-focus').on('keyup', function(){
        var longitud = $(this).val().length;
        if(longitud >= 3){
            console.log("texto de busqueda: ",$(this).val());
            console.log("longitud minima de busqueda: ",longitud);
            $('.container-buscados').addClass("focus-active");
            $('.btn-limpiar-buscar').addClass("limpiar-active");
            /****************** AQUI HACER LA FUNCION DE BUSQUEDA ******************/
            buscar();
        }else{
            $('.container-buscados').removeClass("focus-active");
            /****************** AQUI DESHACER LA FUNCION DE BUSQUEDA ******************/
            nobuscar();
        }
    }).keyup();
    $('.btn-buscar').click(function() {
        var inputtext = $('.js-input-focus').val();
        var longitud = inputtext.length;
        $('.content-buscador').addClass("focus-active");
        $('.fondo-buscados').addClass("focus-active");
        $('body').addClass("oveflow-hidden");
        if(longitud >= 3){
            $('.container-buscados').addClass("focus-active");
            $('.btn-limpiar-buscar').addClass("limpiar-active");
            /****************** AQUI HACER LA FUNCION DE BUSQUEDA ******************/
            buscar();
        }else{
            $('.container-buscados').removeClass("focus-active");
            /****************** AQUI DESHACER LA FUNCION DE BUSQUEDA ******************/
            nobuscar();
        }
    });
    $('.btn-limpiar-buscar').click(function() {
        $(this).removeClass("limpiar-active");
        $('.js-input-focus').val("");
        $('.container-buscados').removeClass("focus-active");
        /****************** AQUI DESHACER LA FUNCION DE BUSQUEDA ******************/
        nobuscar();
    });
    function buscar() {
       console.log("buscando..."); 
    }
    function nobuscar() {
        console.log("no buscando..."); 
    }



    // BLOCK MENU FOOTER (es del header solo que en la parte baja del menu)
    $('.btn-menu').click(function() {
        openMenuFooter();
    });
    $('.fondo-menu-footer, .close-menu > i').click(function() {
        closeMenuFooter();
    });
        // Submenu
        $('.title-menu-mobile').click(function() {
            $(this).siblings('.container-submenu').addClass('cat-active');
            $('.container-menu-footer').addClass('cat-active');
        });
        $('.atras-submenu').click(function() {
            $(this).parents('.container-submenu').removeClass('cat-active');
            $(this).parents('.container-menu-footer').removeClass('cat-active');
        });
    // Menu login
    $('.content-btn-login').click(function() {
        openMenuLogin();
    });

    // BLOCK BOTON SUBIR
    $('.btn-subir').click(function() {
        $('html, body').animate({scrollTop: 0},'1000');
    });





/****************************************************/
/*********************** HOME ***********************/
/****************************************************/

    // BLOCK SLIDER
    jQuery('.fm-container-slider .slider-div .view-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });


    // BLOCK SUSCRIBE
    $(".fm-close-suscribe").click(function() {
        closeSuscribe();
    });


    // BLOCK OFERTA
    $(".fm-close-oferta").click(function() {
        closeOferta();
    });


    // BLOCK DESPACHO
    jQuery('.fm-container-horario .fm-right-horario .view-content').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            }
        ]
    });
    $(".fm-close-despacho").click(function() {
        closeDespacho();
    });


    // BLOCK FONDO GENERAL
    $(".fm-fondo-general").click(function() {
        closeSuscribe();
        closeOferta();
        closeDespacho();
        closeCarrito();

        closeMenuLogin();
        closeAgregarDireccion();
        closeAgregarDireccionFactura();
        closeAgregarTarjetas();
        closeCambiarEmail();
        closeCambiarPass();
    });


    // BLOCK CARRITO DE COMPRA
    $(".fm-close-carritocom").click(function() {
        closeCarrito();
    });

/****************************************************/
/********************** MI CUENTA *******************/
/****************************************************/
    // MIS DATOS - toogle
    $(".title-page").click(function() {
        $('.title-page').toggleClass("in");
        $('.content-menu-cuenta').toggleClass("in");
    });
    // MI PERFIL - toogle
    $(".content-menu-perfil").click(function() {
        $('.content-menu-perfil').toggleClass("in");
        $('.lista-submenu-perfil').toggleClass("in");
    });

/****************************************************/
/*********************** PRODUCTO INTERNO ***********************/
/****************************************************/

    // BLOCK SLIDER
    jQuery('.slider-relacionados .view-content').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 4
                }
            }
        ]
    });
});
// Tabs Login
function tabLogin() {
    $('.tab-register').removeClass('active');
    $('.tab-login').addClass('active');

    $('.container-register').removeClass('active');
    $('.container-login').addClass('active');
}
function tabRegister() {
    $('.tab-login').removeClass('active');
    $('.tab-register').addClass('active');

    $('.container-login').removeClass('active');
    $('.container-register').addClass('active');
}

function openMenuLogin() {
    $('.container-menu-login').addClass('login-active');
    $(".fm-fondo-general").addClass("active-mobile");
    $('body').addClass("oveflow-hidden-mobile");
}
function closeMenuLogin() {
    $('.container-menu-login').removeClass("login-active");
    $(".fm-fondo-general").removeClass("active-mobile");
    $('body').removeClass("oveflow-hidden-mobile");
    closeMenuFooter();
}

function openMenuFooter() {
    $('.container-menu-footer').addClass("menu-active");
    $('.fondo-menu-footer').addClass("menu-active");
    $('body').addClass("oveflow-hidden");
}
function closeMenuFooter() {
    $('.container-menu-footer').removeClass("menu-active");
    $('.fondo-menu-footer').removeClass("menu-active");
    $('body').removeClass("oveflow-hidden");

    // submenu
    $('.container-submenu').removeClass('cat-active');
    $('.container-menu-footer').removeClass('cat-active');
}

function openSuscribe() {
    $(".fm-container-suscribe").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeSuscribe() {
    $(".fm-container-suscribe").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openOferta() {
    $(".fm-container-oferta").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeOferta() {
    $(".fm-container-oferta").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openCarrito() {
    $(".fm-container-carritocom").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeCarrito() {
    $(".fm-container-carritocom").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openDespacho() {
    $(".fm-container-despacho").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeDespacho() {
    $(".fm-container-despacho").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openAgregarDireccion() {
    $(".container-direc-add").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeAgregarDireccion() {
    $(".container-direc-add").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openAgregarDireccionFactura() {
    $(".container-direc-fac-add").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeAgregarDireccionFactura() {
    $(".container-direc-fac-add").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openAgregarTarjetas() {
    $(".container-tarjeta-add").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeAgregarTarjetas() {
    $(".container-tarjeta-add").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openCambiarEmail() {
    $(".container-cambiar-email").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeCambiarEmail() {
    $(".container-cambiar-email").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}

function openCambiarPass() {
    $(".container-cambiar-pass").addClass("active");
    $(".fm-fondo-general").addClass("active");
    $('body').addClass("oveflow-hidden");
}
function closeCambiarPass() {
    $(".container-cambiar-pass").removeClass("active");
    $(".fm-fondo-general").removeClass("active");
    $('body').removeClass("oveflow-hidden");
}