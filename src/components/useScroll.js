import { useEffect, useState } from "react";

const useTouchDirectionListener = (
	isPreventDefault,
	upCallback,
	rightCallback,
	downCallback,
	leftCallback
) => {
	const [startX, setStartX] = useState(null);
	const [startY, setStartY] = useState(null);

	useEffect(() => {
		const handleTouchEvent = (event) => {
			switch (event.type) {
				case "touchstart":
					setStartX(event.touches[0].pageX);
					setStartY(event.touches[0].pageY);
					break;
				case "touchend":
					const spanX = event.changedTouches[0].pageX - startX;
					const spanY = event.changedTouches[0].pageY - startY;

					if (Math.abs(spanX) > Math.abs(spanY)) {
						// 認定為水平方向滑動
						if (spanX > 30) {
							// 向右
							if (rightCallback) rightCallback();
						} else if (spanX < -30) {
							// 向左
							if (leftCallback) leftCallback();
						}
					} else {
						// 認定為垂直方向滑動
						if (spanY > 30) {
							// 向下
							if (downCallback) downCallback();
						} else if (spanY < -30) {
							// 向上
							if (upCallback) upCallback();
						}
					}
					break;
				case "touchmove":
					// 阻止默認行為
					if (isPreventDefault) event.preventDefault();
					break;
			}
		};

		window.addEventListener("touchstart", handleTouchEvent);
		window.addEventListener("touchend", handleTouchEvent);
		window.addEventListener("touchmove", handleTouchEvent);

		return () => {
			// 在組件卸載時移除事件監聽器
			window.removeEventListener("touchstart", handleTouchEvent);
			window.removeEventListener("touchend", handleTouchEvent);
			window.removeEventListener("touchmove", handleTouchEvent);
		};
	}, [
		isPreventDefault,
		upCallback,
		rightCallback,
		downCallback,
		leftCallback,
		startX,
		startY,
	]);

	return { startX, startY }; // 如果需要追蹤 startX 和 startY 的值
};

const EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener)
            element.addEventListener(type, handler, false);
        else if (element.attachEvent)
            element.attachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    removeHandler: function (element, type, handler) {
        if(element.removeEventListener)
            element.removeEventListener(type, handler, false);
        else if(element.detachEvent)
            element.detachEvent("on" + type, handler);
        else
            element["on" + type] = handler;
    },
    /**
     * 监听触摸的方向
     * @param target            要绑定监听的目标元素
     * @param isPreventDefault  是否屏蔽掉触摸滑动的默认行为（例如页面的上下滚动，缩放等）
     * @param upCallback        向上滑动的监听回调（若不关心，可以不传，或传false）
     * @param rightCallback     向右滑动的监听回调（若不关心，可以不传，或传false）
     * @param downCallback      向下滑动的监听回调（若不关心，可以不传，或传false）
     * @param leftCallback      向左滑动的监听回调（若不关心，可以不传，或传false）
     */
    listenTouchDirection: function (target, isPreventDefault, upCallback, rightCallback, downCallback, leftCallback) {
        this.addHandler(target, "touchstart", handleTouchEvent);
        this.addHandler(target, "touchend", handleTouchEvent);
        this.addHandler(target, "touchmove", handleTouchEvent);
        var startX;
        var startY;
        function handleTouchEvent(event) {
            switch (event.type){
                case "touchstart":
                    startX = event.touches[0].pageX;
                    startY = event.touches[0].pageY;
                    break;
                case "touchend":
                    var spanX = event.changedTouches[0].pageX - startX;
                    var spanY = event.changedTouches[0].pageY - startY;

                    if(Math.abs(spanX) > Math.abs(spanY)){      //认定为水平方向滑动
                        if(spanX > 30){         //向右
                            if(rightCallback)
                                rightCallback();
                        } else if(spanX < -30){ //向左
                            if(leftCallback)
                                leftCallback();
                        }
                    } else {                                    //认定为垂直方向滑动
                        if(spanY > 30){         //向下
                            if(downCallback)
                                downCallback();
                        } else if (spanY < -30) {//向上
                            if(upCallback)
                                upCallback();
                        }
                    }

                    break;
                case "touchmove":
                    //阻止默认行为
                    if(isPreventDefault)
                        event.preventDefault();
                    break;
            }
        }
        return function () {
            EventUtil.removeHandler(target, "touchstart", handleTouchEvent);
            EventUtil.removeHandler(target, "touchend", handleTouchEvent);
            EventUtil.removeHandler(target, "touchmove", handleTouchEvent);
        };

    }
    

};
export default useTouchDirectionListener;
export {EventUtil};