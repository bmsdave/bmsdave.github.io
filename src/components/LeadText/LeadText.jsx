import React, { Fragment } from 'react'
import styled from 'react-emotion'
import { FancyH1 } from '../FancyHeader/FancyHeader'

const H2 = styled('h2')`
  margin: 0;
  padding: 0;
`

const Text = styled('p')`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.8em;

  strong {
    margin-left: 2px;
  }
`

export default class LeadText extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()
    const experienceInWeb = currentYear - 2014
    const experienceInIT = currentYear - 2009 - 2
    return (
      <div className={this.props.className}>
        <FancyH1>Hi, I{"'"}m Vadim</FancyH1>
        <H2>Software Engineer, based&nbsp;in&nbsp;Saint Petersburg.</H2>
        <H2>
          Work at{' '}
          <a href="http://openwaygroup.com/" target="_blank">
            OpenWay
          </a>.
        </H2>
        <Text style={{ marginTop: 20 }}>
          {experienceInWeb} years of professional experience in web development
          and {experienceInIT} years of experience in IT.<br />
          I focus on the configuration flexibility, maintainability,
          performance, and security of product.<br />
          I actively participate in the life of the Javascript community; I am
          an organizer of{' '}
          <a href="https://piterjs.org/" target="_blank">
            PiterJS
          </a>, mentor{' '}
          <a href="https://nodeschool.io/spb/" target="_blank">
            NodeSchool/SPB
          </a>{' '}
          and a member of the{' '}
          <a href="https://holyjs.ru" target="_blank">
            HolyJS
          </a>{' '}
          program Committee. Previously I mentored in{' '}
          <a href="https://htmlacademy.ru/" target="_blank">
            HTML Academy
          </a>{' '}
          and lectured on JavaScript and node.JS in{' '}
          <a href="https://netology.ru/" target="_blank">
            Netology
          </a>.
        </Text>
      </div>
    )
  }
}
