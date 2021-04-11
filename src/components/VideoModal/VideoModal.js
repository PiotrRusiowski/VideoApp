import React from "react";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import ReactPlayer from "react-player";
import "./VideoModal";

const VideoModal = ({ modal, toggle, video }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{video.title}</ModalHeader>

      <ModalBody className="videoModalBody">
        <ReactPlayer
          url={video.link}
          controls
          width="400px"
          height="300px"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

export default VideoModal;
