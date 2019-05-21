CSS3(rem)

利用CSS3rem、rem适配、RegExp正则制作交互性移动端登录界面

面向对象JQ完成全项目

最简单的rem适配如下: 

 
 
<script>
(function(){
	var html = document.getElementsByTagName('html')[0];
	var cli = document.documentElement.clientWidth || document.body.clientWidth;
	(cli>640) ? html.style.fontSize='40px' : html.style.fontSize=cli / 16 + 'px';
	window.onresize = arguments.callee;	//指向自身
})();
</script>

