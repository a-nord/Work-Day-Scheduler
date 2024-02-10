$(function () {
  
  // display current day and time
  setInterval(function () {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(rightNow);
  } , 1000);



  var storedItem = localStorage.getItem("hour-9")
  console.log(storedItem);
  $("#hour-9").children(".description").val(storedItem);
  
  
  // listener for click events on the save button
  $(".saveBtn").on("click", function () {
    
    console.log($(this).siblings(".description").val());
    
    let id = $(this).parent().attr("id");
    console.log(id);
    let value = $(this).siblings(".description").val();
    localStorage.setItem(id, value);
    $(".notifications").addClass("displayBlock");
    setTimeout(() => {
      $(".removeClass").removeClass("displayBlock");
    }, 1000);
  });
 
});

