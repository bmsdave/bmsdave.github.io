import React from 'react'
import { FancyH2 } from '../elements/fancyHeader'
import { Event, EventTitle, EventSubtitle } from '../elements/events'

export default class AwardsBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Awards</FancyH2>
        <ul style={{ listStyle: 'none' }}>
          {this.props.awards.map(award => (
            <li key={award.title}>
              <Event>
                <EventTitle>{award.title}</EventTitle>
                <EventSubtitle>
                  {award.date}, {award.location}
                </EventSubtitle>
              </Event>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}
