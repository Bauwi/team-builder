const teamDefaultState = {
  coach: "",
  name: "",
  formation: "fourThreeThree",
  selectedSlot: null,
  slots: {
    slot0: { name: "", jersey: "" },
    slot1: { name: "", jersey: "" },
    slot2: { name: "", jersey: "" },
    slot3: { name: "", jersey: "" },
    slot4: { name: "", jersey: "" },
    slot5: { name: "", jersey: "" },
    slot6: { name: "", jersey: "" },
    slot7: { name: "", jersey: "" },
    slot8: { name: "", jersey: "" },
    slot9: { name: "", jersey: "" },
    slot10: { name: "", jersey: "" }
  }
};

export default (state = teamDefaultState, action) => {
  switch (action.type) {
    case "SELECT_SLOT":
      return {
        ...state,
        selectedSlot: action.slot
      };
    case "UNSELECT_SLOT":
      return {
        ...state,
        selectedSlot: null
      };
    case "SET_TEAM_NAME":
      return {
        ...state,
        name: action.name
      };
    case "SET_COACH":
      return {
        ...state,
        coach: action.coach
      };
    case "ADD_PLAYER_TO_BUILDING_TEAM":
      return {
        ...state,
        slots: {
          ...state.slots,
          [state.selectedSlot]: {
            ...state.slots[state.selectedSlot],
            name: action.player
          }
        }
      };
    case "SET_JERSEY_NUMBER":
      return {
        ...state,
        slots: {
          ...state.slots,
          [state.selectedSlot]: {
            ...state.slots[state.selectedSlot],
            jersey: action.jersey
          }
        }
      };
    case "REMOVE_PLAYER_FROM_BUILDING_TEAM":
      return {
        ...state,
        slots: { ...state.slots, [action.slot]: null }
      };
    case "SELECT_FORMATION":
      return {
        ...state,
        formation: action.formation
      };

    default:
      return state;
  }
};
