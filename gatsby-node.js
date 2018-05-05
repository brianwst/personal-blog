/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

 exports.onCreateNode = ({node, getNode, boundActionCreators}) => {
   const { createNodeField } = boundActionCreators
   if (node.internal.type === "MarkdownRemark") {
     const slug = createFilePath({node, getNode, basePath: `pages`})
     createNodeField({
       node,
       name: `slug`,
       value: slug
     })
   }
 }

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise ((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/posts.js'),
        // The context is passed as props to the component as well
        // as into the component's GraphQL query.
        context: {
          slug: node.fields.slug
        }
      })
    })
    resolve()
  })

})
}
