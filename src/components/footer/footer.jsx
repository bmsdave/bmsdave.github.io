import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Footer, NoticeContainer } from '../elements/elements'

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
          </h5>
          <Link to={url}>Subscribe</Link>
        </NoticeContainer>
      </Footer>
    )
  }
}
