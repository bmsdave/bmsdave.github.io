import React from 'react'
import Helmet from 'react-helmet'
import Config from '../../config'
import { FancyH1, FancyPrintH1 } from '../components/elements/fancyHeader'
import {
  classes,
  ContactsFooterBlock,
  ContactsHeaderBlock,
  Download,
  Row,
} from '../components/elements/elements'
import ExperienceBlock from '../components/blocks/experienceBlock'
import EducationBlock from '../components/blocks/educationBlock'
import CoursesBlock from '../components/blocks/coursesBlock'
import AwardsBlock from '../components/blocks/awardsBlock'
import ContributionsBlock from '../components/blocks/contributionsBlock'
import styled from 'react-emotion'
import { H2, Text } from '../components/elements/elements'

const RowResume = styled(Row)`
  line-height: 1.5;
  font-size: 12px;

  > div:first-child {
    position: relative;
    width: 65%;
    padding-right: 32px;
  }

  > div:last-child {
    position: relative;
    width: 35%;
  }
`

class Resume extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()
    const experienceInWeb = currentYear - 2014
    const experienceInIT = currentYear - 2009 - 1

    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(r => r.unregister())
      })
    }

    const awards = this.props.data.allAwardsJson.edges.map(edge => edge.node)
    const contributions = this.props.data.allContributionsJson.edges.map(
      edge => edge.node
    )
    const courses = this.props.data.allCoursesJson.edges.map(edge => edge.node)
    const educations = this.props.data.allEducationJson.edges.map(
      edge => edge.node
    )
    const experiences = this.props.data.allExperienceJson.edges.map(
      edge => edge.node
    )
    return (
      <div className={classes.resume}>
        <Helmet title={Config.siteTitle} />
        <FancyH1>Resume</FancyH1>
        <FancyPrintH1>Vadim Gorbachev</FancyPrintH1>
        <H2 style={{ marginTop: 0 }}>
          Software Engineer, based&nbsp;in&nbsp;London.{' '}
          <a href="https://about.meta.com/realitylabs/" target="_blank">
            @Meta Reality Labs
          </a>
        </H2>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>
          I have {experienceInWeb} years of experience in development and{' '}
          {experienceInIT} years of experience in IT. I actively participated in
          the life of the JavaScript community: I organized{' '}
          <a href="https://piterjs.org/" target="_blank">
            PiterJS
          </a>{' '}
          – monthly JavaScript Meetup in Saint Petersburg, contributed as a
          mentor at{' '}
          <a href="https://nodeschool.io/spb/" target="_blank">
            NodeSchool/SPB
          </a>{' '}
          and was a member of the{' '}
          <a href="https://holyjs.ru/en/" target="_blank">
            HolyJS
          </a>{' '}
          program committee. Not so long ago I changed direction to focus on VR
          Interfaces. I enjoy sharing my knowledge at{' '}
          <a href="https://bmsdave.github.io/talks/" target="_blank">
            conferences
          </a>{' '}
          and contributing to{' '}
          <a href="https://github.com/bmsdave" target="_blank">
            open source
          </a>{' '}
          . When I’m not coding, I like to explore London and walk my dog. I
          respect and love mathematics and everything related to it.
        </Text>

        <RowResume>
          <div>
            <ExperienceBlock experiences={experiences} />
            <EducationBlock educations={educations} />
          </div>
          <div>
            <ContactsHeaderBlock links={Config.userLinks} />
            <ContributionsBlock contributions={contributions} />
            <CoursesBlock courses={courses} />
            <AwardsBlock awards={awards} />
            <ContactsFooterBlock links={Config.userLinks} />
          </div>
        </RowResume>
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ResumeQuery {
    allExperienceJson {
      edges {
        node {
          title
          organization
          organizationLink
          location
          description
          responsibilities
          technologies
          dateStart
          dateEnd
        }
      }
    }
    allEducationJson {
      edges {
        node {
          title
          graduationWork
          organization
          organizationLink
          location
          date
          ranking
          rankingLink
        }
      }
    }
    allContributionsJson {
      edges {
        node {
          title
          description
          organization
          organizationLink
          dateStart
          dateEnd
        }
      }
    }
    allCoursesJson {
      edges {
        node {
          title
          link
          organization
          organizationLink
          date
        }
      }
    }
    allAwardsJson {
      edges {
        node {
          title
          date
          location
        }
      }
    }
  }
`

export default Resume
