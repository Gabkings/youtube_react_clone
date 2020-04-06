import React, { Component } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import SearchBar from "./components/search";
import VideoDetail from "./components/video_details";
import YTsearch from "youtube-api-search";
import VideoList from "./components/video_list";
const key = "AIzaSyCgy-ypCjGXr3aHNpOMTtuK_3KzjU7cbzc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };

    this.videoSearch("surfbaords");
  }

  videoSearch(term) {
    return YTsearch({ key: key, term: "surfbaords" }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
