// Getting references to our form and input
const tournyForm = $("form.tournyInfo");
const tournyInput = $("input#tournyName");

// When the signup button is clicked, we validate the email and password are not blank
tournyForm.on("submit", event => {
  event.preventDefault();
  const userData = {
    tournament: tournyInput.val().trim()
  };

  // If we have an email and password, run the signUpUser function
  enterTourny(userData.tournament);
  tournyInput.val("");
});

// Does a post to the signup route. If successful, we are redirected to the members page
// Otherwise we log any errors
function enterTourny(tournament) {
  $.post("/api/tournament_info", {
    name: tournament
  })
    .then(() => {
      window.location.replace("/team_info");
      // If there's an error, handle it by throwing up a bootstrap alert
    })
    .catch(handleLoginErr);
}

function handleLoginErr(err) {
  $("#alert .msg").text(err.responseJSON);
  $("#alert").fadeIn(500);
}
