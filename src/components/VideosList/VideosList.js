import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSingleVideo } from "../../actions";

const VideosList = () => {
  const selectedVideoList = useSelector(({ videosList }) => videosList);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {selectedVideoList.map((video) => (
          <li>
            <h2>{video.title} </h2>
            <button onClick={() => dispatch(deleteSingleVideo(video.id))}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideosList;
