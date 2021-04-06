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
