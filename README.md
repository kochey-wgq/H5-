CSS3(rem)

利用CSS3rem、rem适配、RegExp正则制作交互性移动端登录界面

面向对象JQ完成全项目


最简单的rem适配如下: 
   <script>
    	(function(){
    		var html = document.getElementsByTagName('html')[0];
    		var cli = document.documentElement.clientWidth || document.body.clientWidth;
    		(cli>640) ? html.style.fontSize='40px' : html.style.fontSize=cli / 16 + 'px';
    		window.onresize = arguments.callee;	  //指向自身
    	})();
    </script>
    
    
    
面向对象的思维写入设计模式(工厂、命令):
  handleRegExp(){		//正则(工厂模式 + 命令模式)
			var regThat = this;
			function verification(obj,dom){	
				!obj ? dom.attr('disabled','disabled') : dom.removeAttr('disabled');
			}
			function regExp({domIpt,reg,tips,error,yes,redColor,greenColor,sumIf,sub}){		//总工厂(发令者)
				domIpt.bind('input',function(){
					var iptVle = domIpt.val();
					if(!reg.test(iptVle)){	//如果匹配不成功
						tips.text(error);
						tips.css('color',redColor);
						sumIf = false;
					}else{
						tips.text(yes);
						tips.css('color',greenColor);
						sumIf = true;
					}
					regThat.userIptVal = iptVle;
					verification(sumIf,sub);
				});
			}

			
			regExp({		//生产(接受命令)
				domIpt : regThat.$userIpt,
				reg : /^[A-z]{2}[0-9]{7}$/,
				tips : regThat.$userTips,
				error : '首必须字母2位数后数字7位',
				yes : '正确',
				redColor : 'red',
				greenColor : '#0EAF1DFF',
				sumIf : false,
				sub : regThat.$sub
			});

			regExp({
				domIpt : regThat.$pasIpt,
				reg : /^[0-9]\d{5,9}$/,
				tips : regThat.$paswTips,
				error : '只能为6到10位数字',
				yes : '正确',
				redColor : 'red',
				greenColor : '#0EAF1DFF',
				sumIf : false,
				sub : regThat.$sub
			});
		}
