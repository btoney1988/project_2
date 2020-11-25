$(document).ready(() => {
  const teamInputList = $("#addTeam");
  const teamInput = $("#teamName");
  const seedInput = $("#teamSeed");
  const tournamentSelect = $("#tournaments");
  let TournamentTournyId;

  $(document).on("click", "#tourneyBreakdown", handleTourneyBreakdownButton);
  $(document).on("click", "#addTeam", handleAddTeamButton);

  function getTournamentInfo() {
    $.get("/api/tournament_info", renderTourneyList);
  }
  getTournamentInfo();

  function renderTourneyList(data) {
    if (!data.length) {
      window.location.href = "/";
    }
    const rowsToAdd = [];
    for (let i = 0; i < data.length; i++) {
      rowsToAdd.push(createTourneyRow(data[i]));
    }
    tournamentSelect.empty();
    console.log(rowsToAdd);
    console.log(tournamentSelect);
    tournamentSelect.append(rowsToAdd);
    tournamentSelect.val(TournamentTournyId);
  }

  function createTourneyRow(tourney) {
    const listOption = $("<option>");
    listOption.attr("value", tourney.tournyId);
    listOption.text(tourney.name);
    return listOption;
  }

  function addTeam(teamData) {
    $.post("/api/teamInfo", teamData, () => {
      teamInputList.append(
        `<li>Team: <span class="text-dark">${teamData.name}</span> Seed: <span class="text-dark">${teamData.seed}</span></li>`
      );
    });
  }

  function handleTourneyBreakdownButton(event) {
    event.preventDefault();

    if (!teamInput.val() || !seedInput.val() || !tournamentSelect.val()) {
      window.location.replace("/tournamentBreakdown");
    } else {
      addTeam({
        name: teamInput.val().trim(),
        seed: seedInput.val().trim(),
        TournamentTournyId: tournamentSelect.val()
      });

      teamInput.val("");
      seedInput.val("");
    }
  }

  function handleAddTeamButton(event) {
    event.preventDefault();
    if (!teamInput.val() || !seedInput.val() || !tournamentSelect.val()) {
      return;
    }

    addTeam({
      name: teamInput.val().trim(),
      seed: seedInput.val().trim(),
      TournamentTournyId: tournamentSelect.val()
    });
    teamInput.val("");
    seedInput.val("");
  }
});
