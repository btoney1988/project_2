$(document).ready(() => {
  const tournamentSelect = $("#tournaments");

  $(document).on("click", "#tourneyBreakdown", handleTourneyBreakdownButton);
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
    console.log(tournamentSelect.val());
    getBreakdownInfo(tournamentSelect.val());
  }
  function getBreakdownInfo(id) {
    id = id - 1;
    $.get("/api/tournamentBreakdown")
      .then(response => {
        console.log(id);
        console.log(response[0]);
        const saveData = {
          teams: [
            [response[0][id].Teams[0].name, response[0][id].Teams[7].name],
            [response[0][id].Teams[1].name, response[0][id].Teams[6].name],
            [response[0][id].Teams[2].name, response[0][id].Teams[5].name],
            [response[0][id].Teams[3].name, response[0][id].Teams[4].name]
          ],
          result: [
            [null, null],
            [null, null],
            [null, null],
            [null, null]
          ]
        };
        function saveFn(data, userData) {
          const json = jQuery.toJSON(data);
          $("#saveOutput").text("POST " + userData + " " + json);
        }
        $(() => {
          const container = $("div#save .demo");
          container.bracket({
            init: saveData,
            save: saveFn,
            userData: "http://myapi",
            teamWidth: 100,
            scoreWidth: 50,
            matchMargin: 70,
            roundMargin: 150,
            disableToolbar: true
          });

          /* You can also inquiry the current data */
          const data = container.bracket("data");
          $("#dataOutput").text(jQuery.toJSON(data));
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
});
