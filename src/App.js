import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Container } from "reactstrap";
import VideosList from "./components/VideosList/VideosList";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
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
