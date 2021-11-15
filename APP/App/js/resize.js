window.addEventListener('load', function () {
    //加载完后触发
    //页面尺寸变化时改变HTML标签的font-size
    window.addEventListener("resize", adjust);
    //页面加载完或刷新页面后也执行一次
    adjust();
});
function adjust() {
    //如果宽度大于375px ，font-size为  宽度/375 * 50.
    if (innerWidth < 375) {
        document.documentElement.style.fontSize = "50px";
    } else {
        document.documentElement.style.fontSize = innerWidth/375 *50 +"px";
    }
}