        //좌우
        setInterval(function(){
            $('.slider1').animate({'margin-left' : '-100%'}, function(){
                $('.slider1 li:first').appendTo('.slider1');
                $('.slider1').css('margin-left', '0');
            })
        }, 3000);
        //상하
        setInterval(function(){
            $('.sliderr').animate({'margin-Top' : '-300px'}, function(){
                $('.sliderr li:first').appendTo('.sliderr');
                $('.sliderr').css('margin-top', '0');
            })
        }, 3000);
        //fade in out
        $('.slide3 ul li:gt(0)').hide();
        setInterval(function(){
            $('.slide3 ul li:first').fadeOut(1500).next().fadeIn(1500);
            $('.slide3 ul li:first').appendTo('.slide3 ul');
        }, 3000);