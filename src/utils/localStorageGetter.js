export const getVideosFromLocalStorage = () => {
  let localStorageVideos;

  if (localStorage.getItem("videosList")) {
    localStorageVideos = JSON.parse(localStorage.getItem("photos"));
  } else {
    localStorageVideos = [];
  }

  return localStorageVideos;
};
