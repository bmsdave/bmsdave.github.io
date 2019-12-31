import React from 'react'
import styled from 'react-emotion'
import YoutubeIcon from './elements/icons/youtubeIcon'
import monokaiColors from '../../monokaiColors'

const TalkContainer = styled('div')``

const TalkVideoLink = styled('a')`
  border-bottom: none;
  opacity: 0.6;
  color: ${monokaiColors.colors['list.focusBackground']};

  :hover,
  :focus {
    opacity: 1;
  }

  span {
    display: none;
  }
`

const TalkVideoIcon = styled(YoutubeIcon)`
  width: 25px;
  height: 25px;
  display: inline-block;
  vertical-align: middle;
`

// type TalkProps = {
//   talk: {
//     title: string
//   }
// };

export default class Talk extends React.Component {
  render() {
    const { title, date, place, video, url, language } = this.props.talk
    return (
      <TalkContainer>
        <div>
          <a target="_blank" href={url} rel="noopener noreferrer">
            {title} / <small>{language}</small>
          </a>
          {video && (
            <TalkVideoLink
              href={video}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TalkVideoIcon />
            </TalkVideoLink>
          )}
        </div>
        <small>
          {date}, {place}
        </small>
      </TalkContainer>
    )
  }
}
