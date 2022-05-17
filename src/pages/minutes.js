import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/standard-page.module.css";


export default function Minutes({ data }) {
	const nodes = data.allFile.edges;
	console.log(nodes);

	return (
		<Layout>
			<div className={styles.standard}>
				<h2>Parish Council</h2>
				<h3>Minutes Resources</h3>

				<div className="downloads">
					<h3>Downloads:</h3>
					{nodes.map(node => (
						<Link  key={node.id} className={"download-link " + node.node.extension} href={node.node.publicURL} download>{node.node.name}.{node.node.extension} - {node.node.size / 100}kb</Link>
					))}
				</div>
			</div>

		</Layout>
	);
}

export const query = graphql`
query MinutesFiles {
    allFile(filter: {sourceInstanceName: {eq: "minutes"}}) {
        edges {
            node {
            extension
            size
            name
            publicURL
            }
        }
    }
}
`;
