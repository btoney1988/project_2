const thisHour = $("#currentTime");
// eslint-disable-next-line no-unused-vars
const nowTime = moment().hours();
setInterval(() => {
  const grabDate = moment();
  const thisDate = grabDate.format("hh:mm:ss A");

  thisHour.text(thisDate);
}, 100);

$("input:checkbox").click(function() {
  $("input:checkbox")
    .not(this)
    .prop("checked", false);
});

function teamNum() {
  const checkBox1 = document.getElementById("check8");
  const text1 = document.getElementById("team8");
  const checkBox2 = document.getElementById("check16");
  const text2 = document.getElementById("team16");
  if (checkBox1.checked === true) {
    text1.style.display = "block";
    text2.style.display = "none";
  } else {
    text1.style.display = "none";
  }
  if (checkBox2.checked === true) {
    text2.style.display = "block";
    text1.style.display = "none";
  } else {
    text2.style.display = "none";
  }
  teamNum();
}

// $("#teamBtn").click(() => {
//   const eventName = $("#eventName").val();
//   const teamName = $("#teamName").val();
//   const coachName = $("#coachName").val();
// });
