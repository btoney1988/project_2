// const db = require("../../models");
loginForm.on("submit", event => {
  event.preventDefault();
  const userData = {
    email: emailInput.val().trim(),
    password: passwordInput.val().trim()
  };

  if (!userData.email || !userData.password) {
    return;
  }

  // If we have an email and password we run the loginUser function and clear the form
  loginUser(userData.email, userData.password);
  emailInput.val("");
  passwordInput.val("");
});

// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginUser(email, password) {
  $.post("/api/login", {
    email: email,
    password: password
  })
    .then(() => {
      window.location.replace("/tournament_info");
      // If there's an error, log the error
    })
    .catch(err => {
      console.log(err);
    });
}

// Requiring our models and passport as we've configured it
$(document).ready(() => {
  function getTournamentInfo(name) {
    $.post("/api/tournament_info", {
      name: name
    })
      .then(() => {
        window.location.replace("/tournament_info");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getTournamentInfo() {
    return [
      {
        name: "tournament1",
        id: 1,
        // eslint-disable-next-line prettier/prettier
        teamAmount: 8,
        // eslint-disable-next-line prettier/prettier
      },
    ];
  }

  getTournamentInfo();

  // const thisHour = $("#currentTime");
  // // eslint-disable-next-line no-unused-varss
  // const nowTime = moment().hours();
  // setInterval(() => {
  //   const grabDate = moment();
  //   const thisDate = grabDate.format("hh:mm:ss A");

  //   thisHour.text(thisDate);
  // }, 100);
  // $("input:checkbox").click(function() {
  //   $("input:checkbox")
  //     .not(this)
  //     .prop("checked", false);
  // });
  // function teamNum() {
  //   const checkBox1 = document.getElementById("check8");
  //   const text1 = document.getElementById("team8");
  //   const checkBox2 = document.getElementById("check16");
  //   const text2 = document.getElementById("team16");
  //   if (checkBox1.checked === true) {
  //     text1.style.display = "block";
  //     text2.style.display = "none";
  //   } else {
  //     text1.style.display = "none";
  //   }
  //   if (checkBox2.checked === true) {
  //     text2.style.display = "block";
  //     text1.style.display = "none";
  //   } else {
  //     text2.style.display = "none";
  //   }
  // }
  // teamNum();

  const teams = [];
  $("#tournyBtn").click(() => {
    const addTeam = function() {
      // event.preventDefault();
      const team = {
        tournament: document.getElementById("eventName").value,
        name: document.getElementById("teamName").value,
        seed: document.getElementById("teamRank").value,
        manager: document.getElementById("coachName").value,
        // eslint-disable-next-line prettier/prettier
        number: document.getElementById("teamNum").value,
        // eslint-disable-next-line semi
        // eslint-disable-next-line prettier/prettier
      };
      teams.push(team);
      document.forms[0].reset();
      console.log(teams);
    };
    addTeam();
  });
});
