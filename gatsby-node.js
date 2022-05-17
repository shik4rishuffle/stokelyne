const path = require('path');
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    graphql(`{
        allStrapiBasicPages {
             edges {
               node {
                   slug
               }
             }
           }
       }
       `
    ).then(({ data, errors }) => {
        if (errors) {
            return Promise.reject(errors)
        }
        const { edges } = data.allStrapiBasicPages

        edges.forEach(({ node }) => {
            createPage({
                path: `/${node.slug}`,
                component: path.resolve(`./src/templates/standard-page.js`),
                context: {
                    slug: node.slug,
                },
            })
        })
    })
}
