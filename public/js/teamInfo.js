$(document).ready(() => {
  function getTeamInfo() {
    return [
      {
        name: "name one",
        id: 1,
        seed: 1,
        TournamentId: 1
      },
      {
        name: "name two",
        id: 2,
        seed: 2
      },
      {
        name: "name three",
        id: 3,
        seed: 3
      },
      {
        name: "name four",
        id: 4,
        seed: 4
      },
      {
        name: "name five",
        id: 5,
        seed: 5
      },
      {
        name: "name six",
        id: 6,
        seed: 6
      },
      {
        name: "name seven",
        id: 7,
        seed: 7
      },
      {
        name: "name eight",
        id: 8,
        seed: 8
      }
    ];
  }

  getTeamInfo();

  function teamInfoDisplay() {
    $.get("/api/tournament_info", {

    }).then(function (response) {
      $(".list-group-item team1").text(response.name[1]);
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }

});
