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
  color: #666;
  padding-left: 10px;
  line-height: 1.3em;
`

export default class ContributionsBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Community Contributions</FancyH2>
        {this.props.contributions.map(contribution => (
          <Event key={contribution.organizationLink}>
            <EventTitle>
              {contribution.title}{' '}
              <a href={contribution.organizationLink} target="_blank">
                {contribution.organization}
              </a>
            </EventTitle>
            <EventSubtitle>{contribution.date}</EventSubtitle>
          </Event>
        ))}
      </React.Fragment>
    )
  }
}
