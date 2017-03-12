$("ul li.borderpub").hover(function(){
    $(this).removeClass('borderpub');
    $(this).css({'color':'#fff'}).addClass('ys_border');
},function(){
	$(this).removeClass('ys_border');
	$(this).addClass('borderpub');
});

