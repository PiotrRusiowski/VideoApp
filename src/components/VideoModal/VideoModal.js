import React, { useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ReactPlayer from "react-player";

const VideoModal = ({ modal, toggle, video }) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{video.title}</ModalHeader>
      <ReactPlayer url={video.link} controls width="400px" height="300px" />
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

export default VideoModal;
