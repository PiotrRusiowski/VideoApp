import axios from "axios";
import { getVideo } from "../actions";
import { vimeoKey, youTubeKey } from "../apiKeys";

const defaultErrorFunction = () => {
  alert("Wystąpił bład, proszę spróbować jeszcze raz");
};

export const getVideoByYouTubeApi = (
  videoId,
  dispatch,
  callbackErrorFunction = defaultErrorFunction
) => {
  axios

    .get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${youTubeKey}`
    )
    .then(({ data }) => {
      const { title, publishedAt, thumbnails } = data.items[0].snippet;
      const { likeCount, viewCount } = data.items[0].statistics;
      const id = data.items[0].id;
      const thumbnail = thumbnails.standard.url;
      const link = `https://www.youtube.com/watch?v=${id}`;

      const publishedAtDate = new Date(publishedAt).getTime();

      const video = {
        id,
        link,
        title,
        publishedAt: publishedAtDate,
        thumbnail,
        likeCount,
        viewCount,
        isHover: false,
        addedAt: new Date().getTime(),
      };

      dispatch(getVideo(video));
    })
    .catch((err) => callbackErrorFunction(videoId, dispatch));
};

export const getVideoByVimeoApi = (videoId, dispatch) => {
  axios
    .get(`https://api.vimeo.com/videos/${videoId}`, {
      headers: {
        Authorization: "bearer " + vimeoKey,
      },
    })
    .then((res) => {
      const { name, metadata, pictures, created_time, link } = res.data;
      const likeCount = metadata.connections.likes.total;
      const thumbnail = pictures.sizes[3].link;
      const publishedAtDate = new Date(created_time);

      const video = {
        title: name,
        likeCount,
        thumbnail,
        publishedAt: publishedAtDate,
        id: videoId,
        link,
        isHover: false,
      };
      dispatch(getVideo(video));
    })
    .catch((err) => defaultErrorFunction());
};
