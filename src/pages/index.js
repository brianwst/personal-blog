import React from 'react'
import Link from 'gatsby-link'
import PostSummary from '../components/post-summary.js'

const IndexPage = ({data}) => {

    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <a className="button is-primary">
          Primary button
        </a>
        {data.allMarkdownRemark.edges.map(({node}) => (
            <PostSummary node={node} key={node.id}/>
        ))}
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
}

export default IndexPage

export const postQuery = graphql`
query HomePageQuery {
  allMarkdownRemark {
    edges {
      node {
				fields {
          slug
        }
        id
        frontmatter {
          title
          date
          author
        }
        excerpt
      }
    }
  }
}
`
