/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-05-05 19:51:55
 * @version $Id$
 */
$(document).ready(function(){
	var totalItme = {
		init(){		//接口调用
			this.getDom();
			this.handleHide();
			this.handleAuthor();
			this.handleRegExp();
			this.handleReset();
		},

		
		getDom(){	//获取dom元素
			var domThat = this;
			domThat.$hide = $('i');
			domThat.$userIpt = $('.userName').find('input:first');
			domThat.$pasIpt = $('.userPassword').find('input:last');
			domThat.$i = $('.userPassword').find('i');
			domThat.$aothorSpan = $('p').find('span');
			domThat.$alertPage = $('.alert-page');
			domThat.$userTips = $('.tips:eq(0)');
			domThat.$paswTips = $('.tips:eq(1)');
			domThat.$sub = $('#submit');
			domThat.$rest = $('#reset');
			domThat.userIptVal = '';
			domThat.pasIptVal = '';
		},


		handleHide(){	//点击隐藏显示组件接口
			var hideThat = this;
			var trufla = true;
			hideThat.$hide.bind('click',function(){
				if(trufla){
					hideThat.$i.html('&#xe694;');
					hideThat.$pasIpt.attr('type','text');
					trufla = false;
				}else{
					hideThat.$i.html('&#xe693;');
					hideThat.$pasIpt.attr('type','password');
					trufla = true;
				}
			});
		},

		handleAuthor(){		//作者弹页效果
			var authorThat = this;
			authorThat.$aothorSpan.bind('click',function(){
				authorThat.$alertPage.fadeToggle(500);
			});
		},

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
		},
		handleReset(){		//重置提示框
			var restThat = this;
			function resetTips(restObj,tips){
				restObj.bind('click',function(){
					tips.type.text('');
				});
			}
			resetTips(restThat.$rest,{
				type : restThat.$userTips
			})

			resetTips(restThat.$rest,{
				type : restThat.$paswTips
			})
		}
	}
	totalItme.init();
})
