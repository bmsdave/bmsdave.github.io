import styled from 'react-emotion'

const Timeline = styled('section')`
  position: relative;
  min-height: 100px;
  width: 100%;

  ul {
    list-style-type: none;
  }

  ul li {
    list-style-type: none;
    position: relative;
    max-width: 730px;
  }

  ul li::after {
    content: '';
    position: absolute;
    left: -60px;
    top: 1px;
    transform: translateX(-50%);
    width: 80px;
    height: 30px;
    border-radius: 5px;
    background: white;
  }
`

const Event = styled('div')`
  position: relative;
  bottom: -2px;
`

const EventTitle = styled('div')``

const EventTitleStrong = styled('strong')`
  font-size: 1.2em;
`

const EventTitleGray = styled('span')`
  color: #666;
`

const EventSubtitle = styled('div')`
  color: #666;
`

const EventTime = styled('div')`
  display: inline-block;
`

const EventTimeMain = styled('div')`
  display: inline-block;
`

const EventDescription = styled('div')`
  padding: 4px 0 0 4px;
  p {
    text-indent: 1.5em;
  }

  p:last-child {
    text-indent: 0;
  }
`

export {
  Timeline,
  Event,
  EventTitle,
  EventTitleStrong,
  EventTitleGray,
  EventSubtitle,
  EventTime,
  EventTimeMain,
  EventDescription,
}
