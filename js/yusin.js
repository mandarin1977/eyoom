//slide
$('.slide>li:gt(0)').hide();
setInterval(function(){
    $('.slide>li:first').fadeOut(1500).next().fadeIn(1500);
    $('.slide>li:first').appendTo('.slide');
}, 3000);