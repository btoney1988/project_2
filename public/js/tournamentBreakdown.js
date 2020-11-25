$(document).ready(() => {
  $.get("/api/tournament_breakdown")
    .then(data => {
      $(".teamName").text(data[0].Teams[i].name);
      $(".rank").text(data[0].Teams[i].rank);
    })
    .catch(err => {
      console.log(err);
    });
  const allTeam = document.getElementsByClassName("card-body");
  for (let i = 1; i < allTeam.length; i++) {
    $(".startBtn").click(() => {
      window.location.replace("/tournamentBracket");
    });
  }
});
