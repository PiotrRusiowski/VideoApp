import React from "react";
import { Button, Container, Form, Input, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../../actions";
import axios from "axios";
import { youTubeKey, vimeoKey } from "../../apiKeys";
import {
  getVideoByYouTubeApi,
  getVideoByVimeoApi,
} from "../../utils/apiRequests";

const GetVideoForm = () => {
  const dispatch = useDispatch();

  const getVideoDetails = (e) => {
    e.preventDefault();

    const inputValue = e.target.searchVideo.value;
    let videoId;

    if (inputValue.includes("vimeo")) {
      videoId = inputValue.substring(18);

      getVideoByVimeoApi(videoId, dispatch);
    } else if (inputValue.includes("youtube")) {
      videoId = inputValue.slice(inputValue.length - 11);

      getVideoByYouTubeApi(videoId, dispatch);
    } else {
      getVideoByYouTubeApi(inputValue, dispatch, getVideoByVimeoApi);
    }

    e.target.reset();
  };
  return (
    <Form style={{ width: "60%", display: "flex" }} onSubmit={getVideoDetails}>
      <Input name="searchVideo" style={{ width: "85%" }} />
      <Button color="danger" size="sm" type="submit">
        get video
      </Button>
    </Form>
  );
};

export default GetVideoForm;
