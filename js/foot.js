// 脚部
$('#f_nav1 a').on('mouseover',function(){
	$(this).find('img').eq(1).hide();
	$ (this).find('img').eq(0).show();
})
$('#f_nav1 a').on('mouseout',function(){
	$(this).find('img').eq(0).hide();
	$(this).find('img').eq(1).show();
})

$('#f_nav2 a').on('mouseover',function(){
	$(this).find('img').eq(1).hide();
	$(this).find('img').eq(0).show();
})
$('#f_nav2 a').on('mouseout',function(){
	$(this).find('img').eq(0).hide();
	$(this).find('img').eq(1).show();
})