import React from "react";
import axios from "axios";

class ComposeTweet extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "@mcrcodes",
      tweet: "Share your insight with the world",
      apiCallSuccesful: true
    };
  }

  // THIS IS A METHOD
  updateUserName = eventObj => {
    this.setState({
      username: eventObj.target.value
    });
  };

  updateTweet = eventObj => {
    this.setState({
      tweet: eventObj.target.value
    });
  };

  sendTweetAction = () => {
    axios
      .post("http://localhost:3000/tweet", {
        username: this.state.username,
        tweet: this.state.tweet
      })
      .then(() => {
        this.setState({
          apiCallSuccesful: true
        });
      })
      .catch(err => {
        this.setState({
          apiCallSuccesful: false
        });
      });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        username:{" "}
        <input
          value={this.state.username}
          onChange={this.updateUserName}
        ></input>
        <br />
        <br />
        <textarea
          value={this.state.tweet}
          onChange={this.updateTweet}
        ></textarea>
        <br />
        <br />
        <button onClick={this.sendTweetAction}>Tweet Now!</button>
        <br/>
        <br/>
        {this.state.apiCallSuccesful === false && (
          <span>Sorry, we failed to save your tweet. Please try again.</span>
        )}
      </div>
    );
  }
}

export default ComposeTweet;
