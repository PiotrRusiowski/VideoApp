import React from "react";
import { Button, Form, Input, InputGroupAddon, InputGroup } from "reactstrap";
import { useDispatch } from "react-redux";
import "./GetVideoForm.css";

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
      const queryString = inputValue.substr(
        inputValue.indexOf("?"),
        inputValue.length - inputValue.indexOf("?")
      );
      const queryParams = new URLSearchParams(queryString);
      videoId = queryParams.get("v");

      getVideoByYouTubeApi(videoId, dispatch);
    } else {
      getVideoByYouTubeApi(inputValue, dispatch, getVideoByVimeoApi);
    }

    e.target.reset();
  };
  return (
    <Form className="getVideoForm" onSubmit={getVideoDetails}>
      <InputGroup>
        <Input
          name="searchVideo"
          placeholder="Pase vimeo or youtube link, id . . . "
        />
        <InputGroupAddon addonType="append">
          <Button color="dark" size="sm" type="submit">
            get video
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  );
};

export default GetVideoForm;
