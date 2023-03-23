$(document).ready(function () {

  // Save textarea text to localStorage on button click
  $('.saveBtn').on('click', function () {
    var rowId = $(this).closest('.row').attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(rowId, text);
  });

  // Retrieve saved data from localStorage when page loads
  $('.row').each(function () {
    var rowId = $(this).attr('id');
    var savedText = localStorage.getItem(rowId);
    if (savedText !== null) {
      $(this).find('.description').val(savedText);
    }
  });

  // Add Date and Time to the document and use it to add color codes to the hourly slot
  function myClock() {
    var today = dayjs().format("ddd, MMM D, YYYY h: mm :ss A")
    $("#currentDay").text(today);
    var currentHour = dayjs().format("HH");
    $('.row').each(function () {
      var elementId = parseInt($(this).attr('id'));
      if (currentHour > elementId) {
        $(this).css('background-color', 'rgba(255, 99, 71, 0.9)');
      } else if (currentHour < elementId) {
        $(this).css('background-color', 'rgba(0,255,0,0.2)');
      } else {
        $(this).css('background-color', 'rgb(210,210,210,0.2)');
      }
    });

    var tic = setInterval(function () {
      myClock()
    }, 1000)
  }
  //Run myClock function
  myClock()
});