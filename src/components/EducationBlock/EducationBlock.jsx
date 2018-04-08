import React from 'react'
import styled from 'react-emotion'
import {FancyH2} from '../FancyHeader/FancyHeader'

const Timeline = styled('section')`
  position: relative;
  margin-top: 30px;
  min-height: 100px;
  width: 100%;
  font-size: 0.9em;
  font-family: 'Fira Sans', 'Helvetica Neue', serif;

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style-type: none;
    position: relative;
    margin: 0;
    max-width: 330px;
    margin-left: 110px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
  }

  ul li::after {
    content: '';
    position: absolute;
    left: -60px;
    top: 1px;
    transform: translateX(-50%);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: white;
  }
`

const Event = styled('div')`
  position: relative;
  bottom: -2px;
  padding: 0;
  margin: 0;
`

const EventTime = styled('div')`
  height: 30px;
  width: 120px;
  position: absolute;
  left: -120px;
  text-align: center;
  top: 1px;
  z-index: 99;
  font-size: 0.85em;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;

  time {
    position: relative;
  }
  time:before {
    content: '';
    width: 100%;
    height: 7px;
    position: absolute;
    left: -5px;
    bottom: 0px;
    background-color: #89bcfe;
    opacity: 0.6;
    z-index: -2;
  }
`

const EventTitle = styled('div')`
  font-size: 1.1em;
`

const MoveToEvent = styled('div')`
  font-size: 0.9em;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  color: #888;
  display: inline-block;
`

const EventSubtitle = styled('div')`
  font-size: 0.9em;
  color: #999;
  padding-left: 10px;
  line-height: 1.5em;
`

const EventDescription = styled('div')`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 0.9em;
  line-height: 1.3em;
  font-family: 'Open Sans', 'Helvetica Neue', serif;
`

const Line = styled('div')`
  position: absolute;
  left: 50px;
  top: -40px;
  height: 100%;
  z-index: -2;
  width: 1px;
  border-left: 2px solid #000;
`

export default class EducationBlock extends React.Component {
    render() {
        return (
            <React.Fragment>
                <FancyH2>Education</FancyH2>
                <Timeline>
                    <Line/>
                    <ul>
                        <li>
                            <EventTime>
                                <time>2011 - 2016</time>
                            </EventTime>
                            <Event>
                                <EventTitle>Bachelor's degree, System analysis and management</EventTitle>
                                <EventSubtitle>
                                    <a
                                        href="http://english.spbstu.ru/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Peter the Great St.Petersburg Polytechnic University
                                    </a>, Saint Petersburg
                                </EventSubtitle>
                                <EventDescription>
                                </EventDescription>
                            </Event>
                        </li>
                        <li>
                            <EventTime>
                                <time>2005 - 2007</time>
                            </EventTime>
                            <Event>
                                <EventTitle>Associate's degree, Mathematics and Informatics</EventTitle>
                                <EventSubtitle>
                                    <a
                                        href="http://en.bru.by"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Belarusian-Russian University
                                    </a>, Mogilev, Belarus
                                </EventSubtitle>
                                <EventDescription>
                                </EventDescription>
                            </Event>
                        </li>
                    </ul>
                </Timeline>
            </React.Fragment>
        )
    }
}
