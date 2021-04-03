import { actionsTypes } from "../actions/actionsTypes";

const initialState = {
  videosList: [],
  likesVideosList: [],
};
const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.GET_VIDEO:
      return {
        ...state,
        videosList: [...state.videosList, payload],
      };
    case actionsTypes.deleteSingleVideo:
      const videosListAfterDelete = state.videosList.filter(
        (video) => video.id !== payload
      );

      console.log(videosListAfterDelete);
      return {
        ...state,
        videosList: [...videosListAfterDelete],
      };
    case actionsTypes.addToLikes:
      const likeVideo = state.videosList.find((video) => video.id === payload);
      console.log(payload);
      return {
        ...state,
        likesVideosList: [...state.likesVideosList, likeVideo],
      };
    default:
      return state;
  }
};

export default reducer;
