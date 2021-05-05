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
import withHoverEffect from "../../hoc/withHoverEffect";
import VideoModal from "../VideoModal/VideoModal";
import { AiFillLike, TiDeleteOutline, BiPlayCircle } from "react-icons/all";
import "./VideoCard";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import { dateFormater } from "../../utils/dateFormater";
import { useAlert } from "react-alert";
const VideoCard = ({ video, isHover, toggleIsHover }) => {
  const { title, thumbnail, publishedAt, likeCount, viewCount, id } = video;

  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const alert = useAlert();
  return (
    <>
      <VideoModal modal={modal} toggle={toggle} video={video} />

      <Card
        className="mb-4 videoCard"
        onMouseEnter={toggleIsHover}
        onMouseLeave={toggleIsHover}
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
              <BiPlayCircle onClick={toggle} />
            </div>
          </div>
        ) : (
          ""
        )}

        <CardBody>
          <CardTitle color="white" tag="h6">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-1 text-muted">
            {dateFormater(publishedAt)}
          </CardSubtitle>
          <CardSubtitle className="mb-1 text-muted">
            {viewCount} views
          </CardSubtitle>
          <CardSubtitle className="mb-4 text-muted likesCounter">
            <AiFillLike
              style={isHover ? { color: "white" } : ""}
              onClick={() => {
                dispatch(addToLikes(id));
                alert.show("Add to the likes list");
              }}
              className="addToLikeBtn"
            />
            {likeCount}
          </CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
};
export default withHoverEffect(VideoCard);
