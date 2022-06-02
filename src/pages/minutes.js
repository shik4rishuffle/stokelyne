import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/standard-page.module.css";


export default function Minutes({ data }) {
	const nodes = data.allStrapiMinutes.edges;
	console.log(nodes);

	return (
		<Layout>
			<div className={styles.standard}>
				<h2>Parish Council</h2>
				<h3>Minutes Resources</h3>

				<div className="downloads">
					<h3>Downloads:</h3>
					{nodes.map(node => (
						<a key={node.node.Minutes.id} className={"download-link " + node.node.Minutes.localFile.extension} href={node.node.Minutes.localFile.publicURL} download>
							{node.node.Minutes.name}.{node.node.Minutes.extension} - {node.node.Minutes.size / 100}kb
							<div>{node.node.DateOfMeeting}</div>
						</a>
					))}
				</div>
			</div>

		</Layout>
	);
}

export const query = graphql`
query minutesQuery {
  allStrapiMinutes {
    edges {
      node {
        Minutes {
          name
          size
          localFile {
            publicURL
            extension
          }
          id
        }
        DateOfMeeting(formatString: "DD/MM/YYYY")
      }
    }
  }
}
`;
