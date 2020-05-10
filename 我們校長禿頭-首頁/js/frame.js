$(document).ready(function () {
    var $header = $("header");

    $(window).on('scroll', () =>
        $header[
            $(window).scrollTop()
                ? "addClass"
                : "removeClass"
        ]("fold")
    );

    var $slideImg = $(".slide img:not(.sizer)");

    $(".slide .prev").click(function () {
        var index = Array(...$slideImg).indexOf(
            $(".slide img:not(.sizer).active")[0]
        );
        if (!$slideImg[index - 1]) return;
        $($slideImg[index]).removeClass("active");
        $($slideImg[index - 1]).addClass("active");
    });

    $(".slide .next").click(function () {
        var index = Array(...$slideImg).indexOf(
            $(".slide img:not(.sizer).active")[0]
        );
        if (!$slideImg[index + 1]) return;
        $($slideImg[index]).removeClass("active");
        $($slideImg[index + 1]).addClass("active");
    });
});