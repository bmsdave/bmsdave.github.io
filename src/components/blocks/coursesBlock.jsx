import React from 'react'
import { FancyH2 } from '../elements/fancyHeader'
import { Event, EventTitle, EventTime } from '../elements/events'

export default class CoursesBlock extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FancyH2>Courses</FancyH2>
        {this.props.courses.map(course => (
          <Event key={course.link}>
            <EventTitle>
              <EventTime>{'2015'}</EventTime>
              <a href={course.link} target="_blank">
                {course.title}
              </a>
            </EventTitle>
          </Event>
        ))}
      </React.Fragment>
    )
  }
}
