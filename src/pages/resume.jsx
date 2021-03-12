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

const RowResume = styled(Row)`
  line-height: 1.2;
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
        <RowResume>
          <div>
            <FancyPrintH1>Vadim Gorbachev</FancyPrintH1>
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
