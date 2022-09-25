$(document).ready(function() {
	myJSON("json/event_info.json");
}); // end ready

function myJSON(myURL) {
        $.ajax({ url: myURL, dataType: "text", success: function (data) {
            var myData = $.parseJSON(data);
    		
    	    $("#ass").html(myData.events[2].date);
            $("#ass2").html(myData.events[2].title);
        }
    });
}
