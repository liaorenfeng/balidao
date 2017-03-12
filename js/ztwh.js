$("ul li.borderpub").hover(function(){
    $(this).removeClass('borderpub');
    $(this).css({'color':'#fff'}).addClass('ys_border');
},function(){
	$(this).removeClass('ys_border');
	$(this).addClass('borderpub');
});
$('.c3').bind('click',function(){
	alert('下载成功')
});
// function sys_Alert(content){
// 	$('#dialog').dialog({
// 		height:100,
// 		model:true,
// 		title:"系统提示",
// 		hide:"explode",
// 		buttons:{"取消":function(){
// 			$(this).dialog('close')},
// 			"确定":function(){
// 				$(this).dialog('close')
// 				alert('下载成功！')
// 			}
// 		}
// 	})
// }
