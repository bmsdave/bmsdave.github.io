import React from 'react'
import styled from 'react-emotion'
import { FancyH2 } from '../FancyHeader/FancyHeader'

const Event = styled('div')`
  position: relative;
  bottom: -2px;
  padding: 0;
  margin: 0;
  padding-bottom: 4px;
`

const EventTitle = styled('div')`
  font-size: 0.9em;
  line-height: 1.5em;
`

const EventSubtitle = styled('div')`
  font-size: 0.6em;
  color: #999;
  padding-left: 10px;
  line-height: 1.3em;
`

export default class VolunteerBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Volunteer Experience</FancyH2>
        {this.props.volunteer.map(volunteer => (
          <Event key={volunteer.organizationLink}>
            <EventTitle>
              {volunteer.title}{' '}
              <a href={volunteer.organizationLink} target="_blank">
                {volunteer.organization}
              </a>
            </EventTitle>
            <EventSubtitle>{volunteer.date}</EventSubtitle>
          </Event>
        ))}
      </React.Fragment>
    )
  }
}
