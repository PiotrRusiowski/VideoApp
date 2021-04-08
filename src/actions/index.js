import { actionsTypes } from "./actionsTypes";
export const deleteSingleVideo = (id) => ({
  type: actionsTypes.DELETE_SINGLE_VIDEO,
  payload: id,
});
export const getVideo = (video) => ({
  type: actionsTypes.GET_VIDEO,
  payload: video,
});
export const addToLikes = (id) => ({
  type: actionsTypes.ADD_TO_LIKES,
  payload: id,
});
export const deleteAllVideos = () => ({
  type: actionsTypes.DELETE_ALL_VIDEOS,
});
export const showAllVideos = () => ({
  type: actionsTypes.SHOW_ALL_VIDEOS,
});
export const showLikesVideos = () => ({
  type: actionsTypes.SHOW_LIKES_VIDEOS,
});
export const deleteSingleLikesVideo = (id) => ({
  type: actionsTypes.DELETE_SINGLE_LIKES_VIDEO,
  payload: id,
});
export const selectVideosListView = () => ({
  type: actionsTypes.SELECT_VIDEOS_LIST_VIEW,
});
export const isHoverTrue = (id) => ({
  type: actionsTypes.IS_HOVER_TRUE,
  payload: id,
});
export const isHoverFalse = () => ({
  type: actionsTypes.IS_HOVER_FALSE,
});
