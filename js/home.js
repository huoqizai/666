
$(function(){
  //首屏滑动显示
   var $embed = $('#bg').find('.bg1 object'),
       $wrap = $('#wrap'),
       $swp = $wrap.find('.swp');

       setTimeout(function(){
             $embed[0].onload = function () {
                $(this).css("opacity" , 1);
            };
       },1500);
       $swp.eq(0).animate({opacity:1,left:0}, 1800)
       $swp.eq(1).animate({
            opacity : 1,
            right : 0
        },1800);

        $swp.eq(2).animate({
            opacity : 1,
            top : 70
        },1200);

        $swp.eq(3).animate({
            opacity : 1,
            top : 610
        },1200);


})();
//视频弹窗
(function(){
  var $wrap = $('#wrap'),
      $btn = #wrap.find('.videoBtn'),
      $video = #wrap.find('.video'),
      $close = $wrap.find("#video .close");

       $btn.click(function () {
            $video.show();
            $(document.body).addClass("noScroll");
        });
        $close.click(function () {
            $video.hide();
            $(document.body).removeClass("noScroll");
        });


})();
//最新情报弹窗
(function(){
       var $newwinfo = $('#newwinfo'),
           $title = $newwinfo.find('.title'),
           $infoListLi = $newinfo.find(".infoList li"),
            $pop = $newinfo.find(".popwindow"),
            $popLi = $pop.find(".content ul li"),
            $popClose = $pop.find(".close"),
            $txt = $pop.find(".content .txt"),
            $btn = $pop.find(".content .btn"),
            txtH = $txt.height(),
            index = 0,
            length = $popLi.length;
  //自定义滚动条
  $txt.each(function(){
     var $mainTxt =$(this).find(".mainTxt"),
         $scroll = $(this).find(".scroll"),
         $bar = $(this).find(".bar"),
         mianH =$mainTxt.height(),
         barH = txtH*txtH/mianH,
         topMax = txtH - barH,
        topMin = 0;
        $bar.height(barH);

       //点击滑块拖动
            $bar.mousedown(function (e) {
                var sY = e.clientY,
                    sTop = $(this).position().top,
                    $This = $(this),
                    $mainTxt = $(this).parent().siblings();


                $(document).mousemove(function (e) {
                    var nY = e.clientY,
                        top = sTop + nY - sY;
                    top = Math.min(top , topMax);
                    top = Math.max(top , topMin);
                    $This.css("top" , top);
                    $mainTxt.css("top" , -top*mainH/txtH);
                }).mouseup(function () {
                    $(this).off("mousemove").off("mouseup");
                });
                return false;
            });
      //鼠标滚轮事件
      $(this).mousewheel(function(e,d){
          var top = $bar.position().top;
          if()
      })


  })




})()































