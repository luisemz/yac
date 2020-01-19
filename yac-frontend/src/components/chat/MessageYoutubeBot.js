import React, { Component } from "react";

class MessageYoutubeBot extends Component {
  style = {
    margin: "5px",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "#ccc"
  };

  state = {
    video: {}
  };

  componentDidMount() {
    this.findVideo(this.props.search);
  }

  findVideo = search => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=1&key=AIzaSyAGt--WDyKmxyVakgLYD78roJ7K0qkVN04`
    )
      .then(async response => {
        if (response.status === 200) {
          let res = await response.json();
          this.setState({ video: res.items[0] });
        }
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <div style={this.style}>
        {this.state.video.id ? (
          <>
            {this.state.video.snippet.title}
            <br></br>
            <iframe
              src={`https://www.youtube.com/embed/${this.state.video.id.videoId}`}
              frameBorder="1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="100%"
            ></iframe>
          </>
        ) : (
          <>Video not found.</>
        )}
      </div>
    );
  }
}

export default MessageYoutubeBot;
