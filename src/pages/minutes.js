import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/standard-page.module.css";
import { Accordion } from "react-bootstrap";
import "../styles/minutes-page.css";

export default function Minutes({ data }) {
	const nodes = data.allStrapiMinutes.edges;
	let years = Array(0);

	// Create array of available years from query.
	nodes.map((node) => {
		if (!years.includes(node.node.DateOfMeeting.substring(6, 10))) {
			years.push(node.node.DateOfMeeting.substring(6, 10));
		}
	});
	return (
		<Layout>
			<div className={styles.standard}>
				<h2>Parish Council</h2>
				<h3>Minutes Resources</h3>
				<h3>Downloads:</h3>
				<div className="downloads">
					<Accordion defaultActiveKey='0' flush>
						{years.map((year, index) => {
							return (
								<Accordion.Item key={index} eventKey={index.toString()}>
									<Accordion.Header>{year}</Accordion.Header>
									<Accordion.Body>
										{nodes.map((node) => {
											// Populates accordion with available minutes documents.
											if (node.node.DateOfMeeting.substring(6, 10) === year) {
												return (<a key={node.node.Minutes.id} className={"download-link " + node.node.Minutes.localFile.extension} href={node.node.Minutes.localFile.publicURL} download>
													<div>{node.node.Minutes.name}.{node.node.Minutes.extension} - {(node.node.Minutes.size / 100).toFixed(2)}kb</div>
													<div>{node.node.DateOfMeeting}</div>
												</a>);
											}
										})}
									</Accordion.Body>
								</Accordion.Item>
							);})}
					</Accordion>
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
