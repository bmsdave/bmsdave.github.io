import React from 'react'
import Link from 'gatsby-link'
import Config from '../../../config'
import {
  activeLinkClass,
  ProfileHexImage,
  Nav,
  Menu,
  MenuItem,
  LogoLink,
} from '../elements/elements'

export default class Header extends React.Component {
  render() {
    return (
      <Nav>
        <LogoLink to="/">
          <ProfileHexImage image={Config.userAvatar} title={Config.userName} />
        </LogoLink>
        <Menu>
          <MenuItem>
            <Link
              isActive={(match, location) => location.pathname === '/'}
              activeClassName={activeLinkClass}
              to="/"
            >
              Vadim Gorbachev
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              isActive={(match, location) =>
                location.pathname.indexOf('/blog') === 0
              }
              to="/blog"
              activeClassName={activeLinkClass}
            >
              Blog
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              isActive={(match, location) =>
                location.pathname.indexOf('/talks') === 0
              }
              to="/talks"
              activeClassName={activeLinkClass}
            >
              Talks
            </Link>
          </MenuItem>
          {/* <MenuItem>
            <Link
              isActive={(match, location) =>
                location.pathname.indexOf('/resume') === 0
              }
              to="/resume"
              activeClassName={activeLinkClass}
            >
              Resume
            </Link>
          </MenuItem> */}
        </Menu>
      </Nav>
    )
  }
}
