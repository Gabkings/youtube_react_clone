import React from "react";
import VideoListItem from "./video_list_item";
const VideoList = (props) => {
  const VItem = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    );
  });
  return <ul className="col-md-4 list-group">{VItem}</ul>;
};

export default VideoList;
