export const selectSlot = slot => ({
  type: "SELECT_SLOT",
  slot
});
export const unselectSlot = () => ({
  type: "UNSELECT_SLOT"
});

export const addPlayerToBuildingTeam = player => ({
  type: "ADD_PLAYER_TO_BUILDING_TEAM",
  player
});

export const setJerseyNumber = jersey => ({
  type: "SET_JERSEY_NUMBER",
  jersey
});

export const removePlayerFromBuildingTeam = slot => ({
  type: "REMOVE_PLAYER_FROM_BUILDING_TEAM",
  slot
});

export const selectFormation = formation => ({
  type: "SELECT_FORMATION",
  formation
});

export const setTeamName = name => ({
  type: "SET_TEAM_NAME",
  name
});

export const setCoach = coach => ({
  type: "SET_COACH",
  coach
});
