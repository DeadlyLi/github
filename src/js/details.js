//详情页
$(function(){
	
	//Tab切换
	//获取页面元素
	var $leftMid = $('.box .details_mid')
	var $leftTop = $('.box .det_left .left_top');
	var $topUl = $leftTop.find('ul');
	var $leftDt = $('.box .det_left dl dt');
	//绑定点击事件 点击时 添加Class，并且切换Tab
	$topUl.on('click','li',function(){
		$(this).addClass('tab').siblings().removeClass('tab');
		//获取点击时对应的索引值
		var index = $(this).index();
		$leftDt.eq(index).show().siblings().hide();
		$leftMid.css({top:$top})
	})
	//显示/隐藏
	//获取页面元素
	var $hover = $leftTop.find('.s_dan');
	$hover.on('mouseenter',function(){
		$(this).find('.gongZH').show();
		
	}).on('mouseleave',function(){
		$(this).find('.gongZH').hide();
	})
	
	
	//返回顶部
	//获取页面元素
	var $go_Top = $('.go_Top');
	var $top = $leftTop.offset().top;
	$(window).on('scroll',function(){
		//滚动过的距离
		var scrollTop = $(window).scrollTop();
		//判断滚动条大于1000时 top键出现 小1000则隐藏
		if(scrollTop>1000){
			$go_Top.show();
		}else{
			$go_Top.hide();
		}
		//判断导航栏一直显示
		if(scrollTop > $top){
			$leftTop.css({top:scrollTop})
		}else{
			$leftTop.css({top:$top})
		}
	
//		$topUl.on('click','li',function(){
//			$leftMid.css({top:scrollTop})
//		})
	})
	//点击top键时 返回顶部
	$go_Top.on('click',function(){
		$('html,body').animate({scrollTop:0});
	})
	
	//详情页放大镜部分
	//小图运动
	//获取页面元素
	var $move = $('.Magnifier .move');
	var $prev = $('.Magnifier .prev');
	var $next = $('.Magnifier .next');
	var $pic_min = $('.Magnifier .fdj ul li');
	var $pic_small = $move.find('dd');
	var $big_pic = $('.Magnifier .fdj .big_pic li')
	//点击左键向左移动
	
	$next.on('click',function(){
		var $move_left = $move.offset().left;
		console.log($move_left)
		if($move_left>-235){
			$move.stop(true).animate({left:$move_left-186})
		}
	})
	//点击右键向右移动
	$prev.on('click',function(){
		var $move_left = $move.offset().left;
		console.log($move_left)
		if($move_left<0){
			$move.stop(true).animate({left:$move_left-44})
		}
	})
	
	//图片切换切换
	$move.on('mouseenter','dd',function(){
		$(this).addClass('border').siblings().removeClass('border');
		var index = $(this).index();
		$pic_min.eq(index).show().siblings().hide();
		$big_pic.eq(index).show().siblings().hide();
	})
	
	//放大镜
	var $box = $('.Magnifier .fdj');
	var $fan = $('.Magnifier .zhe_z');
	var $oarea = $('.Magnifier .big_pic');
	var $maxp= $oarea.find('li');
	$fan.hide();
	$oarea.hide();
	$box.on('mousemove',function(evt){
  		$fan.show();
 		$oarea.show();
  		var nleft = $box.offset().left;
  		var ntop = $box.offset().top;
	   	var nx = evt.clientX-nleft+$(window).scrollLeft()-75;
		var ny= evt.clientY-ntop+$(window).scrollTop()-75;
//		console.log($(window).scrollLeft());
        
	   	//不出边框处理
	   	if(nx>$box.width()-$fan.width()){
		   nx=$box.width()-$fan.width();
		}
	   	if(ny>$box.height()-$fan.height()){
		   ny=$box.height()-$fan.height();
		}
	  	if(nx<0){
		   nx=0;
		}
	   	if(ny<0){
		   ny=0;
		}
	   	$fan.css({left:nx,top:ny});
	 	//放大框图片处理
	  	$maxp.css({left:nx*-2.66,top:ny*-2.66});
	 
	 }).on('mouseout',function(){
		$fan.hide();
		$oarea.hide();
	})
	 
	 
	//选择商品颜色
	//获取页面元素
	var $block = $('.Magnifier .dl01 .block');
	var $white = $('.Magnifier .dl01 .white');
	var $photo = $('.Magnifier .pic_top');
	var $photo_block = $photo.find('.fdj li img');
	var $photo_white = $photo.find('.p_photos dd img');
	var $big_photo = $oarea.find('img');
	$block.on('click',function(){
		$(this).find('a').addClass('a');
		$white.find('a').removeClass('a');
		$(this).find('b').addClass('b');
		$white.find('b').removeClass('b');
		//改变图片路径
		//黑色图片
		for(var i=0;i<=5;i++){
			//中图片
			$photo_block.eq(i).attr('src','../img/block0'+(i+1)+'.jpg');
			//小图片
			$photo_white.eq(i).attr('src','../img/block_min0'+(i+1)+'.jpg');
			//放大图片
			$big_photo.eq(i).attr('src','../img/block0'+(i+1)+'.jpg');
		}
	})
	$white.on('click',function(){
		$(this).find('a').addClass('a');
		$block.find('a').removeClass('a');
		$(this).find('b').addClass('b');
		$block.find('b').removeClass('b');
		//改变图片路径
		//白色图片
		for(var i=0;i<=5;i++){
			//中图片
			$photo_block.eq(i).attr('src','../img/white0'+(i+1)+'.jpg');
			//小图片
			$photo_white.eq(i).attr('src','../img/white_min0'+(i+1)+'.jpg');
			//放大图片
			$big_photo.eq(i).attr('src','../img/white0'+(i+1)+'.jpg');
		}
	})
	
	//点击添加商品数量
	var $f_left = $('.Magnifier .f_left');
	var $i = $f_left.find('i');
	var $input = $f_left.find('.num');
	$i.eq(0).on('click',function(){
		var $val=parseInt($input.val())	+1;	
		$input.val($val);
	})
	$i.eq(1).on('click',function(){
		var $val=$input.val()	
		if($val>1){
			$input.val($val-1);
		}else{
			$input.val(1)
		}
	})
	
	//写入cookie
	//获取页面元素
	var $buyBtn = $('.Magnifier .f_right');
	// 点击按钮时，把商品信息存入cookie
		$buyBtn.on('click',function(){
			var $pic_into = $('.Magnifier .fdj ul li').eq(0);
			var $name = $('.word');
			var $block = $name.find('.block a');
			var $white = $name.find('.white a');
			//获取随机数
//			var index = parseInt(Math.random()*1000+1);
//			var index;
			

			// 创建一个空对象，用来保存商品信息
			var value = {};
			value.imgurl = $pic_into.find('img').attr('src');
			value.name = $name.find('h1').text();
			//判断颜色
			if($block.hasClass('a')){
				value.color = $name.find('.style .block span').text();
				var index = 1;
			}
			if($white.hasClass('a')){
				value.color = $name.find('.style .white span').text();
				 index = 2;
			}
			
			value.price = $name.find('.zhe p strong i').text();
			value.num = $name.find('.style .f_left input').val();
			
			
			var goodName = 'goods'+index;
			
			// 写入商品数量
			var lastCookie = document.cookie;
			console.log(goodName)
			if(lastCookie.indexOf(goodName) != -1){
				// 遍历cookie，获取原来的数量
				$.each(lastCookie.split('; '),function(idx,val){
					var name = val.split('=')[0];
					console.log(name );
					if(name == goodName){
//						alert(1)
						value.num = parseInt(JSON.parse(val.split('=')[1]).num )+ 1;
						console.log(value.num )
						// 得到当前商品数量后，没必要再遍历后面的商品，所以直接退出
						return false;
					}
				});
			}
			// JSON.parse():把json字符串转换成json对象
			// JSON.stringify():把json对象转换成json字符串（JSON.parse的逆向操作）
			// 把过期时间设置成
//			var now = new Date();
//			now.setDate(now.getDate()+1);
			var _cookie = goodName + '=' + JSON.stringify(value);
			document.cookie = _cookie;
			console.log(document.cookie);
			location.reload();
	});
		
})
