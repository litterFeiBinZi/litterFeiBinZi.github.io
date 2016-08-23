/*
	@author 	Henry Zhang
	@date  		2016-008-02
	@version 	01(版本)
*/ 
function mouseWheel(obj,fn){
	// 获取是不是ff浏览器
	var ff=navigator.userAgent.indexOf("Firefox");
	// 判断浏览器类型
	if (ff!=-1) {
		// 为box添加滚轮事件
		obj.addEventListener('DOMMouseScroll',wheel,false);
	}else{
		obj.onmousewheel=wheel;
	}
	// 简化上一段函数代码
	function wheel(event){
		var event=event||window.event;
		var down=true;
		if (event.detail) {
			down=event.detail>0;
		}else{
			down=event.wheelDelta<0;
		}
		console.log(down);
		fn.apply(obj,[event,down]);
		/*
			注释:fn是作为参数来接受传进来的函数
				apply()是一种方法,可以将外界需要用到的参数附加给fn方法
		*/ 

		return false;
	}

}