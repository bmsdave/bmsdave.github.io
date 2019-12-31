import React from 'react'
import TwitterIcon from '../elements/icons/twitterIcon'
import GithubIcon from '../elements/icons/githubIcon'
import LinkedInIcon from '../elements/icons/linkedInIcon'
import GmailIcon from '../elements/icons/gmailIcon'
import LastFMIcon from '../elements/icons/lastFMIcon'
import { LeadContactsContainer, classes } from '../elements/elements'

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
                  style={{ borderBottom: 'none' }}
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
