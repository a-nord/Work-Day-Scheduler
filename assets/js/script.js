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


 
});

