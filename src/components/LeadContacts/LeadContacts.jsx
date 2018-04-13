import React from 'react'
import styled, { css } from 'react-emotion'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'
import TwitterIcon from '../Icons/TwitterIcon'
import GithubIcon from '../Icons/GithubIcon'
import LinkedInIcon from '../Icons/LinkedInIcon'
import GmailIcon from '../Icons/GmailIcon'
import LastFMIcon from '../Icons/LastFMIcon'
import monokaiColors from '../../../monokaiColors'

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

    small {
      display: block;
      margin-left: 34px;
    }
  }

  ${TABLET_MEDIA_QUERY} {
    li {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 10px;

      > a:first-child {
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

export default class LeadContacts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lastfm: '',
      isLoading: false,
      nowplaying: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })

    const fullUrl = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=bmsdave&api_key=e07781fdb72b940ecccaa4e84182695b&format=json&limit=1`

    const lastfmPromise = fetch(fullUrl)
      .then(response => response.json().then(json => ({ json, response })))
      .then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }
        const lastfm =
          json.recenttracks.track[0].artist['#text'] +
          ' - ' +
          json.recenttracks.track[0].name
        const nowplaying =
          (json.recenttracks.track[0]['@attr'] &&
            json.recenttracks.track[0]['@attr'].nowplaying) ||
          false
        this.setState({
          lastfm: lastfm,
          isLoading: false,
          nowplaying: nowplaying,
        })

        return true
      })
  }

  render() {
    const lastfm = this.state.lastfm
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
              case 'lastfm':
                IconComponent = LastFMIcon
                break
              default:
                break
            }

            if (IconComponent === null) {
              return null
            }

            let label
            if (this.state.nowplaying && IconComponent === LastFMIcon) {
              label = link.label + ': ' + this.state.lastfm
            } else {
              label = link.label
            }

            return (
              <li key={link.type}>
                <a
                  style={{ boxShadow: 'none' }}
                  target={target}
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  <IconComponent className={classes.icon} />
                </a>
                <a target={target} rel="noopener noreferrer" href={link.href}>
                  {link.label}
                </a>
                {this.state.nowplaying && IconComponent === LastFMIcon ? (
                  <span>
                    <br />
                    <small>
                      <img src="/images/nowplaying.gif" /> {this.state.lastfm}
                    </small>
                  </span>
                ) : null}
              </li>
            )
          })}
        </ul>
      </LeadContactsContainer>
    )
  }
}
