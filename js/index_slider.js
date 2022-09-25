$(document).ready(function() {
	$(".next").on("click", function() {
		var currentImg = $(".activ");
		var nextImg = currentImg.next();

		if (nextImg.length) {
			currentImg.removeClass("activ").css("z-index", -10);
			nextImg.addClass("activ").css("z-index", 10);
		}
	});

	$(".prev").on("mouseover", function() {
		$(".prev").css("width", "50px");
	});

	$(".prev").on("mouseout", function() {
		$(".prev").css("width", "30px");
	});
	

	$(".prev").on("click", function() {
		var currentImg = $(".activ");
		var prevImg = currentImg.prev();

		if (prevImg.length) {
			currentImg.removeClass("activ").css("z-index", -10);
			prevImg.addClass("activ").css("z-index", 10);
		}
	});

	$(".next").on("mouseover", function() {
		$(".next").css("width", "50px");
	});

	$(".next").on("mouseout", function() {
		$(".next").css("width", "30px");
	});
});