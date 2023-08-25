setInterval(function(){
    $('.slide_W').animate({'margin-left' : '-100%'}, function(){
        $('.slide_W li:first').appendTo('.slide_W');
        $('.slide_W').css('margin-left','0');
    })
}, 3000);

$('.submenu').css('display', 'none');
$('.bg').css('display', 'none');
$('.mainmenu').hover(function(){
    $('.submenu').fadeToggle();
    $('.bg').fadeToggle();
});

$('.modal').css('display', 'none');
$('.c1 li:first').click(function(){
    $('.modal').show();
});
$('.modal button').click(function(){
    $('.modal').css('display' , 'none');
});