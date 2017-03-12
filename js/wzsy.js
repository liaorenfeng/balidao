$("ul.up li.up1").hover(function(){
    $(this).removeClass('li.up1');
    $(this).css({'background':'#2b87a6'}).addClass('up-center');
},function(){
	$(this).css({'background':'url(../images/wzsy15.png)no-repeat'}).removeClass('up-center');
	$(this).addClass('li.up1');
});

$('ul.up li.up1').click(function(){
	$(this).find('.r21-up-footer').show()
})