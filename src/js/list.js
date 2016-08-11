
$(function(){
	//列表内容过滤
	//根据输入内容过滤显示;其它隐藏 :contains('+keyword+')
	//获取页面元素
	var $hide = $('.hide');
	var $btn = $hide.find('.search_k button');
	var $datalist = $hide.find('.textarea'); 
	//点击时获取值
	$btn.on('click',function(){
		var $keyword = $hide.find('.search_k input').val();
		//不区分大小写
		var _keyword = $keyword.toUpperCase();
//		console.log($keyword)
		$datalist.find('li').hide().filter(':contains('+_keyword+')').show();
	})
	//鼠标移过内容过滤
	var $ul = $hide.find('ul');
	$ul.on('mouseenter','li',function(){
		$(this).addClass('sesese').siblings().removeClass('sesese');
		var $val = ($(this).text()).toUpperCase();
		$datalist.find('li').hide().filter(':contains('+$val+')').show();
		if($(this).index() == 0){
			$datalist.find('li').show();
		}
	})
	
	//点击展开
	//获取页面元素
	var $zhan = $('.qi .zhan');
	var $duo = $('.qi .duo');
	var $one = $('.pinpai .pppp');
	var $two = $('.pinpai .hide');
	$zhan.on('click',function(){
		if($two.is(":visible")==false){
			$zhan.addClass('zhan_k')
			$one.hide();
			$two.show();
			$(this).text('收起');
		}else{
			$zhan.removeClass('zhan_k')
			$one.show();
			$two.hide();
			$(this).text('展开');
		}
		return false; 
	})
	
	//获取页面元素
	var $go_Top = $('.go_back');
	var $top = $('.yundong').offset().top;
//	console.log($top)
	$(window).on('scroll',function(){
		//滚动过的距离
		var scrollTop = $(window).scrollTop();
//		console.log(scrollTop)
		//判断滚动条大于1000时 top键出现 小1000则隐藏
		if(scrollTop>1000){
			$go_Top.show();
		}else{
			$go_Top.hide();
		}
		//判断导航栏一直显示
		if(scrollTop > $top){
			$('.yundong').css({top:scrollTop-$top-16})
		}else{
			$('.yundong').css({top:0})
		}

	})
	//点击top键时 返回顶部
	$go_Top.on('click',function(){
		$('html,body').animate({scrollTop:0});
	})
})
