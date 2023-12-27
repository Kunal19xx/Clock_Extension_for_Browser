function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var hourDeg = (hours % 12 + minutes / 60) * 360 / 12;
  var minuteDeg = (minutes + seconds / 60) * 360 / 60;
  var secondDeg = seconds * 360 / 60;

  document.getElementById("hour-hand").style.transform = "rotate(" + hourDeg + "deg)";
  document.getElementById("minute-hand").style.transform = "rotate(" + minuteDeg + "deg)";
  document.getElementById("second-hand").style.transform = "rotate(" + secondDeg + "deg)";
}

updateClock();
setInterval(updateClock, 1000);
