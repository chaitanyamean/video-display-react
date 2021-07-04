import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { Tabs, Tab } from 'react-bootstrap';
import React from 'react';
import {day1} from './Data/day1';
import {day2} from './Data/day2';
import {day3} from './Data/day3';



function App() {

  return (
    <div className="App">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Day 1">
          <VideoPlayer videos={day1} />
        </Tab>
        <Tab eventKey="profile" title="Day 2">
          <VideoPlayer videos={day2}/>
        </Tab>
        <Tab eventKey="contact" title="Day 3">
          <VideoPlayer videos={day3}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
