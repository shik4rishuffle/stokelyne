import {graphql} from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/standard-page.module.css";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import UserTable from "../components/UserTable";

export default function StandardPage({data}) {
    const {slug, title, subtitle, featureImage, pageText, optionalComponents} = data.strapiBasicPages;
    let parishMembers;

    // @todo: create dynamic optional components loader
    if (optionalComponents && title === "Stoke Lyne Parish Council") {
        parishMembers = <UserTable className="parish-members" data={data.allStrapiParishMembers}/>;
    }

    return (
        <Layout>
            <div className={styles.standard}>
                <GatsbyImage image={getImage(featureImage?localFile)} alt={featureImage?.alt}
                             className={styles.featureImage}/>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{pageText}</ReactMarkdown>
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
