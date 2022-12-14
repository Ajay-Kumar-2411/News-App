import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div>
            {/* <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            /> */}
            {/* Top Loading Bar */}
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pageSize={6} apiKey={this.apiKey} category='general' country='in' />}></Route>
              <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={6} apiKey={this.apiKey} category='business' country='in' />}></Route>
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={6} apiKey={this.apiKey} category='entertainment' country='in' />}></Route>
              <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={6} apiKey={this.apiKey} category='general' country='in' />}></Route>
              <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={6} apiKey={this.apiKey} category='health' country='in' />}></Route>
              <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={6} apiKey={this.apiKey} category='science' country='in' />}></Route>
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={6} apiKey={this.apiKey} category='sports' country='in' />}></Route>
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={6} apiKey={this.apiKey} category='technology' country='in' />}></Route>
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}



