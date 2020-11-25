$(document).ready(() => {
  const tournamentInfoForm = $("form.tournament-info");
  const tournamentNameInput = $("input#tournamentName");
  const teamNameInput = $("input#teamName");
  const teamRankInput = $("input#teamRank");

  tournamentInfoForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      name: tournamentNameInput.val().trim(),
      teamName: teamNameInput.val().trim(),
      teamRank: teamRankInput.val().trim()
    };
  });
  getTeamInfo();
});
