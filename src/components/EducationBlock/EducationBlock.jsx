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
  color: #666;
  padding-left: 10px;
  line-height: 1.4em;
`

const EventSubtitle = styled('div')`
  font-size: 0.9em;
  color: #666;
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
            {this.props.educations.map(education => (
              <li>
                <Event key={education.organizationLink}>
                  <EventTitle>{education.title}</EventTitle>
                  <EventTime>{education.date}</EventTime>
                  <EventSubtitle>
                    <a
                      href={education.organizationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {education.organization}
                    </a>, {education.location}
                  </EventSubtitle>
                  <EventDescription />
                </Event>
              </li>
            ))}
          </ul>
        </Timeline>
      </React.Fragment>
    )
  }
}
