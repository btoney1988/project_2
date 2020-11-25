$(document).ready(() => {
  const breakdownCard = $("#breakdown");
  const tourneyForm = $("#tourneySelect");
  const tournamentSelect = $("#tournaments");
  let TournamentTournyId;
  $(tourneyForm).on("click", "#tourneyBreakdown", handleTourneyBreakdownButton);
  $(document).on("click", "#home", () => {
    window.location.replace("/");
  });
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

  function handleTourneyBreakdownButton(event) {
    event.preventDefault();

    if (!tournamentSelect.val()) {
      return;
    }
    getBreakdownInfo(tournamentSelect.val());
  }

  function getBreakdownInfo(id) {
    const tempId = id - 1;
    $.get("/api/tournamentBreakdown")
      .then(response => {
        console.log(id);
        console.log(response[0][tempId]);
        for (let i = 0; i <= response[0][tempId].Teams.length; i++) {
          breakdownCard.append(
            `<div class="col-3 mt-2">
             <div class="card" style="width: 14rem;">
               <div class="card-body text-center">
                 <h5 class="teamName">${response[0][tempId].Teams[i].name}</h5>
                 <h7 class="rank">Seed: ${response[0][tempId].Teams[i].seed}</h7>
               </div>
             </div>
           </div>`
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  $(document).on("click", "#startTourney", event => {
    event.preventDefault();
    window.location.replace("/tournamentBracket");
  });
});
