import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {dayOne} from '../../SevenDays/one';
import {day2} from '../../Data/day2';
import {day3} from '../../Data/day3';

const SevenDays = () => {
    console.log('333')
    return (
        <div>
             <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Day 1(leg)">
                    <VideoPlayer videos={dayOne} />
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
};

export default SevenDays;