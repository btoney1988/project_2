$(document).ready(() => {
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

  const thisHour = $("#currentTime");
  // eslint-disable-next-line no-unused-vars
  const nowTime = moment().hours();
  setInterval(() => {
    const grabDate = moment();
    const thisDate = grabDate.format("hh:mm:ss A");

    thisHour.text(thisDate);
  }, 100);
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
