import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { BsFilterLeft } from "react-icons/bs";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
import { deleteAllVideos, showAllVideos, showLikesVideos } from "../../actions";
import GetVideoForm from "../GetVideoForm/GetVideoForm";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [likesVideos, setLikesVideos] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
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
                      dispatch(showLikesVideos());
                      setLikesVideos(!likesVideos);
                    }}
                  >
                    Show likes videos
                  </DropdownItem>
                ) : (
                  <DropdownItem
                    onClick={() => {
                      dispatch(showAllVideos());
                      setLikesVideos(!likesVideos);
                    }}
                  >
                    show all videos
                  </DropdownItem>
                )}

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
