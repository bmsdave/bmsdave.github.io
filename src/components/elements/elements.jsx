import styled, { css } from 'react-emotion'
import monokaiColors from '../../../monokaiColors'
import {
  DEFAULT_WIDTH,
  TABLET_MEDIA_QUERY,
  DEFAULT_MEDIA_QUERY,
} from 'typography-breakpoint-constants'
import HexImage from '../hexImage/hexImage'
import Link from 'gatsby-link'
import ContactsBlock from '../blocks/contactsBlock'

const LeadContactsContainer = styled('div')`
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    line-height: 2;
    margin: 10px;

    a {
      margin-left: 4px;
    }

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
  font-size: 16px;
  margin: 10px auto 40px auto;

  @media print {
    display: none !important;
  }

  ${DEFAULT_MEDIA_QUERY} {
    margin: 10px 10px 40px 10px;
  }
`

const Menu = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0 0 0 16px;
  padding: 0;
`

const MenuItem = styled('li')`
  padding: 0 20px 0 0;
  margin: 0;
`

const LogoLink = styled(Link)`
  display: inline-flex;
  border-bottom: none;

  &:focus {
    outline: none;
  }
`

const PostTagsContainer = styled('div')`
  a {
    margin-right: 10px;
  }
`

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  > div:first-child {
    position: relative;
    width: 70%;
    padding-right: 16px;
    ${TABLET_MEDIA_QUERY} {
      width: 100% !important;
    }
  }

  > div:last-child {
    position: relative;
    width: 30%;
    ${TABLET_MEDIA_QUERY} {
      width: 100% !important;
    }
  }

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`

const Download = styled('a')`
  margin: 10px;
  @media print {
    display: none;
  }
`

const ContactsHeaderBlock = styled(ContactsBlock)`
  display: block;
  ul {
    max-width: 350px;
  }

  li {
    margin: 0px;
  }

  ${TABLET_MEDIA_QUERY} {
    display: none;
  }

  @media print {
    svg {
      width: 14px;
    }
  }
`

const ContactsFooterBlock = styled(ContactsBlock)`
  display: none;
  ${TABLET_MEDIA_QUERY} {
    display: block;
  }
`

// const Row = styled('div')`
//   display: flex;
//   flex-direction: row;
//   justify-content: ${props => props.justifyContent};
//
//   ${TABLET_MEDIA_QUERY} {
//     flex-direction: column;
//   }
// `

const TalksList = styled('div')`
  min-width: 50%;
  margin-top: 40px;

  h3 {
    margin-top: 0;
    margin-bottom: 20px;

    a {
      margin-left: 10px;
      font-size: 0.6em;
      vertical-align: middle;
    }
  }

  ul {
    list-style: none;
    margin: 0;
  }

  ul li {
    display: block;
  }

  li:last-child {
    margin: 0;
  }
`

const GroupsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`

const Group = styled('div')`
  width: 50%;
  font-size: 1.2rem;
  padding: 10px;

  ${TABLET_MEDIA_QUERY} {
    width: 100%;
  }
`

const classes = {
  resume: css`
    font-size: 12px;
  `,
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
  leadContacts: css`
    min-width: 250px;

    li {
      display: block;
    }

    ${TABLET_MEDIA_QUERY} {
      width: 100%;
    }
  `,
  leadText: css`
    flex-grow: 0;

    ${TABLET_MEDIA_QUERY} {
    }
  `,
  blog: css`
    padding: 10px;
  `,
}

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
  ContactsFooterBlock,
  ContactsHeaderBlock,
  Download,
  Row,
  TalksList,
  GroupsContainer,
  Group,
}
