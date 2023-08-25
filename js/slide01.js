setInterval(function(){
    $('.slide').animate({'margin-left' : '-100%'}, function(){
        $('.list:first').appendTo('.slide');
        $('.slide').css('margin-left', '0%');
    })
},3000);

setInterval(function(){
    $('.slide_top_wrap').animate({'marginTop' : '-300px'}, function(){
        $('list_top:first').appendTo('.slide_top_wrap');
        $('.slide_top_wrap').css('margin-top', '0px');
    });
}, 3000);