$(document).ready(function() {
	x = 0;

	$(".btn_next").on("click", function() {
		x = (x <= 0)?(x + 100):0;

		$("figure").css("left", -x+"%");
	});

	$(".btn_next").on("mouseover", function() {
		$(".btn_next").css("width", "70px")
	});

	$(".btn_next").on("mouseout", function() {
		$(".btn_next").css("width", "50px")
	});


	$(".btn_prev").on("click", function() {
		x = (x >= 100)?(x - 100):100;

		$("figure").css("left", -x+"%");
	});

	$(".btn_prev").on("mouseover", function() {
		$(".btn_prev").css("width", "70px")
	});

	$(".btn_prev").on("mouseout", function() {
		$(".btn_prev").css("width", "50px")
	});
});