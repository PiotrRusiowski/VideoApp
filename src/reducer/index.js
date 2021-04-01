import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  videosList: [],
};
const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.GET_VIDEO:
      return {
        ...state,
        videosList: [...state.videosList, payload],
      };
    default:
      return state;
  }
};

export default reducer;
