$(".sns_tab li a").click(
    function(){
        $(".sns_tab li a").removeClass("on");
        $(this).addClass("on");
        let data = $(this).attr("data");
        $(".sns_gallery").hide();
        $("."+data).css("display","flex");
    }
);

