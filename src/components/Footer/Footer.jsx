import React, { Component } from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const Footer = styled('footer')`
  justify-content: center;
  align-content: center;
  padding: 10px 5px 20px;

  h5 {
    font-size: 0.9em;
    line-height: 1.3em;
    margin: 0;
    font-family: 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Arial',
      sans-serif;
  }

  a {
    font-size: 0.9em;
    line-height: 1.3em;
  }
`

const NoticeContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 25px;

  ${TABLET_MEDIA_QUERY} {
    justify-content: space-around;
  }
`

export default class extends Component {
  render() {
    const { config } = this.props
    const url = config.siteRss
    const currentYear = new Date().getFullYear()
    return (
      <Footer>
        <NoticeContainer>
          <h5>
            © {currentYear} {config.userName}
            <br />
            the site is based on{' '}
            <a href="https://www.gatsbyjs.org/" target="_blank">
              Gatsby
            </a>{' '}
            and{' '}
            <a href="https://www.suevalov.com/" target="_blank">
              Alex Suevalov Blog
            </a>
          </h5>
          <Link to={url}>Subscribe</Link>
        </NoticeContainer>
      </Footer>
    )
  }
}
