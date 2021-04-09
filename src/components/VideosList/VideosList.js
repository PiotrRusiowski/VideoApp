import React, { useState } from "react";
import { useSelector } from "react-redux";
import { VideoCard } from "../VideoCard/VideoCard";
import { Row, Col } from "reactstrap";
import ReactPaginate from "react-paginate";

const VideosList = () => {
  const selectedVideoList = useSelector(({ showVideos }) => showVideos);
  const selectedIsList = useSelector(({ isList }) => isList);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const perPage = 4;
  const offset = currentPage * perPage;

  const currentPageData = selectedVideoList
    .slice(offset, offset + perPage)
    .map((video) => (
      <Col key={video.id} sm="3">
        <VideoCard video={video} />
      </Col>
    ));

  const pageCount = Math.ceil(selectedVideoList.length / perPage);

  return (
    <>
      {selectedIsList ? <>{currentPageData}</> : <Row>{currentPageData}</Row>}

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </>
  );
};

export default VideosList;
