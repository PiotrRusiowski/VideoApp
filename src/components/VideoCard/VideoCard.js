import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLikes, deleteSingleVideo } from "../../actions";

import { AiFillLike } from "react-icons/ai";

import "./VideoCard";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
  CardColumns,
  CardDeck,
} from "reactstrap";
export const VideoCard = ({ video }) => {
  const { title, thumbnail, publishedAt, likeCount, viewCount, id } = video;
  const dispatch = useDispatch();

  return (
    <Card style={{ height: "400px" }} className="mb-4">
      <CardImg
        top
        width="100%"
        height="200px"
        src={thumbnail}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h6">{title}</CardTitle>
        <CardSubtitle className="mb-1 text-muted">{publishedAt}</CardSubtitle>
        <CardSubtitle className="mb-1 text-muted">
          {viewCount} views
        </CardSubtitle>
        <CardSubtitle className="mb-4 text-muted">
          <AiFillLike /> {likeCount}
        </CardSubtitle>
        <Button onClick={() => dispatch(deleteSingleVideo(id))}>X</Button>
        <Button onClick={() => dispatch(addToLikes(id))}>Add</Button>
      </CardBody>
    </Card>
  );
};
