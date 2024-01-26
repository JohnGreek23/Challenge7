$(document).ready(function() {
    // Display current date at the top of the calendar
    var currentDay = dayjs().format("dddd, MMMM D, YYYY");
    $("#currentDay").text(currentDay);
  
    // Compare current time with timeblocks and apply classes
    $(".time-block").each(function() {
      var hour = parseInt($(this).find(".hour").text());
      var currentHour = dayjs().hour();
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    // Allow users to enter events
    $(".time-block").on("click", function() {
      var description = $(this).find(".description");
      description.attr("contenteditable", true).focus();
    });
  
    // Save events in local storage
    $(".saveBtn").on("click", function() {
      var description = $(this).siblings(".description").text();
      var hour = $(this).siblings(".hour").text();
      localStorage.setItem(hour, description);
    });
  
    // Retrieve and display saved tasks or notes
    $(".time-block").each(function() {
      var hour = $(this).find(".hour").text();
      var savedDescription = localStorage.getItem(hour);
      if (savedDescription) {
        $(this).find(".description").text(savedDescription);
      }
    });
  });
  