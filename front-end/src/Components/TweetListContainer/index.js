import React from "react";
import TweetCard from "../TweetCard";
import axios from "axios";

class TweetListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      tweets: []
    }
  }

  getLatestTweets = () => {
    axios.get("http://localhost:3000/tweets").then(response => {
      this.setState({
        tweets: response.data
      })
    }).catch(() => null)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getLatestTweets(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Latest Tweets
        {this.state.tweets.map(tweet => {
          return <TweetCard username={tweet.username} message={tweet.tweet} />;
        })}
      </div>
    );
  }
}

export default TweetListContainer;
