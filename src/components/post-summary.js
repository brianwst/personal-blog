import React from 'react';
import Link from 'gatsby-link'

function PostSummary (props) {
  return (
    <div className="container">
      <div className="box">
        <div className="level">
          <Link to={props.node.fields.slug} className="level-left title">{props.node.frontmatter.title}</Link>
          <h5 className="level-right">{props.node.frontmatter.date}</h5>
        </div>
        <div className="content">
          <h3 className="level-left sub-title">{props.node.frontmatter.author}</h3>
          <p>{props.node.excerpt}</p>
        </div>
      </div>
    </div>
  )
}
export default PostSummary;
