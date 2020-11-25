$(document).ready(() => {
  const teamInputList = $("#addTeam");
  $.get("/api/tournament_info")
    .then(response => {
      const i = response.length - 1;
      $(".tourneyName").text(response[i].name);
    })
    .catch(err => {
      console.log(err);
    });
  const teamInput = $("#teamName");
  const seedInput = $("#teamSeed");
  $(document).on("click", "#tourneyBreakdown", handleTourneyBreakdownButton);
  $(document).on("click", "#addTeam", handleAddTeamButton);

  function handleTourneyBreakdownButton(event) {
    event.preventDefault();

    function addTeam(teamData) {
      if (!teamInput.val() || !seedInput.val()) {
        window.location.replace("/tournamentBreakdown");
      } else {
        $.post("/api/teamInfo", teamData).then(() => {
          window.location.replace("/tournamentBreakdown");
        });
      }
    }

    addTeam({
      name: teamInput.val().trim(),
      seed: seedInput.val().trim()
    });
    teamInput.val("");
    seedInput.val("");
  }

  function handleAddTeamButton(event) {
    event.preventDefault();
    if (!teamInput.val() || !seedInput.val().trim()) {
      return;
    }

    function addTeam(teamData) {
      $.post("/api/teamInfo", teamData).then(() => {
        teamInputList.append(
          `<li>Team: <span class="text-dark">${teamData.name}</span> Seed: <span class="text-dark">${teamData.seed}</span></li>`
        );
      });
    }

    addTeam({
      name: teamInput.val().trim(),
      seed: seedInput.val().trim()
    });
    teamInput.val("");
    seedInput.val("");
  }
});
