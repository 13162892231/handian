var mySwiper_zero = null;

var slider_content = null;


var mySwiper = new Swiper('.myswiper', {
    mode: 'horizontal',
    onSwiperCreated: function (swiper) {
        addswiper(0);
        $(".icon2").addClass("iconAnimation2");
        $(".icon3").addClass("iconAnimation3");

    },
    onSlideChangeStart: function (swiper) {


        switch (swiper.activeIndex) {
            case 0:
                addswiper(swiper.activeIndex);
                break;
            case 1:
                addswiper(swiper.activeIndex);
                break;
            case 2:
                addswiper(swiper.activeIndex);
                break;

            case 3:
                addswiper(swiper.activeIndex);
                break;
            case 4:
                addswiper(swiper.activeIndex);
                break;
            case 5:
                addswiper(swiper.activeIndex);
                break;
            case 6:
                addswiper(swiper.activeIndex);
                break;

            case 7:
                addswiper(swiper.activeIndex);
                break;
            case 8:
                addswiper(swiper.activeIndex);
                break;
            case 9:
                addswiper(swiper.activeIndex);
                break;
            case 10:
                addswiper(swiper.activeIndex);
                break;


        }
    }
});


function addswiper(index) {
    mySwiper_zero = new Swiper('.swiperVertical_'+index, {
        slidesPerView: 'auto',
        mode: 'vertical',
        
        watchActiveIndex: true,
    });

    var Program = {ProgramID:index+1}
    $.ajax({
        url: "/_Interface/HD2/PostWhereC",
        type: "post",
        data: Program,

        success: function (data) {
            if (data == null) {

            } else {
                mySwiper_zero.removeAllSlides();
                var content = null;
                for (var i = 0; i < data.length; i++) {

                    if (data[i].Content.length > 30) {
                        content = data[i].Content.substr(0, 30)+"...";
                    }
                    else { content = data[i].Content;}
                    slider_content = "<div class='swiper-slide'>"+
                    "<p class='pname'>" + data[i].NickName + "</p>" +
                    "<p class='previewcontent'>" + content + "</p>" +
                "</div>";
                    mySwiper_zero.prependSlide(slider_content);
                }

            }
           
        }
    });

}

$("#fabiao").click(function () {
    var nickname = $("#nickname").val();
    var reviewcont = $("#reviewcont").val();
    if (nickname == null || reviewcont == null) {
        return false;
    } else {
        var Comment = { NickName: $("#nickname").val(), Content: $("#reviewcont").val(), ProgramID: mySwiper.activeIndex + 1 };
        $.ajax({
            url: "/_Interface/HD2/PostComment",
            type: "post",
            data: Comment,

            success: function (data) {
                var subcontent = null;
                if (data.State == "1") {
                    alert("发表成功！！");
                    if (reviewcont.length > 30) {
                        subcontent = reviewcont.substr(0, 30)+"...";
                    }
                    else { subcontent = reviewcont; }
                    slider_content = "<div class='swiper-slide'>" +
                    "<p class='pname'>" + nickname + "</p>" +
                    "<p class='previewcontent'>" + subcontent + "</p>" +
                "</div>";
                    mySwiper_zero.prependSlide(slider_content);
                    $(".mask").fadeOut();
                    $(".divreview").fadeOut();
                } else {
                    alert("发表失败！！")
                }
            }
        });
    }
   

});
$("#tou").click(function () {
    var name = $("#name").val();
    var banji = $("#banji").val();
    var phone = $("#phone").val();
    if (getCookie("value") != null) {
        alert("不好意思，您已经投过票了！！")
    }
    else {
        if (name =="" || banji == "" || phone =="") {
            alert("请填写完整的信息！！")
            return false;
        }
        else {
            var myreg = /^(((1[3-8][0-9]{1})|159|153)+\d{8})$/;

            if (!myreg.test(phone)) {
                alert("请输入有效的电话号码！")
            }
            else {
                var PostVote = { Name: name, Class: banji, Phone: phone, ProgramID: mySwiper.activeIndex + 1 };
                $.ajax({
                    url: "/_Interface/HD2/PostVote",
                    type: "post",
                    data: PostVote,

                    success: function (data) {
                        if (data.State == "1") {
                            alert("投票成功！！！");
                            setCookie("value", "521");
                            $(".mask").fadeOut();
                            $(".divvote").fadeOut();
                        }
                        else {
                            alert("投票失败！！！");
                        }
                    }
                });
            }

        }
    }
   
});


$(".reviewbtu").click(function () {
    $(".mask").show();
    $(".divreview").show();
});
$(".votebtu").click(function () {
    $(".mask").show();
    $(".divvote").show();
});


$(".exit").click(function () {
    $(".mask").hide();
    $(".divvote").hide();
    $(".divreview").hide();
});
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
