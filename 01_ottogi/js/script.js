$(".tab li:eq(0) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");
        $(".tabcontent").hide();
        $(".tab1").css("display","flex");
    }
);
$(".tab li:eq(1) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");
        $(".tabcontent").hide();
        $(".tab2").css("display","flex");
    }
);
$(".tab li:eq(2) a").click(
    function(){
        $(".tab a").removeClass("on");
        $(this).addClass("on");
        $(".tabcontent").hide();
        $(".tab3").css("display","flex");
    }
);

/* slick */
$('.main-slide').slick({
    dots:true,
    fade: true,
    prevArrow : $('.prev'),     // 이전 화살표 모양 설정
    nextArrow : $('.next'),     // 다음 화살표 모양 설정
    autoplay : true,
    autoplayspeed : 2000,
    pauseOnhover : true,
});

/hit slide/
$(".hit-slide").slick({
    slidesToShow : 4,
    slidesToScroll : 2,
    prevArrow : $('.hit-prev'),     
    nextArrow : $('.hit-next'),
    responsive: [ // 반응형 웹 구현 옵션
        { 
            breakpoint: 721, //화면 사이즈 720px
            settings: { 
                slidesToShow:2 
            } 
        }
    ]  
});

$(".gnb li:eq(0) a").click(
    function(){
        $("#dropdown").slideToggle();
    }
);

$(".introtab li:eq(0) a").click(
    function(){
        $(".intro-tabcontent").hide();
        $(".tab01").show();
    }
);
$(".introtab li:eq(1) a").click(
    function(){
        $(".intro-tabcontent").hide();
        $(".tab02").show();
    }
);
$(".introtab li:eq(2) a").click(
    function(){
        $(".intro-tabcontent").hide();
        $(".tab03").show();
    }
);

