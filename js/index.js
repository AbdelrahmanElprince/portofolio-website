let divWidth = $("#colorsBox").innerWidth();
$("#options").css("left", `-${divWidth}`);




$(document).ready(function () {
  $("#loading .spinner").fadeOut(100, function () {
    $("#loading").fadeOut(100, function () {
      $("#loading").remove();
      $("body").css("overflow-y", "auto");
    });
  });
});

let aboutOffset = $("#about").offset().top; // bo3d el about 3an el top kadd ah
$(window).scroll(function () {
  // console.log("hello");
  let wScroll = $(window).scrollTop();
  // console.log(wScroll);
  if (wScroll > aboutOffset - 50) {
    $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.6)");
    $("#main-nav").css("padding", "10px 90px");
    $("#btnUp").fadeIn(500);
  } else {
    $("#main-nav").css("backgroundColor", "transparent");
    $("#main-nav").css("padding", "10px 0px");
    $("#btnUp").fadeOut(500);
  }
});

$("#btnUp").click(function () {
  // $(window).scrollTop(0);
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

// 3ashan mayetkarrash kaza mara fi about w home w services
$('#serviceLink').click(function(){
  let sectionOffset = $('#services').offset().top;
  $('html,body').animate({scrollTop:sectionOffset} , 1000 );
})

$("a[href^='#']").click(function (e) {
  $(e.target).css("border-bottom", "solid 2px #fff");
  $(e.target).parent().siblings().children().css("border-bottom", "none");
  let linkHref = $(e.target).attr("href");
  let sectionOffset = $(linkHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});
let items = $(".color-item");

items.eq(0).css("backgroundColor", "green");
items.eq(1).css("backgroundColor", "orange");
items.eq(2).css("backgroundColor", "tomato");
items.eq(3).css("backgroundColor", "#888");
items.eq(4).css("backgroundColor", "#09c");

items.click(function (e) {
  let bgColor = $(e.target).css("backgroundColor");
  $("h2").css("color", bgColor);
});

// $('#options i').click(function(){
//   $('#colorsBox').toggle(1000);
// });

$("#options i").click(function () {
  if ($("#options").css("left") == "0px") {
    $("#options").animate({ left: `-${divWidth}` }, 1000);
  } else {
    $("#options").animate({ left: "0px" }, 1000);
  }
});

// $(document).ready(function() {
//   $(".skitter-large").skitter();
// });

$(document).ready(function () {
  new WOW().init();
  $(".skitter-large").skitter({ auto_play: true });
});
var typed = new Typed('.element', {
  strings: ['This is a JavaScript library', ' We Are Professional']
 ,typeSpeed:50,
 loop:false,
 showCursor:false
});