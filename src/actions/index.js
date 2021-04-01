import { actionsTypes } from "./actionsTypes";

export const changeTest = (newTest) => ({
  type: "TEST",
  payload: newTest,
});

export const getVideo = (video) => ({
  type: actionsTypes.GET_VIDEO,
  payload: video,
});
