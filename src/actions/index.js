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
