import React from 'react'
import styled from 'react-emotion'
import { FancyH2 } from '../FancyHeader/FancyHeader'
import monokaiColors from '../../../monokaiColors'

const Timeline = styled('section')`
  position: relative;
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
    max-width: 730px;
    margin-left: 0px;
    padding-left: 0;
    padding-right: 10px;
    padding-bottom: 4px;
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

const EventTitle = styled('div')`
  display: inline-block;
  font-size: 1.1em;
  font-weight: bold;

  :before {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    left: -10px;
    top: 10px;
    background-color: #b0b0b0;
    opacity: 0.6;
    z-index: -2;
  }
`
const EventTime = styled('div')`
  display: inline-block;
  font-size: 0.9em;
  color: #999;
  padding-left: 10px;
  line-height: 1.4em;
`

const EventSubtitle = styled('div')`
  font-size: 0.9em;
  color: #999;
  padding-left: 10px;
  line-height: 1.5em;
`

const EventDescription = styled('div')`
  margin-top: 2px;
  margin-left: 10px;
  font-size: 0.9em;
  line-height: 1.3em;
  font-family: 'Open Sans', 'Helvetica Neue', serif;
`

export default class EducationBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Education</FancyH2>
        <Timeline>
          <ul>
            <li>
              <Event>
                <EventTitle>
                  Bachelor's degree in CS, System analysis and management
                </EventTitle>
                <EventTime>2011 - 2016</EventTime>
                <EventSubtitle>
                  <a
                    href="http://english.spbstu.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Peter the Great St.Petersburg Polytechnic University
                  </a>, Saint Petersburg, Russia
                </EventSubtitle>
                <EventDescription />
              </Event>
            </li>
            <li>
              <Event>
                <EventTitle>
                  Associate's degree, Math and Computer Science
                </EventTitle>
                <EventTime>2005 - 2007</EventTime>
                <EventSubtitle>
                  <a
                    href="http://en.bru.by"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Belarusian-Russian University
                  </a>, Mogilev, Belarus
                </EventSubtitle>
                <EventDescription />
              </Event>
            </li>
          </ul>
        </Timeline>
      </React.Fragment>
    )
  }
}
