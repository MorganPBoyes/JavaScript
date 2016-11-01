var today = new Date();
var day = today.getDay();
var dayList=['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var dayString = "Today is: ";

var todayHours = today.getHours();
var todayMins = today.getMinutes();
var todaySecs = today.getSeconds();
var timeString = "Current time is: ";
var hourStamp = (todayHours >= 12) ? " PM " : " AM ";
todayHours = (todayHours >= 12) ? (todayHours-12): todayHours;

if(todayHours > 12 && todayMins == 0){ todayHours = "Noon"}
else if (todayHours > 12){}
console.log(dayString + dayList[day]);
console.log(timeString + todayHours + hourStamp + " : " + todayMins + " : " + todaySecs);