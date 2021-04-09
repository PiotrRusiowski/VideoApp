import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Container } from "reactstrap";
import VideosList from "./components/VideosList/VideosList";
import Navigation from "./components/Navigation/Navigation";
import { showAllVideos } from "./actions";

const App = () => {
  const slelectedAllVideosList = useSelector(
    ({ allVideosList }) => allVideosList
  );
  const slelectedLikesVideosList = useSelector(
    ({ likesVideosList }) => likesVideosList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(
      "allVideosList",
      JSON.stringify(slelectedAllVideosList)
    );
    localStorage.setItem(
      "likesVideosList",
      JSON.stringify(slelectedLikesVideosList)
    );
  }, [slelectedAllVideosList, slelectedLikesVideosList]);

  useEffect(() => {
    dispatch(showAllVideos());
  }, [slelectedAllVideosList]);

  return (
    <div className="App">
      <Navigation />
      <Container>
        <VideosList />
      </Container>
    </div>
  );
};

export default App;
