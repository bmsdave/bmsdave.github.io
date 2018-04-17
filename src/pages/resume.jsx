import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import Config from '../../config'
import { FancyH1 } from '../components/FancyHeader/FancyHeader'
import ExperienceBlock from '../components/ExperienceBlock/ExperienceBlock'
import EducationBlock from '../components/EducationBlock/EducationBlock'
import SkillsBlock from '../components/SkillsBlock/SkillsBlock'
import CoursesBlock from '../components/CoursesBlock/CoursesBlock'
import AwardsBlock from '../components/AwardsBlock/AwardsBlock'

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }

  > div:first-child {
    position: relative;
    margin-right: 20px;
    width: 70%;
  }

  > div:last-child {
    position: relative;
    width: 30%;
  }

  ${TABLET_MEDIA_QUERY} {
    > div:first-child {
      width: 100%;
    }

    > div:last-child {
      width: 90%;
    }
  }
`

class Resume extends React.Component {
  render() {
    const awards = this.props.data.allAwardsJson.edges.map(edge => edge.node)
    const courses = this.props.data.allCoursesJson.edges.map(edge => edge.node)
    const languages = this.props.data.allLanguagesJson.edges.map(
      edge => edge.node
    )
    const personalQualities = this.props.data.allPersonalQualitiesJson.edges.map(
      edge => edge.node
    )
    const sysadminSkills = this.props.data.allSysadminSkillsJson.edges.map(
      edge => edge.node
    )
    const developmentSkills = this.props.data.allDevelopmentSkillsJson.edges.map(
      edge => edge.node
    )
    return (
      <div>
        <Helmet title={Config.siteTitle} />
        <FancyH1>Resume</FancyH1>
        <Row style={{ marginTop: 50 }}>
          <div>
            <ExperienceBlock />
            <EducationBlock />
          </div>
          <div>
            <SkillsBlock
              languages={languages}
              personalQualities={personalQualities}
              sysadminSkills={sysadminSkills}
              developmentSkills={developmentSkills}
            />
            <br />
            <br />
            <CoursesBlock courses={courses} />
            <br />
            <br />
            <AwardsBlock awards={awards} />
          </div>
        </Row>
        <a href="../assets/vgorbachev_cv.docx" alt="download word">
          download word
        </a>
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ResumeQuery {
    allPersonalQualitiesJson {
      edges {
        node {
          label
          value
        }
      }
    }
    allSysadminSkillsJson {
      edges {
        node {
          label
          value
        }
      }
    }
    allLanguagesJson {
      edges {
        node {
          label
          value
        }
      }
    }
    allDevelopmentSkillsJson {
      edges {
        node {
          label
          value
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
