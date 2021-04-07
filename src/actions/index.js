import { actionsTypes } from "./actionsTypes";
export const deleteSingleVideo = (id) => ({
  type: actionsTypes.deleteSingleVideo,
  payload: id,
});
export const getVideo = (video) => ({
  type: actionsTypes.GET_VIDEO,
  payload: video,
});
export const addToLikes = (id) => ({
  type: actionsTypes.addToLikes,
  payload: id,
});
export const deleteAllVideos = () => ({
  type: actionsTypes.deleteAllVideos,
});
export const showAllVideos = () => ({
  type: actionsTypes.showAllVideos,
});
export const showLikesVideos = () => ({
  type: actionsTypes.showLikesVideos,
});
export const deleteSingleLikesVideo = (id) => ({
  type: actionsTypes.deleteSingleLikesVideo,
  payload: id,
});
export const selectVideosListView = () => ({
  type: actionsTypes.selectVideosListView,
});
export const isHoverTrue = (id) => ({
  type: actionsTypes.IS_HOVER_TRUE,
  payload: id,
});
export const isHoverFalse = () => ({
  type: actionsTypes.IS_HOVER_FALSE,
});
