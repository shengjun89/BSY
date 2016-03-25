/**
 * Created by Administrator on 2016/1/17.
 */
$(function(){
    /*µ¼º½¹¦ÄÜ*/
    $('.nav .control').click(function () {
        console.log(11);
        if (!$('header ul.mobile').is(":visible") && !$('header ul.mobile').is(":animated")) {
            $(this).addClass("in");
            $('header ul.mobile').css("display", "block");

        } else {
            $('header ul.mobile').css("display", "none");
            $(this).removeClass("in");
        }

    })
    $("header ul li a").click(function(){
        $(this).addClass("current").parent().siblings().children("a").removeClass("current");
    })
})
