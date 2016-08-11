// 注册的表单验证
	$('.button button').on('click',function(){
		// 用户名验证
	 	var username=$('#username').val();
//	 	console.log(username)
		var reg=/^1[3|4|5|8][0-9]\d{4,8}$/ || /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		//密码验证
		var passWord=$('#password').val();
		var regpw = /^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
		var passWord_R = $('#password_R').val();
		var checkword = $('#checkword').val();
		$('.wrong').empty();
		if(!reg.test(username)){
			$('#username').next().find('p').text('请输入正确的手机号码/邮箱格式！');
			return false;
		}else if(passWord ==''){
			$('#password').next().find('.wrong').text('亲，密码不能为空！');
			return false;
		}else if(!regpw.test(passWord)){
			$('#password').next().find('.wrong').text('密码必须由6-16个英文字母和数字的字符串组成！');
			return false;
		}else if(passWord != passWord_R){
			$('#password_R').next().find('.wrong').text('密码要一致！');
			return false;
		}else if(checkword != 'nhzm'){
			$('#checkword').next().find('p').text('验证码错误！');
			return false;
		}else{
			alert('注册成功！');
		}
		
		// 将注册的信息写入cookie中
		
		index = parseInt(Math.random()*100);
		// 创建一个空对象，用来保存商品信息
		var value = {};
		value.name=username;
		value.password=passWord;
	 	var cookieName = 'goods' + index;
	 	var _cookie = cookieName + '=' + JSON.stringify(value);
//		console.log(_cookie);
		document.cookie = _cookie;
		

		//判断注册的帐号是否一样
		if(_cookie.indexOf(cookieName) != -1){
			
		// 遍历cookie，获取原来的信息
			$.each(_cookie.split('; '),function(idx,val){
				var name = val.split('=')[0];
//				alert(name)
				if(name == cookieName){

					// 注册过的 直接退出
//					return false;
			}
		});
	};

		
		// 邮箱验证
		// 循环装邮箱的数组，判断输入的邮箱是否存在
//	 	for(var i=0;i<emailArr.length;i++){
//	 		if(emailValue==emailArr[i]){
//	 			alert('该邮箱已注册！');
//	 			return false;
//	 		}
//	 	};	 	
		

		
 	});
