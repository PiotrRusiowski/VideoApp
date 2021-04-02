import React, { useEffect } from "react";
import "./App.css";
import { Button, Container, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "./actions";
import axios from "axios";
import { youTubeKey, vimeoKey } from "./apiKeys";
import VideosList from "./components/VideosList/VideosList";

const App = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);

  const getVideoDetails = (e) => {
    e.preventDefault();
    const inputValue = e.target.searchVideo.value;
    let video;

    if (inputValue.includes("youtube")) {
      const youTubeId = e.target.searchVideo.value.slice(
        e.target.searchVideo.value.length - 11
      );
      axios

        .get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${youTubeId}&key=${youTubeKey}`
        )
        .then((res) => {
          const { title, publishedAt, thumbnails } = res.data.items[0].snippet;
          const {
            likeCount,
            dislikeCount,
            viewCount,
          } = res.data.items[0].statistics;

          const id = res.data.items[0].id;
          const thumbnail = thumbnails.default.url;

          video = {
            id,
            title,
            publishedAt,
            thumbnail,
            likeCount,
            // dislikeCount,
            viewCount,
          };
          dispatch(getVideo(video));
        })
        .catch((err) => console.log(err));
    } else {
      let vimeoId;
      if (e.target.searchVideo.value.includes("https")) {
        vimeoId = e.target.searchVideo.value.substring(18);
        console.log(true);
      } else {
        vimeoId = e.target.searchVideo.value;
        console.log(false);
      }

      console.log(vimeoId);
      axios
        .get(`https://api.vimeo.com/videos/${vimeoId}`, {
          headers: {
            Authorization: "bearer " + vimeoKey,
          },
        })
        .then((res) => {
          console.log(res.data);
          const { name, metadata, pictures, created_time } = res.data;
          const title = name;
          const likeCount = metadata.connections.likes.total;
          const thubnail = pictures.sizes[2].link;
          const publishedAt = created_time;
          const id = vimeoId;

          video = { title, likeCount, thubnail, publishedAt, id };
          dispatch(getVideo(video));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <Container>
        <form onSubmit={getVideoDetails}>
          <Input name="searchVideo" />
          <Button color="danger" type="submit">
            search
          </Button>
        </form>
        <VideosList />
      </Container>
    </div>
  );
};

export default App;
