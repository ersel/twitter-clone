import React from 'react';
import logo from './logo.svg';
import './App.css';
import TweetListContainer from './Components/TweetListContainer';
import ComposeTweet from './Components/ComposeTweet';

function App() {
  return (
    <div className="App">
        <ComposeTweet/>
        <br/>
        <br/>
        <TweetListContainer/>
    </div>
  );
}

export default App;
