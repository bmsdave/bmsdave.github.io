import styled, { css } from 'react-emotion'
import monokaiColors from '../../../monokaiColors'
import {
  DEFAULT_WIDTH,
  TABLET_MEDIA_QUERY,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
import HexImage from '../hexImage/hexImage'
import Link from 'gatsby-link'

const LeadContactsContainer = styled('div')`
  ul {
    list-style: none;
  }

  li {
    display: inline-block;

    > a:first-child {
      float: left;
    }

    small {
      display: block;
    }
  }

  li:hover {
    svg {
      color: #4d11ff;
      stroke: #4d11ff;
    }
  }

  ${TABLET_MEDIA_QUERY} {
    li {
      display: inline-block;

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
  container: css`
    width: 30px;
    height: 30px;
    background-color: ${monokaiColors.colors['list.focusBackground']};
    border-radius: 50%;
    opacity: 0.6;
  `,
}

const Footer = styled('footer')`
  justify-content: center;
  align-content: center;

  @media print {
    display: none;
  }
`

const NoticeContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;

  ${TABLET_MEDIA_QUERY} {
    justify-content: space-around;
  }
`

const H2 = styled('h2')``

const Text = styled('p')`
  strong {
  }
`

const activeLinkClass = css`
  color: black;
  text-decoration: none;
  border-bottom: none;
`

const ProfileHexImage = styled(HexImage)`
  width: 70px;
  height: 70px;
  transition: 0.5s;

  &:hover {
    transform: rotate(-3deg);
  }
`

const Nav = styled('nav')`
  display: flex;
  max-width: ${DEFAULT_WIDTH};

  @media print {
    display: none !important;
  }

  ${DEFAULT_MEDIA_QUERY} {
  }
`

const Menu = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`

const MenuItem = styled('li')``

const LogoLink = styled(Link)`
  display: inline-flex;
  border-bottom: none;

  &:focus {
    outline: none;
  }
`

const PostTagsContainer = styled('div')`
  a {
  }
`

export {
  LeadContactsContainer,
  classes,
  NoticeContainer,
  Footer,
  H2,
  Text,
  activeLinkClass,
  ProfileHexImage,
  Nav,
  Menu,
  MenuItem,
  LogoLink,
  PostTagsContainer,
}
