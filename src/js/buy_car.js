
	jQuery(function($){
			//获取cookie，把商品信息写入$li

			render();
			$btn = $('.common .goods .good_li b');
			// 点击删除cookie
			$btn .on('click',function(){
				var $li = $(this).closest('li');
				var goodsname = $li.attr('data-goodsname');
				// 把过期时间设置成昨天
				var now = new Date();
				now.setDate(now.getDate()-1);

				// 删除cookie
				document.cookie = goodsname + '=null;expires=' + now;

				// 移除html
				$li.remove();
				location.reload();
				
			});


			function render(){
				var _cookie = document.cookie.split('; ');
//				console.log(document.cookie)
				// 遍历cookie
				var $good = $('.goods');
				var $ul = $('<ul/>');
				var subPrice = 0;
				var qty = 0;
				if(_cookie != ''){
					$.each(_cookie,function(idx,val){
						
						var info = JSON.parse(val.split('=')[1]);
						//插入元素
						var $li = $('<li/>').addClass('good_li').attr('data-goodsname',val.split('=')[0]);
						var $input = $('<input/>').attr({'type':'checkbox',"checked":"checked"}).addClass('danxuan');
						var $div01 = $('<div/>').addClass('join');
						var $img = $('<img/>').attr('src',info.imgurl).appendTo($div01);
						var $div02 = $('<div/>').addClass('color').appendTo($div01);
						var $h4 = $('<h4/>').text(info.name).appendTo($div02);
						var $h6 = $('<h6/>').text('颜色：'+info.color+' 尺码：均码').appendTo($div02);
						var $h3 = $('<h3/>').html('<dd>'+'特买'+'</dd>'+'<dt>'+'数量有限，请尽快提交订单！倒计时：0天10小时11分39秒'+'</dt>').appendTo($div02);
						var $span = $('<span/>').html(info.price+'<i>'+'2.8折'+'</i>');
						var $p = $('<p/>');
						var $i01 = $('<i/>').addClass('i_l').text('-').appendTo($p);
						var $input1 = $('<input/>').addClass('input').attr('type','text').val(info.num).appendTo($p);
						var $i02 = $('<i/>').addClass('i_r').text('+').appendTo($p);
						var $em =$('<em/>').text(info.price);
						var $b = $('<b/>').text('移除商品');
//			
						$input.appendTo($li);
						$div01.appendTo($li);
						$span.appendTo($li);
						$p.appendTo($li);
						$em.appendTo($li);
						$b.appendTo($li);
						$li.appendTo($ul);
//						console.log(info.price )
//						// 计算总价
							
						subPrice += parseInt(info.price )* info.num;
						qty += parseInt(info.num);
					});
					
				}
				$ul.appendTo($good);
				
				
				//获取加减元素
				var jianNum = $('.common .goods .good_li p .i_l');
				var addNum = $good.find('.i_r');
				jianNum.on('click',function(){
					
					alert(1)
				})
				
				
				// toFixed(n): 保持小数点后n位，自动四舍五入，返回一个字符串
				$('.totall em').html('&yen;' + subPrice.toFixed(2));
				$('.nav .buy_car em span').html(qty);
				var $log = $('.totall02 .popo');
				var $check = $('.common .good_li :checkbox');
				
				//改变状态
				if(qty>0){
						$log.addClass('pl').text('该订单未满199元，需支付运费15元');
					if(subPrice>199){
						$log.text('该订单已满199元，运费已免');	
					}
				}
				
				
				
				
				
				
				
			}
//			console.log(document.cookie)
				
	});