var thisHour = $("#currentTime");
var nowTime = moment().hours();
setInterval(() => {
  var grabDate = moment();
  var thisDate = grabDate.format("hh:mm:ss A");

  thisHour.text(thisDate);
}, 100);

$("input:checkbox").click(function () {
  $("input:checkbox").not(this).prop("checked", false);
});

function teamNum() {
  let checkBox1 = document.getElementById("check8");
  let text1 = document.getElementById("team8");
  let checkBox2 = document.getElementById("check16");
  let text2 = document.getElementById("team16");
  if (checkBox1.checked == true) {
    text1.style.display = "block";
    text2.style.display = "none";
  } else {
    text1.style.display = "none";
  }
  if (checkBox2.checked == true) {
    text2.style.display = "block";
    text1.style.display = "none";
  } else {
    text2.style.display = "none";
  }
}
teamNum();
$("#teamBtn").click(() => {
  let eventName = $("#eventName").val();
  let teamName = $("#teamName").val();
  let coachName = $("#coachName").val();
});
