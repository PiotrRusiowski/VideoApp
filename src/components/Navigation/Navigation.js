import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";
import { BsFilterLeft } from "react-icons/bs";
import { BiPlayCircle } from "react-icons/bi";

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
    <Navbar dark expand="md" style={{ padding: "20px" }}>
      <Container>
        <NavbarBrand className="text-danger navLogoWrapper" href="/">
          <div className="navLogo">
            <BiPlayCircle />
          </div>
          VGetter
        </NavbarBrand>
        <GetVideoForm />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="" navbar>
            <UncontrolledDropdown nav inNavbar>
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
                    show all videos
                  </DropdownItem>
                ) : (
                  <DropdownItem
                    onClick={() => {
                      dispatch(showLikesVideos());
                      setLikesVideos(!likesVideos);
                    }}
                  >
                    Show likes videos
                  </DropdownItem>
                )}

                <DropdownItem onClick={() => dispatch(selectVideosListView())}>
                  Slect view:
                  {selectedIsList ? " tiles" : " list"}
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem onClick={() => dispatch(deleteAllVideos())}>
                  Delete all videos
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
