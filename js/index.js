var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onInit:function(swiper){


    },
    onSlideChangeEnd :function(swiper){

        var curActive = swiper.slides[swiper.activeIndex];

        for(var i=0;i<swiper.slides.length;i++){
            if(curActive===swiper.slides[i]){
                swiper.slides[i].id="page"+(parseInt(curActive.getAttribute("data-swiper-slide-index"))+1);
            }else{
                swiper.slides[i].id="";
            }
        }
    }
});

var beyond = document.querySelector("#beyond");
var music = document.querySelector(".music");
window.setTimeout(function(){
    beyond.play();//音频文件播放 -边缓冲边播放
    beyond.addEventListener("canplay",function(){
        music.className = "music musicMove";
        music.style.opacity = 1;
    })

},1000);
music.addEventListener("click",function(){
    if(beyond.paused){//停止
        beyond.play();
        music.className = "music musicMove";
    }else{//播放
        beyond.pause();
        music.className = "music";
    }
})