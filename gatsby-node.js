const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectDetailsTemplate = path.resolve('./src/templates/project-details.js')
    const { data } = await graphql(`
        query Projects {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
      
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/projects/${node.frontmatter.slug}`,
            component: projectDetailsTemplate,
            context: { slug: node.frontmatter.slug }
        })
    });
}