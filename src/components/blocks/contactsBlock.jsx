import React from 'react'
import TwitterIcon from '../elements/icons/twitterIcon'
import GithubIcon from '../elements/icons/githubIcon'
import LinkedInIcon from '../elements/icons/linkedInIcon'
import GmailIcon from '../elements/icons/gmailIcon'
import SiteIcon from '../elements/icons/siteIcon'
import { LeadContactsContainer, classes } from '../elements/elements'

export default class ContactsBlock extends React.Component {
  render() {
    return (
      <LeadContactsContainer className={this.props.className}>
        <ul>
          {this.props.links.map(link => {
            let IconComponent = null
            let target = '_blank'

            switch (link.type) {
              case 'gmail':
                IconComponent = GmailIcon
                target = '_self'
                break
              case 'github':
                IconComponent = GithubIcon
                break
              case 'twitter':
                IconComponent = TwitterIcon
                break
              case 'linkedin':
                IconComponent = LinkedInIcon
                break
              case 'site':
                IconComponent = SiteIcon
                break
              default:
                break
            }

            if (IconComponent === null) {
              return null
            }

            return (
              <li key={link.type}>
                <a
                  style={{ borderBottom: 'none' }}
                  target={target}
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  <IconComponent className={classes.icon} />
                </a>
                <a
                  target={target}
                  className="social-login"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </LeadContactsContainer>
    )
  }
}
