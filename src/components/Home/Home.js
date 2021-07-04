import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {day1} from '../../Data/day1';
import {day2} from '../../Data/day2';
import {day3} from '../../Data/day3';

const Home = () => {
    return (
        <div>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Day 1(leg)">
                    <VideoPlayer videos={day1} />
                </Tab>
                <Tab eventKey="profile" title="Day 2(back)">
                    <VideoPlayer videos={day2} />
                </Tab>
                <Tab eventKey="contact" title="Day 3(chest)">
                    <VideoPlayer videos={day3} />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Home;