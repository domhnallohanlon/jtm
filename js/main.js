$(document).ready(function () {
  //scrollToTop
  $("#toTop").scrollToTop();
  // gallery
  $('.gallery-expand').galleryExpand({
    fillScreen: true,
    onShow: function (el) {
      // 沉浸状态栏
      var defaultColor = $("nav.nav-extended").css("background-color");
      var a = $("#placeholder-navbar").css("background-color");
      $("meta[name='theme-color']").attr('content', a);
      $("button.back-btn").click(function () {
        $("meta[name='theme-color']").attr('content', defaultColor);
      });
      $("div#placeholder-overlay").click(function () {
        $("meta[name='theme-color']").attr('content', defaultColor);
      })
      // code 高亮边框色
      $("pre.highlight").css({
        "border-left": "3px solid " + a,
        "box-shadow": "-1px 0px 0px 0px " + a + ", 0px 0px 0px 1px " + a
      });
      //设置a标签的颜色
      $("#postsContent a").css({
        "color": a
      })
      //设置小代码块的颜色
      $(".highlighter-rouge").css({
        "color": a,
        "border-radius": "0px"
      })
      // Carousel
      var carousel = el.find('.carousel.initialized');
      carousel.carousel({
        dist: 0,
        padding: 10
      });
      // Tabs
      $('ul.tabs').tabs();
    }
  });
  // 默认code边框颜色、返回顶部按钮，themecolor为第一个nav,
  //获取颜色
  var defaultColor = $("nav.nav-extended").css("background-color");
  //设置代码框的颜色
  $("pre.highlight").css({
    "border-left": "3px solid " + defaultColor,
    "box-shadow": "-1px 0px 0px 0px " + defaultColor + ", 0px 0px 0px 1px " + defaultColor
  });
  //设置blockquote的颜色
  $("blockquote").css({
    "border-left": "5px solid " + defaultColor,
  });
  //设置返回顶部的颜色
  $("#toTop").css({
    "background-color": defaultColor
  })
  //设置主题色
  $("meta[name='theme-color']").attr('content', defaultColor);
  //设置a标签的颜色
  $("#postsContent a").css({
    "color": defaultColor
  })
  //设置小代码块的颜色
  $(".highlighter-rouge").css({
    "color": defaultColor,
    "border-radius": "0px"
  })
  //图片弹出
  if($(".gallery-expand").css("background-color") == undefined){
    $('#postsContent img').materialbox();
  }
  //lazyload images
  $("img.lazy").lazyload();
});