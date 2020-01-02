import React from 'react'
import Link from 'gatsby-link'
import { FancyH2 } from '../elements/fancyHeader'
import { Group } from '../elements/elements'
import { groupByYear } from '../../utils/timeIntervals'
class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    const groupsPostList = groupByYear(postList)
    return (
      <div style={{ marginTop: 60 }}>
        {groupsPostList.map(group => (
          <Group key={group.label}>
            <div>
              <FancyH2>{group.label}</FancyH2>
            </div>
            {group.items.map(post => (
              <div key={post.title} style={{ marginBottom: 10 }}>
                <Link to={post.path}>{post.title}</Link>
              </div>
            ))}
          </Group>
        ))}
      </div>
    )
  }
}

export default PostListing
