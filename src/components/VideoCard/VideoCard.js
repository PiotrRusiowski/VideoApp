import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./VideoCard.css";
import {
  addToLikes,
  deleteSingleVideo,
  deleteSingleLikesVideo,
  isHoverTrue,
  isHoverFalse,
} from "../../actions";
import VideoModal from "../VideoModal/VideoModal";
import { AiFillLike, TiDeleteOutline, BiPlayCircle } from "react-icons/all";

import "./VideoCard";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
export const VideoCard = ({ video }) => {
  const {
    title,
    thumbnail,
    publishedAt,
    likeCount,
    viewCount,
    id,
    isHover,
  } = video;
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <VideoModal modal={modal} toggle={toggle} video={video} />

      <Card
        className="mb-4 videoCard"
        onMouseEnter={() => dispatch(isHoverTrue(id))}
        onMouseLeave={() => {
          dispatch(isHoverFalse());
        }}
        inverse
      >
        <CardImg
          style={{ cursor: "pointer" }}
          onClick={toggle}
          top
          width="100%"
          height="200px"
          src={thumbnail}
          alt="Card image cap"
        />
        <div
          className="deleteBtn mobile"
          onClick={() => {
            dispatch(deleteSingleVideo(id));
            dispatch(deleteSingleLikesVideo(id));
          }}
        >
          <TiDeleteOutline />
        </div>
        {isHover ? (
          <div className="hoverVideoCard">
            <div
              className="deleteBtn"
              onClick={() => {
                dispatch(deleteSingleVideo(id));
                dispatch(deleteSingleLikesVideo(id));
              }}
            >
              <TiDeleteOutline />
            </div>
            <div className="playBtn">
              <BiPlayCircle />
            </div>
          </div>
        ) : (
          ""
        )}

        <CardBody>
          <CardTitle color="white" tag="h6">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-1 text-muted">{publishedAt}</CardSubtitle>
          <CardSubtitle className="mb-1 text-muted">
            {viewCount} views
          </CardSubtitle>
          <CardSubtitle className="mb-4 text-muted likesCounter">
            <AiFillLike
              style={isHover ? { color: "white" } : ""}
              onClick={() => dispatch(addToLikes(id))}
              className="addToLikeBtn"
            />
            {likeCount}
          </CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
};
