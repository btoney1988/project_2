const minimalData = {
  teams: [
    ["Team 1", "Team 2"] /* first matchup */,
    // eslint-disable-next-line prettier/prettier
    ["Team 3", "Team 4"],
  ],
  results: [
    [
      [1, 2],
      // eslint-disable-next-line prettier/prettier
      [3, 4],
    ] /* first round */,
    [
      [4, 6],
      // eslint-disable-next-line prettier/prettier
      [2, 1],
      // eslint-disable-next-line prettier/prettier
    ] /* second round */,
    // eslint-disable-next-line prettier/prettier
  ],
};
$(() => {
  $("#minimal .demo").bracket({
    // eslint-disable-next-line prettier/prettier
    init: minimalData /* data to initialize the bracket with */,
  });
});
