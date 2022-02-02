let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2022);
const d = new Date();
d.setDate(d.getDate() + 50);
if (someday > today) {
  text = "Year: 2022";
} else {
  text = "Year: 2022";
}

var date = new Date();
var current_month =date.getMonth();
var current_day = date.getDay();

var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var current_hour = date.getHours();
var current_minute = date.getMinutes();
var current_second = date.getSeconds();
var ampm = 'AM';

if (current_hour > 11) {
  ampm = 'PM';
  current_hour = current_hour - 12
}

if (current_hour == 0) {
  current_hour = 12;
}
var current_day = date.getDay();
var monthOfYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
document.write('Month: '  + monthOfYear[current_month] + '<br>')
document.getElementById("demo").innerHTML = d;
document.write('Today is : ' + dayOfWeek[current_day] + '<br>')
document.write('Current time is : ' + current_hour + ' ' + ampm + ' : ' + current_minute + ' : ' + current_second)
document.getElementById("demo").innerHTML = text;


function multiplyBy()
    {
        num1 = document.getElementById("FN").value;
        num2 = document.getElementById("SN").value;
        document.getElementById("result").innerHTML = num1 * num2;
    }

    function divideBy()
    {
        num1 = document.getElementById("FN").value;
        num2 = document.getElementById("SN").value;
        document.getElementById("result").innerHTML = num1 / num2;
    }


     function multiplyBy()
     {
        num1 = document.getElementById("fn").value;
        num2 = document.getElementById("sn").value;
        document.getElementById("result").innerHTML = num1 * num2;
    }

    function divideBy()
    {
        num1 = document.getElementById("fn").value;
        num2 = document.getElementById("sn").value;
        document.getElementById("result").innerHTML = num1 / num2;
    }
