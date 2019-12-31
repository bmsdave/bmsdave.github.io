import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import Config from '../../config'
import { css } from 'emotion'
import { FancyH1, FancyPrintH1 } from '../components/elements/fancyHeader'
import ExperienceBlock from '../components/blocks/experienceBlock'
import EducationBlock from '../components/blocks/educationBlock'
import CoursesBlock from '../components/blocks/coursesBlock'
import AwardsBlock from '../components/blocks/awardsBlock'
import ContributionsBlock from '../components/blocks/contributionsBlock'
import ContactsBlock from '../components/blocks/contactsBlock'

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }

  > div:first-child {
    position: relative;
    width: 60%;
  }

  > div:last-child {
    position: relative;
    width: 40%;
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

const Download = styled('a')`
  @media print {
    display: none;
  }
`

const ContactsHeaderBlock = styled(ContactsBlock)`
  display: block;
  ${TABLET_MEDIA_QUERY} {
    display: none;
  }
`

const ContactsFooterBlock = styled(ContactsBlock)`
  display: none;
  ${TABLET_MEDIA_QUERY} {
    display: block;
  }
`

const classes = {
  leadContacts: css`
    min-width: 250px;

    ${TABLET_MEDIA_QUERY} {
      width: 100%;
    }
  `,
  leadText: css`
    flex-grow: 0;

    ${TABLET_MEDIA_QUERY} {
    }
  `,
}

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
        <Row>
          <div>
            <FancyPrintH1>Vadim Gorbachev</FancyPrintH1>
            <ExperienceBlock experiences={experiences} />
            <EducationBlock educations={educations} />
          </div>
          <div>
            {/* <SkillsBlock
              languages={languages}
              personalQualities={personalQualities}
              sysadminSkills={sysadminSkills}
              developmentSkills={developmentSkills}
            /> */}
            <ContactsHeaderBlock
              links={Config.userLinks}
              className={classes.leadContacts}
            />
            <ContributionsBlock contributions={contributions} />
            <CoursesBlock courses={courses} />
            <AwardsBlock awards={awards} />
            <ContactsFooterBlock
              links={Config.userLinks}
              className={classes.leadContacts}
            />
          </div>
        </Row>
        <Download
          href="../assets/cv/vgorbachev_cv.docx"
          alt="*.docx"
          target="_blank"
        >
          *.docx
        </Download>
        <Download
          href="../assets/cv/vgorbachev_cv.pdf"
          alt="*.pdf"
          target="_blank"
        >
          *.pdf
        </Download>
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
          organization
          organizationLink
          location
          date
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
    allContributionsJson {
      edges {
        node {
          title
          organization
          organizationLink
          date
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
