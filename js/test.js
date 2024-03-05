$(document).ready(function () {
  $("#calendar").fullCalendar();

  $("#button").click(function () {
    window.setTimeout(clickToday, 200);
  });

  function clickToday() {
    $(".fc-button-today").click();
  }

  document.addEventListener("DOMContentLoaded", function () {
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      firstDay: 1,
    });
    calendar.render();
  });
});
