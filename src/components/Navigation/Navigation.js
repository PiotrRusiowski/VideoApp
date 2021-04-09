import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";

import {
  RiFileList2Fill,
  AiFillLike,
  MdDelete,
  MdVideoLibrary,
  BsFilterLeft,
  BiPlayCircle,
} from "react-icons/all";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import {
  deleteAllVideos,
  selectVideosListView,
  showAllVideos,
  showLikesVideos,
} from "../../actions";
import GetVideoForm from "../GetVideoForm/GetVideoForm";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [likesVideos, setLikesVideos] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const selectedIsList = useSelector(({ isList }) => isList);

  return (
    <Navbar dark expand="md" style={{ paddng: "20px" }}>
      <Container>
        <div className="logoWrapper">
          <NavbarBrand className="text-success" href="/">
            <BiPlayCircle className="navLogo" />
            VGetter
          </NavbarBrand>
        </div>

        <GetVideoForm />

        <Nav className="mr-auto" navbar>
          <UncontrolledDropdown>
            <h3>
              <DropdownToggle nav caret>
                <BsFilterLeft />
              </DropdownToggle>
            </h3>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              {likesVideos ? (
                <DropdownItem
                  onClick={() => {
                    dispatch(showAllVideos());
                    setLikesVideos(!likesVideos);
                  }}
                >
                  <MdVideoLibrary className="optionIcon" /> All videos
                </DropdownItem>
              ) : (
                <DropdownItem
                  onClick={() => {
                    dispatch(showLikesVideos());
                    setLikesVideos(!likesVideos);
                  }}
                >
                  <AiFillLike className="optionIcon" /> Likes videos
                </DropdownItem>
              )}

              <DropdownItem onClick={() => dispatch(selectVideosListView())}>
                <RiFileList2Fill className="optionIcon" />
                {selectedIsList ? " View: tiles" : " View: list"}
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem onClick={() => dispatch(deleteAllVideos())}>
                <MdDelete className="optionIcon" /> Delete all
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
