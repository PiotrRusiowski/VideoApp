import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Container } from "reactstrap";
import VideosList from "./components/VideosList/VideosList";
import Navigation from "./components/Navigation/Navigation";
import { showAllVideos } from "./actions";

const App = () => {
  const selectedVideoList = useSelector(({ videosList }) => videosList);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("videosList", JSON.stringify(selectedVideoList));
  }, [selectedVideoList]);
  useEffect(() => {
    dispatch(showAllVideos());
  }, []);

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
