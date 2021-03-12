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
        <H2>Senior Software Engineer, based&nbsp;in&nbsp;Saint Petersburg.</H2>
        <H2>
          Work at{' '}
          <a href="https://vk.com/about" target="_blank">
            VK
          </a>.
        </H2>
        <Text style={{ marginTop: 20 }}>
          {experienceInWeb} years of experience in web development and{' '}
          {experienceInIT} years of experience in IT. I focus on the
          configuration flexibility, maintainability, performance, and product
          security. I actively participate in the life of the JavaScript
          community. I organize{' '}
          <a href="https://piterjs.org/" target="_blank">
            PiterJS
          </a>{' '}
          – monthly JavaScript Meetup in Saint Petersburg, contributor as a
          mentor at{' '}
          <a href="https://nodeschool.io/spb/" target="_blank">
            NodeSchool/SPB
          </a>{' '}
          and has been a member of the{' '}
          <a href="https://holyjs.ru/en/" target="_blank">
            HolyJS
          </a>{' '}
          program committee. Previously I served as a mentor at{' '}
          <a href="https://htmlacademy.ru/" target="_blank">
            HTML Academy
          </a>{' '}
          and lectured on JavaScript and node.JS at the online university of{' '}
          <a href="https://netology.ru/" target="_blank">
            Netology
          </a>. I like sports (boxing, speedcubing, and chess). I respect and
          love mathematics and everything related to it.
        </Text>
      </div>
    )
  }
}
