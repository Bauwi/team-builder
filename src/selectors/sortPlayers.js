const sortPlayers = (currentTeam, buildingTeam) => {
  const playersOnThePitch = Object.keys(buildingTeam.slots).map(
    key => buildingTeam.slots[key] && buildingTeam.slots[key].name
  );
  return currentTeam.players
    .filter(player => !playersOnThePitch.includes(player.name))
    .map(player => {
      if (player.position === "Keeper") {
        return { ...player, line: 0 };
      } else if (player.position.includes("Back")) {
        return { ...player, line: 1 };
      } else if (player.position.includes("Midfield")) {
        return { ...player, line: 2 };
      } else if (
        player.position.includes("Wing") ||
        player.position.includes("Forward")
      ) {
        return { ...player, line: 3 };
      }
      return;
    })
    .sort((a, b) => {
      if (a["line"] < b["line"]) {
        return -1;
      } else if (a["line"] > b["line"]) {
        return 1;
      }
      return 0;
    });
};

export default sortPlayers;
