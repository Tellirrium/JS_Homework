$("#open").click(function(){
	$("#search").show(200);
	$("#open").hide();
	$("#close").show();
});
$("#close").click(function(){
	$("#search").hide(200);
	$("#open").show();
	$("#close").hide();
});

$("#open3").click(function(){
	$(".mobilemenu").slideToggle(400);
});

$("#open2").click(function(){
	$(".field2").slideToggle(150);
});

$("#open4").click(function(){
	$(".field2").slideToggle(150);
});


 

// $(function () {
//   menu = $('.mobilemenu');

//    $('#open3').on('click', function (e) {
//     e.preventDefault();
//     menu.slideToggle();
//   });


//  $(window).resize(function () {
//     var w = $(this).width();
//     if (w > 640 && menu.is(':hidden')) {
//       menu.removeAttr('display');
//     }
//   });



//    $('#open4').on('click', function (e) {
//     var w = $(window).width();
//     if (w < 640) {
//       $(".field2").slideToggle(150);
//     }
//   });
//    $('#open2').on('click', function (e) {
//     var w = $(window).width();
//     if (w < 640) {
//       $(".field2").slideToggle(150);
//     }
//   });
// }); 