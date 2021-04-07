import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { VideoCard } from "../VideoCard/VideoCard";
import { Row, Col } from "reactstrap";
import { Alert } from "reactstrap";

const VideosList = () => {
  const selectedVideoList = useSelector(({ showVideos }) => showVideos);
  const selectedIsList = useSelector(({ isList }) => isList);

  return (
    <>
      {selectedIsList ? (
        <>
          {selectedVideoList.map((video) => (
            <Col key={video.id} sm="3">
              <VideoCard video={video} />
            </Col>
          ))}
        </>
      ) : (
        <Row>
          {selectedVideoList.map((video) => (
            <Col key={video.id} sm="3">
              <VideoCard video={video} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default VideosList;
