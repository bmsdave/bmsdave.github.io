import React from 'react'
import { FancyH2 } from '../elements/fancyHeader'
import { Event, EventTitle, EventSubtitle } from '../elements/events'

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
