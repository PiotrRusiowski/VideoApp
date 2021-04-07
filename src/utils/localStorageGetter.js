export const getVideosFromLocalStorage = () => {
  let localStorageVideos;

  if (localStorage.getItem("allVideosList")) {
    localStorageVideos = JSON.parse(localStorage.getItem("allVideosList"));
  } else {
    localStorageVideos = [];
  }

  return localStorageVideos;
};

export const getLikesVideosFromLocalStorage = () => {
  let localStorageLikesVideos;

  if (localStorage.getItem("likesVideosList")) {
    localStorageLikesVideos = JSON.parse(
      localStorage.getItem("likesVideosList")
    );
  } else {
    localStorageLikesVideos = [];
  }

  return localStorageLikesVideos;
};
