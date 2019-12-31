import React, { Component } from 'react'
import _ from 'lodash'
import Link from 'gatsby-link'
import { PostTagsContainer } from '../elements/elements'

class PostTags extends Component {
  render() {
    const { tags } = this.props
    return (
      <PostTagsContainer>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/blog/tags/${_.kebabCase(tag)}`}
            >
              #{tag}
            </Link>
          ))}
      </PostTagsContainer>
    )
  }
}

export default PostTags
