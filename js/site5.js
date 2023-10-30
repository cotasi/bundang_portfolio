$(document).ready(function(){

    function ani() {
        $(".slidebox").animate({"marginLeft":-1200}, 400,function(){
            $(">div",this).eq(0).appendTo($(this));
            $(this).css({"marginLeft":0});
        });
    }

    setInterval(ani,3000);

});