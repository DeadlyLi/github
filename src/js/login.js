//登录用户的判断
	
	$('.button .denglu').on('click',function(){
		var arr=[];
		if(document.cookie){
			
			var cookie=document.cookie.split('; ');
//			alert(cookie)
			
			for(var i=0 ; i<cookie.length;i++){
//				alert(cookie[i])
			
				$.each(cookie,function(index,val){
					
					var yonghu=JSON.parse(val.split('=')[1]);
					arr.push(yonghu);	
//					alert(yonghu)
				});	
				
			}	
				var demail=$('#username').val();
				var dpass=$('#password').val();
				$.each(arr,function(index,val){
					//邮箱和密码相对应时，才能登录成功
//					alert(val.name)
					if(demail==val.name && dpass==val.password){
						
						alert('登录成功！');
						window.location.href="list.html";
					}else{
						alert('帐号不存在或密码不正确！');
						return false;
					};
					
				});	
			
		}else{
			alert('该邮箱未注册或邮箱！');
			return false;
		}
		
	});
