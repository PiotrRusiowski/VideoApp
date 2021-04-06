import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { VideoCard } from "../VideoCard/VideoCard";
import { Row, Col } from "reactstrap";

const VideosList = () => {
  const selectedVideoList = useSelector(({ showVideos }) => showVideos);

  return (
    <Row sm="4">
      {selectedVideoList.map((video) => (
        <>
          <Col>
            <VideoCard key={video.id} video={video} />
          </Col>
        </>
      ))}
    </Row>
  );
};

export default VideosList;
