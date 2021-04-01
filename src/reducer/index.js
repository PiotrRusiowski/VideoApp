import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  test: "test",
  video: null,
};
const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case "TEST":
      return {
        ...state,
        test: payload,
      };

    case actionsTypes.GET_VIDEO:
      return {
        ...state,
        video: payload,
      };

    default:
      return state;
  }
};

export default reducer;
