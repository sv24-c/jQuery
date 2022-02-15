/**
 * Created by smit on 15/2/22.
 */
var StopAnimation = {

    stop: function () {

        $(".start-btn").click(function () {
            $("img").animate(
                {
                    left: "+=150px",
                },2000
            );
        });

        $(".stop-btn").click(function () {
            $("img").stop();
        });

        $(".back-btn").click(function () {
            $("img").animate(
                {
                    left: "-=150px",
                },2000
            );
        });

        $(".reset-btn").click(function () {
            $("img").animate(
                {
                    left: "0",
                },"fast"
            );
        });
    }
}