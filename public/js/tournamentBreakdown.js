$(document).ready(() => {
  const breakdownCard = $("#breakdown");
  $.get("/api/team_info")
    .then(response => {
      console.log(response);
      for (i = 0; i < response.length; i++) {
        breakdownCard.append(
          `<div class="col-3 mt-2">
             <div class="card" style="width: 14rem;">
               <div class="card-body text-center">
                 <h5 class="teamName">${response[i].name}</h5>
                 <h7 class="rank">Seed: ${response[i].seed}</h7>
               </div>
             </div>
           </div>`
        );
      }
    })
    .catch(err => {
      console.log(err);
    });
  $(document).on("click", "#startTourney", event => {
    event.preventDefault();
    window.location.replace("/tournamentBracket");
  });
});
