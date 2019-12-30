import React from 'react'
import styled, { css } from 'react-emotion'
import { FancyH2 } from '../FancyHeader/FancyHeader'
import TwitterIcon from '../Icons/TwitterIcon'
import GithubIcon from '../Icons/GithubIcon'
import LinkedInIcon from '../Icons/LinkedInIcon'
import GmailIcon from '../Icons/GmailIcon'
import LastFMIcon from '../Icons/LastFMIcon'
import SiteIcon from '../Icons/SiteIcon'
import monokaiColors from '../../../monokaiColors'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

const LeadContactsContainer = styled('div')`
  font-size: 0.9em;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;

    > a:first-child {
      float: left;
      margin-right: 10px;
    }

    svg:hover {
      color: #4d11ff;
      stroke: #4d11ff;
    }

    small {
      display: block;
      margin-left: 34px;
    }
  }

  ${TABLET_MEDIA_QUERY} {
    li {
      display: inline-block;
      margin-right: 0;
      margin-bottom: 0;

      .social-login {
        display: none;
      }

      small {
        display: none;
      }
    }
  }
`

const classes = {
  icon: css`
    width: 25px;
    height: 25px;
    opacity: 0.6;
    color: ${monokaiColors.colors['list.focusBackground']};
    vertical-align: middle;
  `,
}

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
