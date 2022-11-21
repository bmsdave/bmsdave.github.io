import React from 'react'
import { FancyH2 } from '../elements/fancyHeader'
import {
  Timeline,
  Event,
  EventTitle,
  EventTime,
  EventSubtitle,
  EventDescription,
  EventTitleStrong,
} from '../elements/events'

export default class EducationBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Education</FancyH2>
        <Timeline>
          <ul>
            {this.props.educations.map(education => (
              <li key={education.organizationLink}>
                <Event>
                  <EventTitle>
                    <EventTitleStrong>{education.title}</EventTitleStrong>{' '}
                    <EventTime>{education.date}</EventTime>
                  </EventTitle>
                  <EventSubtitle>
                    <a
                      href={education.organizationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {education.organization}
                    </a>,{' '}
                    <a
                      href={education.rankingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {education.ranking}
                    </a>, {education.location}
                  </EventSubtitle>
                  <EventDescription>
                    {education.graduationWork && <b>Graduation work: </b>}{' '}
                    {education.graduationWork}
                  </EventDescription>
                </Event>
              </li>
            ))}
          </ul>
        </Timeline>
      </React.Fragment>
    )
  }
}
