var audioPaused = true;
var bgindex = 0;
var media = document.getElementById("music");
var myVideo = document.getElementById("video1");



$(function($) {
    $('.loader').remove();
    var mySwiper = new Swiper('.swiper-container', {
        mode: 'horizontal',
        onSwiperCreated: function(swiper) {
            $(".zhou_one").addClass("zhou_onemove");
            $(".left").addClass("zhou_onemove");
            $(".right").addClass("zhou_twomove");
            $(".zhou_two").addClass("zhou_twomove");

            setTimeout(function() {
                $(".lunshou").addClass("lunshoumove");
                $(".logo").addClass("slidetop");
                $(".centent").addClass("Display");
                $(".logobak").addClass("Display");
                $(".picjuan").fadeOut();
            }, 2500)

        },
        onSlideChangeStart: function(swiper) {
            clearclass();
            activeLoopIndex = swiper.activeIndex;
            switch (swiper.activeIndex) {
                case 0:
                    $(".bg_img img").css('transition', '0.5s').css('transform', 'translateX(0)');
                    $(".bg_zhu img").css('transition', '0.5s').css('transform', 'translateX(0)');
                    break;
                case 1:
                    $(".bg_img img").css('transition', '0.5s').css('transform', 'translateX(-200px)');
                    $(".bg_zhu img").css('transition', '0.5s').css('transform', 'translateX(-20px)');
                    break;
                case 2:
                    $(".bg_img img").css('transition', '0.5s').css('transform', 'translateX(-600px)');
                    $(".bg_zhu img").css('transition', '0.5s').css('transform', 'translateX(-40px)');
                    break;
                case 3:
                    $(".bg_img img").css('transition', '0.5s').css('transform', 'translateX(-800px)');
                    $(".bg_zhu img").css('transition', '0.5s').css('transform', 'translateX(-120px)');
                    break;
                case 4:
                    $(".bg_img img").css('transition', '0.5s').css('transform', 'translateX(-1000px)');
                    $(".bg_zhu img").css('transition', '0.5s').css('transform', 'translateX(-500px)');
                    break;
            }
        },
        onSlideChangeEnd: function(swiper) {

            activeLoopIndex = swiper.activeIndex;
            switch (swiper.activeIndex) {
                case 0:
                    $(".lunshou").addClass("lunshoumove");
                    $(".logo").addClass("slidetop");
                    $(".centent").addClass("Display");
                    $(".logobak").addClass("Display");
                    $(".vidiompg").fadeOut();
                    if (myVideo.paused) {

                    } else {
                        myVideo.pause();
                        media.play();
                    }
                    break;
                case 1:
                    $(".lunshou_two").addClass("lunshoumove");
                    $(".three_word").addClass("slidetop");
                    $(".three_word_one").addClass("slidetop_one");
                    $(".vidiofang_two").addClass("vidiofang_twomove");
                    $(".vidiofang").fadeIn();
                    break;
                case 3:
                    $(".vidiompg").fadeOut();
                    $(".lunshou_three").addClass("lunshoumove");
                    if (myVideo.paused) {} else {
                        myVideo.pause();
                        media.play();
                    }
                    $(".buttoncss").addClass("Display_date");
                    $(".HotDate").addClass("Display_date");
                    $(".tou").addClass("slidedown");
                    $(".fourword").addClass("Display");
                    $(".fourword_two").addClass("Display");
                    break;
                case 4:
                    $(".fiveword").addClass("Display2");
                    $(".gaunzhu").addClass("gaunzhuMove");
                    $(".share").addClass("shareMove");
                    break;
            }
        }
    });

    var jmSwiper = new Swiper('.jmcontainer',{
        slidesPerView:'auto',
        mode:'vertical',
        watchActiveIndex: true
    });
});



$(".vidiofang").click(function() {
    $(".vidiompg").fadeIn();
    myVideo.play();
    media.pause();
});
$(".share").click(function() {
    $(".jiantou").fadeIn();

});
$(".gaunzhu").click(function() {
    $("#guanz").fadeIn();

});
$("#guanz").click(function() {
    $("#guanz").fadeOut();
});
$(".jiantou").click(function() {
    $(".jiantou").fadeOut();
});
$(".exit").click(function() {
    $(".vidiompg").fadeOut();
    myVideo.pause();
    media.play();
});
       $(".gongzhong").click(function(){
       $(".gongzhong").fadeOut();

       });

$(".globalAudio").bind("click", function() {

    if (media.paused) {
        media.play();
        audioPaused = true;
        $(this).addClass("play");
    } else {
        media.pause();
        audioPaused = false;
        $(this).removeClass("play");
    }
});

function clearclass() {
    $(".logo").removeClass("slidetop");
    $(".centent").removeClass("Display");
    $(".logobak").removeClass("Display");
    $(".lunshou").removeClass("lunshoumove");
    $(".lunshou_two").removeClass("lunshoumove");
    $(".lunshou_three").removeClass("lunshoumove");
    $(".vidiofang_two").removeClass("vidiofang_twomove");
    $(".vidiofang").fadeOut();
    $(".three_word").removeClass("slidetop");
    $(".three_word_one").removeClass("slidetop_one");
    $(".vidiofang").removeClass("slidetop");
    $(".tou").removeClass("slidedown");
    $(".fourword").removeClass("Display");
    $(".fourword_two").removeClass("Display");
    $(".fiveword").removeClass("Display2");
    $(".gaunzhu").removeClass("gaunzhuMove");
    $(".share").removeClass("shareMove");
    $(".buttoncss").removeClass("Display_date");
    $(".gongzhong").fadeOut();
    $("#guanz").fadeOut();
    $(".jiantou").fadeOut();
    $(".HotDate").removeClass("Display_date");
}

function guanzhu() {
    var Time = new Date();
    var EnTime = new Date('2015/01/19 00:00:00');
    if (Time >= EnTime) {
        window.location = "Vote.html";
    }
    else{
        alert("对不起，投票已结束!!!");
    }

}



document.addEventListener('WeixinJSBridgeReady', function() {
    var _WeixinJSBridge = {};
    Object.keys(WeixinJSBridge).forEach(function(key) {
        _WeixinJSBridge[key] = WeixinJSBridge[key];
    });
    Object.keys(WeixinJSBridge).forEach(function(key) {
        if (typeof WeixinJSBridge[key] === 'function') {
            WeixinJSBridge[key] = function() {
                try {
                    var args = arguments.length > 0 ? arguments[0] : {},
                        runOn3rd_apis = args.__params ? args.__params.__runOn3rd_apis || [] : [];
                    ['menu:share:timeline', 'menu:share:appmessage', 'menu:share:qq'].forEach(function(menu) {
                        runOn3rd_apis.indexOf(menu) === -1 && runOn3rd_apis.push(menu);
                    });
                } catch (e) {}
                return _WeixinJSBridge[key].apply(WeixinJSBridge, arguments);
            };
        }
    });

    var shareData = {
        "appid": "",
        "title": "翰典之夜",
        "link": "http://60.191.57.21:8019/hd/mainPage.html",
        "img_url": "http://60.191.57.21:8019/hd/Aessts/Images/logo.jpg",
        "desc": "2015年大型新春晚会———博融天下·思享未来",
        "img_width": "200",
        "img_height": "200"
    };

    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function() {

        WeixinJSBridge.invoke('shareTimeline', shareData, function(res) {
            // 返回res.err_msg,取值
            // share_timeline:cancel 用户取消
            // share_timeline:fail　发送失败
            // share_timeline:confirm 发送成功
            WeixinJSBridge.log(res.err_msg);

            if (res.err_msg == 'share_timeline:confirm') {
                _czc.push(["_trackPageview", "/hdzy/zhuanfa", "referer_url"]);
            };
        });

    });

    //发送给朋友
    WeixinJSBridge.on('menu:share:appmessage', function() {
        WeixinJSBridge.invoke('sendAppMessage', shareData, function(res) {
            // 返回res.err_msg,取值
            // share_timeline:cancel 用户取消
            // share_timeline:fail　发送失败
            // share_timeline:confirm 发送成功
            WeixinJSBridge.log(res.err_msg);

            if (res.err_msg == 'share_timeline:confirm') {
                _czc.push(["_trackPageview", "/hdzy/zhuanfa", "referer_url"]);
            };
        });

    });

    //发送给朋友
    WeixinJSBridge.on('menu:share:qq', function() {
        WeixinJSBridge.invoke('shareQQ', shareData);

    });

    // 分享 for ios
    WeixinJSBridge.on('general:share', function(argv) {
        if (argv) {
            if (argv.shareTo === 'timeline') {
                WeixinJSBridge.invoke('shareTimeline', shareData);
            } else if (argv.shareTo === 'friend') {
                WeixinJSBridge.invoke('sendAppMessage', shareData);
            } else if (argv.shareTo === 'QQ') {
                WeixinJSBridge.invoke('shareQQ', shareData);
            }
        }
    });
});