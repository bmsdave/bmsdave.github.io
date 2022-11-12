import React from 'react'
import { FancyH1 } from '../elements/fancyHeader'
import { H2, Text } from '../elements/elements'

export default class LeadText extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()
    const experienceInWeb = currentYear - 2014
    const experienceInIT = currentYear - 2009 - 2
    return (
      <div className={this.props.className}>
        <FancyH1>Hi, I{"'"}m Vadim</FancyH1>
        <H2>Software Engineer, based&nbsp;in&nbsp;London.</H2>
        <H2>
          Work at{' '}
          <a href="https://about.meta.com/realitylabs/" target="_blank">
            Meta Reality Labs
          </a>.
        </H2>
        <Text style={{ marginTop: 20 }}>
          {experienceInWeb} years of experience in development and{' '}
          {experienceInIT} years of experience in IT. I actively participated in
          the life of the JavaScript community, but not so long ago I've changed
          direction to VR Interfaces. I organized{' '}
          <a href="https://piterjs.org/" target="_blank">
            PiterJS
          </a>{' '}
          – monthly JavaScript Meetup in Saint Petersburg, contributor as a
          mentor at{' '}
          <a href="https://nodeschool.io/spb/" target="_blank">
            NodeSchool/SPB
          </a>{' '}
          , has been a member of the{' '}
          <a href="https://holyjs.ru/en/" target="_blank">
            HolyJS
          </a>{' '}
          program committee.I sometimes make{' '}
          <a href="https://bmsdave.github.io/talks/" target="_blank">
            talks
          </a>{' '}
          at conferences and contribute a little to{' '}
          <a href="https://github.com/bmsdave" target="_blank">
            open source
          </a>{' '}
          . I like sports (boxing, speedcubing, and chess). I respect and love
          mathematics and everything related to it.
        </Text>
      </div>
    )
  }
}
