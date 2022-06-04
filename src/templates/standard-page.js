import {graphql} from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/standard-page.module.css";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import UserTable from "../components/UserTable";
import ImageGallery from "../components/ImageGallery";

export default function StandardPage({data}) {
	const {title, subtitle, featureImage, pageText, optionalComponents, image_gallery} = data.strapiBasicPages;
	let parishMembers;
	let imageGallery; 

	// @todo: create dynamic optional components loader
	console.log(optionalComponents);
    if (optionalComponents) {
		optionalComponents.map((component) => {
			// Add more component types here as required.
			if (component.strapi_component === "user-table.parish-member-table") {
				parishMembers = <UserTable className="parish-members" data={data.allStrapiParishMembers}/>;
			}
		});
        
    }
    if (image_gallery) {
        imageGallery = <ImageGallery data={data} />;
    }

	return (
		<Layout>
			<div className={styles.standard}>
				<GatsbyImage image={getImage(featureImage?.localFile)} alt={featureImage?.alt}
	className={styles.featureImage}/>;
				<h2>{title}</h2>
				<h3>{subtitle}</h3>
				<ReactMarkdown rehypePlugins={[rehypeRaw]}>{pageText}</ReactMarkdown>
				{imageGallery}
				{parishMembers}
			</div>
		</Layout>
	);
}

export const query = graphql`
query optionalComponentsAndPageData($slug: String) {
	strapiBasicPages(slug: {eq: $slug}) {
		slug
		title
		subTitle
		pageText
		featureImage {
		  localFile {
			childImageSharp {
			  gatsbyImageData
			}
		  }
		}
		optionalComponents
		image_gallery {
		  gallery {
			localFile {
			  childImageSharp {
				gatsbyImageData
			  }
			}
		  }
		}
	  }
	allStrapiParishMembers {
	edges {
		node {
			name
			DisplayPicture {
			localFile {
				childImageSharp {
				gatsbyImageData(layout: CONSTRAINED width:200 height:200)
				}
			}
			}
			Description
		}
	}
  }
}
`;
