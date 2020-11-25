$(document).ready(() => {
  // Getting references to our form and input

  const tournyInput = $("#tournyName");

  $(document).on("submit", "#tournyInfo", handleTournyFormSubmit);

  function handleTournyFormSubmit(event) {
    event.preventDefault();
    if (!tournyInput.val()) {
      return;
    }

    addTourny({
      name: tournyInput.val().trim()
    });
  }

  function addTourny(tournyData) {
    $.post("/api/tournament_info", tournyData).then(() => {
      window.location.replace("/teamInfo");
    });
  }
});
