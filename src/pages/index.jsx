import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import LeadText from '../components/leadText/leadText'
import LeadContacts from '../components/leadContacts/leadContacts'
import Config from '../../config'
import Talk from '../components/talk'
import { classes, Row, TalksList } from '../components/elements/elements'

class Index extends React.Component {
  render() {
    const talks = this.props.data.allTalksJson.edges.map(edge => edge.node)
    const posts = this.props.data.allMarkdownRemark.edges
      .map(edge => edge.node)
      .map(node => ({
        title: node.frontmatter.title,
        slug: node.fields.slug,
      }))
    return (
      <div>
        <Helmet title={Config.siteTitle} />
        <Row justifyContent="space-between" style={{ marginBottom: 0 }}>
          <LeadText className={classes.leadText} />
          <LeadContacts
            links={Config.userLinks}
            className={classes.leadContacts}
          />
        </Row>
        <Row justifyContent="flex-start">
          <TalksList>
            <h3>
              Latest Posts
              <Link to="/blog">see all</Link>
            </h3>
            <ul>
              {posts.map(post => (
                <li key={post.slug}>
                  <Link to={post.slug}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </TalksList>
          <TalksList>
            <h3>
              Latest Talks
              <Link to="/talks">see all</Link>
            </h3>
            <ul>
              {talks.map(talk => (
                <li key={talk.title}>
                  <Talk talk={talk} />
                </li>
              ))}
            </ul>
          </TalksList>
        </Row>
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    allTalksJson(limit: 3) {
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

export default Index
