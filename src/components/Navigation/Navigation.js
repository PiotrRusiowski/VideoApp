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
  TiArrowSortedUp,
  TiArrowSortedDown,
} from "react-icons/all";

import {
  Navbar,
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
  sortVideos,
} from "../../actions";
import GetVideoForm from "../GetVideoForm/GetVideoForm";
import { sortTypes } from "../../data/sortTypes";

const Navigation = () => {
  const [likesVideos, setLikesVideos] = useState(false);
  const [sortDescending, setSortDescending] = useState(false);
  const dispatch = useDispatch();

  const selectedIsList = useSelector(({ isList }) => isList);

  return (
    <Navbar dark expand="md" className="videoNavbar">
      <Container>
        <div className="logoWrapper">
          <NavbarBrand className="text-info" href="/">
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
                {selectedIsList ? " View tiles" : " View list"}
              </DropdownItem>

              {sortDescending ? (
                <DropdownItem
                  onClick={() => {
                    dispatch(sortVideos(sortTypes.descending));
                    setSortDescending(!sortDescending);
                  }}
                >
                  <TiArrowSortedDown className="sortIcon" />
                  Sort descending
                </DropdownItem>
              ) : (
                <DropdownItem
                  onClick={() => {
                    dispatch(sortVideos(sortTypes.ascending));
                    setSortDescending(!sortDescending);
                  }}
                >
                  <TiArrowSortedUp className="sortIcon" />
                  Sort ascending
                </DropdownItem>
              )}

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
