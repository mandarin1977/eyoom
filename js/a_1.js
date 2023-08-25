// 레이어 팝업
$('.laypopup').css('display', 'none');
$('.notice>ul>li:first').click(function(){
    $('.laypopup').css('display', 'block');
});
$('.btn_x').click(function(){
    $('.laypopup').css('display', 'none');
})

// 탭 메뉴
$('.gallery_wrap').css('display','none');
$('.gallery_t').click(function(){
    $('.gallery_wrap').css('display','block');
    $('.notice').css('display','none');
    $('.gallery_t').css('background' , '#fcc');
    $('.notice_t').css('background' , '#fad');
});
$('.notice_t').click(function(){
    $('.gallery_wrap').css('display','none');
    $('.notice').css('display','block');
    $('.gallery_t').css('background' , '#fad');
    $('.notice_t').css('background' , '#fcc');
});
// submenu
$('.submenu').css('display','none');
$('.bg').css('display','none');
$('.mainmenu').hover(function(){
    $('.bg').fadeToggle();
    $('.submenu').fadeToggle();
})

// 슬라이드
setInterval(function(){
    $('.slideWrap').animate({'margin-top' : '-100%'}, function(){
        $('.slideWrap>li:first').appendTo('.slideWrap');
        $('.slideWrap').css('margin-top', '0');
    })
}, 3000);
