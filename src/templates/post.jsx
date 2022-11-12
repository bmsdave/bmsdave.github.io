import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import Image from 'gatsby-image'
import {
  DEFAULT_MEDIA_QUERY,
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
import PostTags from '../components/postTags/postTags'
import SocialLinks from '../components/socialLinks/socialLinks'
import SEO from '../components/SEO/SEO'
import { FancyH1 } from '../components/elements/fancyHeader'
import config from '../../config'
import './code-highlight.css'
import './post.css'
import TableOfContents from '../components/tableOfContent/tableOfContent'
import ScrollToTop from '../components/scrollToTop/scrollToTop'
import monokaiColors from '../../monokaiColors'

const HiddenOnTablet = styled('div')`
  ${TABLET_MEDIA_QUERY} {
    display: none;
  }
`

const PostContainer = styled('div')`
  max-width: 660px;
  margin: 0 auto;

  .breakout {
    margin-left: -100px;
    margin-right: -100px;
  }

  .highlight {
    background-color: rgba(137, 188, 254, 0.3);

    code {
      font-size: 0.85em;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  li ul,
  li ol {
    margin-top: 0;
  }

  ul {
    margin-left: 0;
    padding: 0;
    list-style: none;
    padding-left: 20px;
    list-style-image: url(/images/bullet.svg);

    li {
      padding-left: 10px;
      margin-bottom: 5px;
    }
  }

  ol {
    margin-left: 0;
    padding: 0;
    list-style-type: none;

    li {
      position: relative;
      counter-increment: step-counter;
      padding-left: 5px;
      padding-top: 5px;
      margin-bottom: 5px;
      margin-left: 25px;

      &:before {
        position: absolute;
        left: -25px;
        top: 5px;
        content: counter(step-counter);
        margin-right: 5px;
        font-size: 0.8em;
        background-color: rgba(137, 188, 254, 0.8);
        color: white;
        font-weight: bold;
        height: 20px;
        text-align: center;
        line-height: 20px;
        width: 20px;
        border-radius: 3px;
      }
    }
  }

  h2 {
    position: relative;
    display: inline-block;

    :before {
      content: '';
      width: 90%;
      height: 15px;
      position: absolute;
      left: -10px;
      bottom: -5px;
      background-color: ${monokaiColors.colors['list.focusBackground']};
      opacity: 0.6;
      z-index: -2;
    }
  }

  h3 {
    margin-top: 3rem;
  }

  h4,
  h5,
  h6 {
    margin-top: 2rem;
  }

  p {
    margin: 16px 0;
  }

  figure {
    figcaption {
      text-align: center;
      font-size: 1em;
      font-style: italic;
      color: #666;
      padding: 0.75em 2em 0.75em 0;
    }
  }

  blockquote {
    margin-left: 0;
  }

  twitterwidget {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px !important;
  }

  ${DEFAULT_MEDIA_QUERY} {
    .breakout {
      margin-left: 0;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 700px) {
    margin: 0 10px;
  }
`

const MetaRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  & > * {
    margin-bottom: 10px;
  }

  time {
    color: rgba(0, 0, 0, 0.54);
  }

  span:after {
    content: '\\00B7';
    color: rgba(0, 0, 0, 0.54);
  }

  span {
    padding-left: 10px;
    padding-right: 10px;
  }

  ${MOBILE_MEDIA_QUERY} {
    flex-direction: column;
  }
`

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter
    const timeToRead = postNode.timeToRead
    const headings = (postNode.headings || []).filter(
      heading => heading.depth === 2
    )
    const showCoverInPost = postNode.fields.showCoverInPost
    const hasTableOfContents = headings.length > 2
    const tableOfContents = postNode.tableOfContents
    if (!post.id) {
      post.id = slug
    }
    return (
      <React.Fragment>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <main>
          <FancyH1 style={{ marginBottom: 20 }}>{post.title}</FancyH1>
          <PostContainer>
            <MetaRow>
              <PostTags tags={post.tags} />
              <div>
                <time>{post.date}</time>
                <span />
                <time>{timeToRead} min read</time>
              </div>
            </MetaRow>
          </PostContainer>
          <hr />
          <PostContainer>
            {showCoverInPost &&
              post.cover && (
                <div
                  style={{
                    marginBottom: 30,
                  }}
                />
              )}
            {hasTableOfContents && (
              <TableOfContents tableOfContents={tableOfContents} />
            )}
            <article dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <SocialLinks postPath={slug} postNode={postNode} />
            <div style={{ textAlign: 'center' }}>
              <PostTags tags={post.tags} />
            </div>
          </PostContainer>
        </main>
        <HiddenOnTablet>
          <ScrollToTop />
        </HiddenOnTablet>
      </React.Fragment>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      tableOfContents
      headings {
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
      fields {
        slug
        showCoverInPost
      }
    }
  }
`
