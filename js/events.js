$(document).ready(function() {
	myJSON("json/event_info.json");

	$(".eColumn1").on("mouseenter", function() {
		$(".img1").slideUp("slow")
		$(".btn-details").css("bottom", 10.5)
		$(".midText1").show("slow")
		$(".btn-details1").effect("shake")
		setTimeout(function() {
  			myJSON2("json/event_info.json");
		}, 6000);
	});

	$(".eColumn1").on("mouseleave", function() {
		$(".img1").slideDown("slow")
		$(".midText1").hide("slow")
		myJSON("json/event_info.json");
	});


	$(".eColumn2").on("mouseenter", function() {
		$(".img2").slideUp("slow")
		$(".btn-details").css("bottom", 10.5)
		$(".midText2").show("slow")
		$(".btn-details2").effect("shake")
		setTimeout(function() {
  			myJSON2("json/event_info.json");
		}, 6000);
	});

	$(".eColumn2").on("mouseleave", function() {
		$(".img2").slideDown("slow")
		$(".midText2").hide("slow")
		myJSON("json/event_info.json");
	});


	$(".eColumn3").on("mouseenter", function() {
		$(".img3").slideUp("slow")
		$(".btn-details").css("bottom", 10.5)
		$(".midText3").show("slow")
		$(".btn-details3").effect("shake")
		setTimeout(function() {
  			myJSON2("json/event_info.json");
		}, 6000);
	});

	$(".eColumn3").on("mouseleave", function() {
		$(".img3").slideDown("slow")
		$(".midText3").hide("slow")
		myJSON("json/event_info.json");
	});

});

function myJSON(myURL) {
        $.ajax({ url: myURL, dataType: "text", success: function (data) {
            var myData = $.parseJSON(data);
    		
    	    $("#eTitle1").html(myData.events[0].title);
    	    $("#eDate1").html(myData.events[0].date);
    	    $(".midText1").html(myData.events[0].text);

    	    $("#eTitle2").html(myData.events[1].title);
    	    $("#eDate2").html(myData.events[1].date);
    	    $(".midText2").html(myData.events[1].text);

    	    $("#eTitle3").html(myData.events[2].title);
    	    $("#eDate3").html(myData.events[2].date);
    	    $(".midText3").html(myData.events[2].text);
        }
    });
}

function myJSON2(myURL) {
        $.ajax({ url: myURL, dataType: "text", success: function (data) {
            var myData = $.parseJSON(data);
    		
    	    $("#eDate1").html(myData.events[0].time);
    	    $(".midText1").html(myData.events[0].text2);

    	    $("#eDate2").html(myData.events[1].time);
    	    $(".midText2").html(myData.events[1].text2);

    	    $("#eDate3").html(myData.events[2].time);
    	    $(".midText3").html(myData.events[2].text2);
        }
    });
}
