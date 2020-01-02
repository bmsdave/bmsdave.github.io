import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import config from '../../config'
import { Group, GroupsContainer } from '../components/elements/elements'
import { FancyH1, FancyH2 } from '../components/elements/fancyHeader'
import Talk from '../components/talk'
import { groupByYear } from '../utils/timeIntervals'
const TalksList = styled('ul')`
  list-style: none;
`

class Talks extends React.Component {
  render() {
    const talks = this.props.data.allTalksJson.edges.map(edge => edge.node)
    const groupedTalks = groupByYear(talks)
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <FancyH1>Talks</FancyH1>
        <GroupsContainer>
          {groupedTalks.map(group => (
            <Group key={group.label}>
              <FancyH2>{group.label}</FancyH2>
              <TalksList>
                {group.items.map(item => (
                  <li key={item.title}>
                    <Talk talk={item} />
                  </li>
                ))}
              </TalksList>
            </Group>
          ))}
        </GroupsContainer>
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TalksQuery {
    allTalksJson {
      edges {
        node {
          title
          place
          date
          url
          video
          language
        }
      }
    }
  }
`

export default Talks
