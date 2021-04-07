import { actionsTypes } from "../actions/actionsTypes";
import {
  getVideosFromLocalStorage,
  getLikesVideosFromLocalStorage,
} from "../utils/localStorageGetter";

const initialState = {
  showVideos: [],
  allVideosList: getVideosFromLocalStorage(),
  likesVideosList: getLikesVideosFromLocalStorage(),
  isList: false,
};
const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case actionsTypes.GET_VIDEO:
      let isVideoInList;

      state.allVideosList.forEach((video) => {
        if (video.id === payload.id) {
          isVideoInList = true;
        }
      });

      if (isVideoInList) {
        return {
          ...state,
          allVideosList: [...state.allVideosList],
        };
      } else {
        return {
          ...state,
          allVideosList: [...state.allVideosList, payload],
        };
      }

    case actionsTypes.deleteSingleVideo:
      const videosListAfterDelete = state.allVideosList.filter(
        (video) => video.id !== payload
      );

      return {
        ...state,
        allVideosList: [...videosListAfterDelete],
      };
    case actionsTypes.addToLikes:
      const likeVideo = state.allVideosList.find(
        (video) => video.id === payload
      );
      return {
        ...state,
        likesVideosList: [...state.likesVideosList, likeVideo],
      };
    case actionsTypes.deleteAllVideos:
      return {
        ...state,
        allVideosList: [],
        likesVideosList: [],
      };
    case actionsTypes.showLikesVideos:
      return {
        ...state,
        showVideos: state.likesVideosList,
      };
    case actionsTypes.showAllVideos:
      return {
        ...state,
        showVideos: state.allVideosList,
      };
    case actionsTypes.deleteSingleLikesVideo:
      const likesVideosListAfterDelete = state.likesVideosList.filter(
        (video) => video.id !== payload
      );

      return {
        ...state,
        likesVideosList: [...likesVideosListAfterDelete],
      };
    case actionsTypes.selectVideosListView:
      return {
        ...state,
        isList: !state.isList,
      };
    case actionsTypes.IS_HOVER_TRUE:
      const mapShowVideos = state.allVideosList.map((video) => {
        if (payload === video.id) {
          video.isHover = true;
        }
        return video;
      });
      return {
        ...state,
        showVideos: mapShowVideos,
      };
    case actionsTypes.IS_HOVER_FALSE:
      const isHoverFalse = state.showVideos.map((video) => {
        video.isHover = false;
        return video;
      });

      return {
        ...state,
        showVideos: isHoverFalse,
      };

    default:
      return state;
  }
};

export default reducer;
