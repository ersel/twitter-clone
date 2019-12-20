import React from "react";

const TweetCard = ({ username, message }) => {
  return (
    <div>
      {message} by {username}
    </div>
  );
};

export default TweetCard;
