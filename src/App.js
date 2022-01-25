/* eslint-disable */
import React, { useState, Component } from 'react';
import Gnb from './components/Gnb.js';
import Subject from './components/Subject.js';
import Content from './components/Contents.js';
import Index from './index.css';
import Header from './components/Header';
import DayList from './components/DayList'
import Day from './components/Day'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <DayList />
        <Day />
      </div>
    );
  }
}
export default App;