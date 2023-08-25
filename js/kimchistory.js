//slide
setInterval(function(){
    $('.slidew').animate({'margin-left' : '-100%'}, function(){
        $('.slidew li:first').appendTo('.slidew');
        $('.slidew').css('margin-left', '0');
    })
}, 3000);
//sub menu
$('.submenu').hide();
$('.mainmenu li').mouseover(function(){
    $(this).find('.submenu').slideDown(800);
});
$('.mainmenu li').mouseleave(function(){
    $(this).find('.submenu').slideUp(800);
});
//modal
$('.modal').hide();
$('.notice_w li:first').click(function(){
    $('.modal').show();
});
$('.btnx').click(function(){
    $('.modal').hide();
});