$(function () {
  
  // display current day and time
  setInterval(function () {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(rightNow);
  } , 1000);

  //save into local storage
  $(".saveBtn").on("click", function () {
    var id = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(id, value);        
  }); 

  //get local storage
  $(".time-block").each(function () {        
    $(this).find(".description").val(localStorage.getItem($(this).attr("id")));
  });

  //set past, present, and future to blocks
  $(".time-block").each(function () {

    // variables for the current hour and the hour displayed
    var hourNow = dayjs().hour();
    var hourBlock = parseInt($(this).attr("id").split("-")[1]);

    if (hourBlock < hourNow) {
        $(this).addClass("past").removeClass("present future");
    } else if (hourBlock === hourNow) {
        $(this).addClass("present").removeClass("past future");
    } else {
        $(this).addClass("future").removeClass("present past");
    }
  });
 
});

