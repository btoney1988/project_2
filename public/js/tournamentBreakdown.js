const { response } = require("express");

$(document).ready(() => {
  function getTournamentBreakdown() {
    return [
      {
        id: 1,
        teamId1: 1,
        gameWinner: 1
      },
      {
        id: 2,
        teamID: 2
      },
      {
        id: 3,
        teamID: 3
      },
      {
        id: 4,
        teamID: 4
      },
      {
        id: 5,
        teamID: 5
      },
      {
        id: 6,
        teamID: 6
      },
      {
        id: 7,
        teamID: 7
      },
      {
        id: 8,
        teamID: 8
      }
    ];
  }

  getTournamentBreakdown();

  
var allTeam = document.getElementsByClassName("card-body");
for(var i=1; i<allTeam.length;i++){
    function getTournamentBreakdown() {
      $.get("/api/tournament_info", {
       
      })
        .then(data => {
        $(".teamName"+""+i).text(data[0].Teams[i].name);
        $(".rank"+""+i).text(data[0].Teams[i].rank)
       
        })
        .catch(err => {
          console.log(err);
        });
      }
    
    }
    $(".startBtn").click(() => {

      window.location.replace("/tournament_bracket");
    }

});
