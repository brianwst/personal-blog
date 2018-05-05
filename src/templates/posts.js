import React from 'react';

const post = ({data}) => {
  const post = data.markdownRemark;
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>{post.frontmatter.title}</h1>
            <h4 style={{color: 'rgb(165, 164, 164)'}}>{post.frontmatter.author} <span style={{fontSize: '0.8em'}}> -{post.frontmatter.date}</span></h4>
            <div dangerouslySetInnerHTML = {{ __html: post.html }}/>
          </div>
        </div>
      </div>
    )
}

export default post;

export const postQuery = graphql`
  query postQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}} ){
      html
      frontmatter {
        title
        author
        date
      }
    }
  }
`;
