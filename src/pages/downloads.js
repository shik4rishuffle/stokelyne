import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import DownloadPopup from "../components/DownloadPopup";
import * as styles from "../styles/downloads-page.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Downloads({ data }) {
	const downloadPage = data.allStrapiDownloads.edges;
	const [modalShow, setModalShow] = React.useState(false);
	const [modalData, setModalData] = React.useState({});

	return (
		<Layout>
			<div className={styles.downloads}>
				<h2>Downloads</h2>
				<div className={styles.downloadsContainer}>
					{downloadPage.map(download => (
						<div key={download.id} className={styles.download} onClick={() => {
							setModalData(download.node);
							setModalShow(true);
						}}>
							<GatsbyImage image={getImage(download.node?.featureImage?.localFile)} />
							<h4>{download.node.pageTitle}</h4>
						</div>
					))}
				</div>
			</div>
			<DownloadPopup
				show={modalShow}
				data={modalData}
				onHide={() => setModalShow(false)}
			></DownloadPopup>
		</Layout>
	);
}
export const query = graphql`
  {
    allStrapiDownloads {
      edges {
        node {
          featureImage {
            localFile {
              childImageSharp {
                gatsbyImageData(height: 250, width: 250)
              }
            }
          }
          files {
            size
            url
            name
            ext
            localFile {
              publicURL
            }
          }
          pageTitle
        }
      }
    }
  }
`;
