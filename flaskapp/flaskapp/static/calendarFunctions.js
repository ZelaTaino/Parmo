var days_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var times = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm"];

var date;

function createHeader(day, month, date){
	var $headerCell = $("<td>", {"class": "header"});
	var $day_div = $("<div>");
	var $month_div = $("<div>");
	var $date_div = $("<div>");

	$day_div.html(day);
	$month_div.html(month);
	$date_div.html(date);

	$("#weekrow").append($headerCell);
	$headerCell.append($day_div);
	$headerCell.append($month_div);
	$headerCell.append($date_div);
}

function createTimeCell(parentElem, time){
	var $timeCell = $("<td>", {"class": "time_cell"});
	var $div = $("<div>");

	$div.html(time);
	$timeCell.append($div);
	parentElem.append($timeCell);
}

function updateDateHeader(date){
	var day = date.getDay();
	var month = date.getMonth();
	var date = date.getDate();
	var $weekrow = $("<tr>", {id: "weekrow"});
	$("#time-table").empty();
	$("#time-table").append($weekrow);

	for(var i = 0; i<7; i++){
		var dayText = days_of_week[day%7];
		createHeader(dayText, months[month], date);

		day = day+1;
		date = date+1;
	}

	for(i in times){
		var $timeRow = $("<tr>");
		time = times[i];
		for(var i = 0; i < 7; i++){
			createTimeCell($timeRow, time);
			$("#time-table").append($timeRow);
		}
	}
}


$(document).ready(function(){
        date = new Date();
	updateDateHeader(date);

	$(".time_cell").click(function(){
		$(this).addClass("selected_time");
	});

	$("#next_button").click(function(){
                date = new Date(date.getFullYear(), date.getMonth(), date.getDate()+7);	
                updateDateHeader(date);
        });

	$("#prev_button").click(function(){
		date = new Date(date.getFullYear(), date.getMonth(), date.getDate()-7);
		updateDateHeader(date);
	});
});

