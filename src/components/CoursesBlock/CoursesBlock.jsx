import React from 'react'
import styled from 'react-emotion'
import { FancyH2 } from '../FancyHeader/FancyHeader'

const Event = styled('div')`
  position: relative;
  bottom: -2px;
  padding: 0;
  margin: 0;
  padding-bottom: 14px;
`

const EventTitle = styled('div')`
  font-size: 0.9em;
`

const EventSubtitle = styled('div')`
  font-size: 0.6em;
  color: #999;
  padding-left: 10px;
  line-height: 0.6em;
`

export default class CoursesBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Courses</FancyH2>
        {this.props.courses.map(course => (
          <Event key={course.link}>
            <EventTitle>{course.title}</EventTitle>
            <EventSubtitle>
              <a href={course.link} target="_blank">
                Certificate
              </a>,{' '}
              <a href={course.organizationLink} target="_blank">
                {course.organization}
              </a>, {course.date}
            </EventSubtitle>
          </Event>
        ))}
      </React.Fragment>
    )
  }
}
