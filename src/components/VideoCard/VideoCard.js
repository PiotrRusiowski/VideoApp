import React from "react";
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
  const { title, thumbnail } = video;
  console.log(thumbnail);

  return (
    <Card style={{ height: "300px" }} className="mb-4">
      <CardImg
        top
        width="100%"
        height="150px"
        src={thumbnail}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h6">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Card subtitle
        </CardSubtitle>
        <CardText></CardText>
      </CardBody>
    </Card>
  );
};
