import React from 'react'
import { FancyH2 } from '../elements/fancyHeader'
import {
  getIntervalOfEvent,
  getFullEventTimeCount,
  getCountOfEvent,
} from '../../utils/timeIntervals'
import {
  Timeline,
  Event,
  EventTitle,
  EventTitleStrong,
  EventTime,
  EventTimeMain,
  EventSubtitle,
  EventDescription,
} from '../elements/events'
import styled from 'react-emotion'

const FancyH2Exp = styled(FancyH2)`
  margin-top: 0;
`

export default class ExperienceBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2Exp>
          Experience{' '}
          <EventTimeMain>
            ({getFullEventTimeCount(this.props.experiences)} yrs)
          </EventTimeMain>
        </FancyH2Exp>
        <Timeline>
          <ul>
            {this.props.experiences.map((experience, index) => (
              <li key={index}>
                <Event>
                  <EventTitle>
                    <EventTitleStrong>{experience.title}</EventTitleStrong>{' '}
                    <EventTime>
                      <EventTimeMain>
                        ({getCountOfEvent(experience)})
                      </EventTimeMain>{' '}
                      {getIntervalOfEvent(experience)}
                    </EventTime>
                  </EventTitle>
                  <EventSubtitle>
                    {experience.organizationLink ? (
                      <a
                        href={experience.organizationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience.organization}
                      </a>
                    ) : (
                      experience.organization
                    )}, {experience.location}
                  </EventSubtitle>
                  <EventDescription>
                    {experience.description.map((desc, index) => {
                      return (
                        <p
                          key={index}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      )
                    })}
                    {experience.technologies.length > 0 && (
                      <p>
                        <strong>Technologies</strong>:{' '}
                        {experience.technologies.join(', ')}
                      </p>
                    )}
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
