const path = require("path");
// eslint-disable-next-line no-undef
exports.createPages = ({actions, graphql}) => {
	const {createPage} = actions;
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
	).then(({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}
		const {edges} = data.allStrapiBasicPages;

		edges.forEach(({node}) => {
			createPage({
				path: `/${node.slug}`,
				component: path.resolve("./src/templates/standard-page.js"),
				context: {
					slug: node.slug,
				},
			});
		});
	});
};

// eslint-disable-next-line no-undef
exports.createSchemaCustomization = ({actions}) => {
	const {createTypes} = actions;
	// Add optional fields here to allow GraphQL to return null values alongside other data.
	const typeDefs = `
        type StrapiBasicPages implements Node {
            featureImage: FeatureImage
            optionalComponents: [JSON]
        }
        
        type FeatureImage {
            localFile: File
        }
        
        type LocalFile {
            localFile: File @link(from: "localFile___NODE")
        }
        
        type StrapiEvents implements Node {
            ContactEmail: String
            Description: String
            EventDate: Date @dateFormat(formatString: "DD-MMMM-YYYY")
            EventTitle: String
            EventPhoto: LocalFile
        }
    `;
	createTypes(typeDefs);
};
