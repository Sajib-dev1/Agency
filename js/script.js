$(function(){
    // ========navber part========
    $('.show').on('click',function (){
        $('.slide-bar').css({left:'0px'});
    });
    $('.crose').on('click',function (){
        $('.slide-bar').css({left:'-100%'});
    });
    $('.nav-link').on('click',function (){
        $('.slide-bar').css({left:'-100%'});
    });
    // ========navber part========
    // ========wow js=============
    new WOW().init();
    // ========wow js=============
    // ========counter up===========
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    // ========counter up===========
    $('.review-wrepper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
        centerMode:true,
        centerPadding:'0px',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
          ]
      });
    //=========back to top===========
    $('.back-to-top').on('click',function (){
        $('html,body').animate({scrollTop:0},1000);
    });

    $(window).on('scroll',function (){
        var scroll = $(this).scrollTop()

        if(scroll>50){
            $('.back-to-top').fadeIn(500)
        }
        else{
            $('.back-to-top').fadeOut(500)
        }
        if(scroll>100){
            $('.navbar').addClass('sticky-menu')
        }
        else{
            $('.navbar').removeClass('sticky-menu')
        }
    });
    //=========back to top===========
    //=========one page nav===========
    $('#menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
    $('#slide').onePageNav({
        currentClass: 'wrep',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });
    //=========one page nav===========
});