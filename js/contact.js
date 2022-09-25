$(document).ready(function() {
    
    var Profession = [
        "Student", "Other", "Worker","Teacher","Computer Engineer","Don't want to say" ];

    $( "#Profession" ).autocomplete({
        source: Profession });   

    $( "#Birthday" ).datepicker();




});

