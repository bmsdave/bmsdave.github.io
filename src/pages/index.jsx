import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'emotion'
import styled from 'react-emotion'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import LeadText from '../components/LeadText/LeadText'
import LeadContacts from '../components/LeadContacts/LeadContacts'
import Config from '../../config'
import Talk from '../components/Talk'

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`

const TalksList = styled('div')`
  font-size: 0.9em;

  min-width: 50%;
  margin-top: 40px;

  h3 {
    margin-top: 0;
    margin-bottom: 20px;

    a {
      margin-left: 10px;
      font-size: 0.6em;
      vertical-align: middle;
      font-family: 'Open Sans', 'Helvetica Neue', serif;
    }
  }

  ul {
    list-style: none;
    margin: 0;
  }

  ul li {
    display: block;
  }

  li:last-child {
    margin: 0;
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
    margin-right: 60px;

    ${TABLET_MEDIA_QUERY} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `,
}

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lastfm: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    const fullUrl = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bmsdave&api_key=e07781fdb72b940ecccaa4e84182695b&format=json&limit=1`

    const lastfmPromise = fetch(fullUrl)
      .then(response => response.json().then(json => ({ json, response })))
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }
        const lastfm = json.recenttracks.track[0].name

        this.setState({ lastfm: lastfm, isLoading: false })

        console.log('Last.fm', json, response)

        return true
      })
  }

  render() {
    const lastfm = this.state.lastfm
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
              Latest Posts {lastfm}
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
