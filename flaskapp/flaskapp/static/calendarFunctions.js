var days_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function setupDates(){
	var today = new Date();
	console.log(today);
}

function getDaysInMonth(month, year){
	console.log(new Date(year, month, 0).getDate());
	return new Date(year, month, 0).getDate();
}

function createHeader(){
	var $headerCell = $("<td>", {"class": "header"});
	var $day_div = $("<div>");
	// var $month_div = $("<div>");
	// var $date_div = $("<div>");

	$day_div.html("YOMAMMA");
	$("#weekrow").append($day_div);
}

$(document).ready(function(){
	var today = new Date();
	var day = today.getDay();
	var $weekrow = $("<tr>", {id: "weekrow"});
	$("#time-table").append($weekrow);
	createHeader();
	for(var i = 0; i<7; i++){
		console.log(days_of_week[day%7]);
		day = day+1;
	}
});