import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleVideo } from "../../actions";
import { VideoCard } from "../VideoCard/VideoCard";
import { Container, Row, Col } from "reactstrap";

const VideosList = () => {
  const selectedVideoList = useSelector(({ videosList }) => videosList);
  const dispatch = useDispatch();
  return (
    <Row sm="4">
      {selectedVideoList.map((video) => (
        <Col>
          <VideoCard video={video} />
        </Col>
      ))}
    </Row>
  );
};

export default VideosList;
