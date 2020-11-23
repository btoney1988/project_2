// $.get("/api/tournaments")
//   .then(data => {
//     console.log(data);
//     window.location.replace("/tournament_breakdown");
//     // If there's an error, log the error
//   });
//   .catch(err => {
//     console.log(err);
//   });

const saveData = {
  teams: [
    ["Team 1", "Team 2"],
    ["Team 3", "Team 4"],
    ["Team 5", "Team 6"],
    ["Team 7", "Team 8"]
  ],
  results: [
    [
      [
        [null, null],
        [null, null],
        [null, null],
        [null, null]
      ],
      [
        [null, null],
        [null, null]
      ],
      [
        [null, null],
        [null, null]
      ]
    ]
  ]
};

/* Called whenever bracket is modified
 *
 * data:     changed bracket object in format given to init
 * userData: optional data given when bracket is created.
 */
function saveFn(data, userData) {
  const json = jQuery.toJSON(data);
  $("#saveOutput").text("POST " + userData + " " + json);
  /* You probably want to do something like this
    jQuery.ajax("rest/"+userData, {contentType: 'application/json',
                                  dataType: 'json',
                                  type: 'post',
                                  data: json})
    */
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
    roundMargin: 150
  });

  /* You can also inquiry the current data */
  const data = container.bracket("data");
  $("#dataOutput").text(jQuery.toJSON(data));
});
