import React from 'react'
import { FancyH2 } from '../elements/fancyHeader'
import { Event, EventTitle, EventSubtitle, EventTitleGray, EventTime, EventTimeMain, EventDescription } from '../elements/events'
import { getCountOfEvent, getIntervalOfEvent } from '../../utils/timeIntervals'

export default class ContributionsBlock extends React.Component {
  render() {
    console.log(this.props.contributions);
    return (
      <React.Fragment>
        <FancyH2>Community Contributions</FancyH2>
        <ul style={{listStyle:'none'}}>
          {this.props.contributions.map(contribution => (
            <li key={contribution.organizationLink}>
              <Event>
                <EventTitle>
                  {contribution.title}{' '}
                  <a href={contribution.organizationLink} target="_blank">
                    {contribution.organization}
                  </a>{' '}
                </EventTitle>
                <EventSubtitle>
                  <EventTime>
                    <EventTimeMain>
                      ({getCountOfEvent(contribution)})
                    </EventTimeMain>{' '}
                    {getIntervalOfEvent(contribution)}
                  </EventTime>
                </EventSubtitle>
                <EventDescription>
                  {contribution.description.map((desc, index) => {
                    return <p key={index}>{desc}</p>
                  })}
                </EventDescription>
              </Event>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
