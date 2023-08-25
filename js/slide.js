$(function(){
    setInterval(function(){
        $('.slide').animate({'margin-top' : '-500px'}, function(){
            $('.list:first').appendTo('.slide');
            $('.slide').css('margin-top', '0px');
        })
    }, 3000);
});