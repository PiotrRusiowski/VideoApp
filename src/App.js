import React, { useEffect } from "react";
import "./App.css";
import { Button, Container, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeTest, getVideo } from "./actions";
import axios from "axios";
import { youTubeKey, vimeoKey } from "./apiKeys";

const App = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const { test } = reducerState;

  const getVideoDetails = (e) => {
    e.preventDefault();

    const videoId = e.target.searchVideo.value.slice(
      e.target.searchVideo.value.length - 11
    );

    // const videoId2 = 7466309;
    // // https://vimeo.com/7466309
    // axios
    //   .get(`https://api.vimeo.com/videos/${videoId2}`, {
    //     headers: {
    //       Authorization: "bearer " + vimeoKey,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.log(err));

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${youTubeKey}`
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

        const video = {
          id,
          title,
          publishedAt,
          thumbnail,
          likeCount,
          dislikeCount,
          viewCount,
        };
        console.log(video);
        dispatch(getVideo(video));
      })
      .catch((err) => console.log(err));

    console.log(videoId);
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

        <h1>{test}</h1>
      </Container>
    </div>
  );
};

export default App;
