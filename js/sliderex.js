//slide fadein
$('.sliderw li:gt(0)').hide();
setInterval(function(){
    $('.sliderw li:first').fadeOut(1500).next().fadeIn(1500);
    $('.sliderw li:first').appendTo('.sliderw');
}, 3000);

//slide 좌우
setInterval(function(){
    $('.slider').animate({'margin-left' : '-100%'}, function(){
        $('.slider li:first').appendTo('.slider');
        $('.slider').css('margin-left', '0');
    })
}, 3000);

//slide 상하
setInterval(function(){
    $('.sliderr').animate({'margin-Top' : '-300px'}, function(){
        $('.sliderr li:first').appendTo('.sliderr');
        $('.sliderr').css('margin-top','0');
    })
}, 3000);
