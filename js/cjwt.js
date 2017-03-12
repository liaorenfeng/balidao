$("ul li.borderpub").hover(function(){
    $(this).removeClass('borderpub');
    $(this).css({'color':'#fff'}).addClass('ys_border');
},function(){
	$(this).removeClass('ys_border');
	$(this).addClass('borderpub');
});

$(".r3").hover(function(){
    $(this).removeClass('r3');
    $(this).addClass("tb");
},function(){
	$(this).removeClass('tb');
	$(this).addClass('r3');
});
