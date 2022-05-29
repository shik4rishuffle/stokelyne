import React from "react";
import {graphql} from "gatsby";
import HomePageLayout from "../components/HomePageLayout";
import ImageCarousel from "../components/ImageCarousel";
import * as styles from "../styles/index-page.module.css";
import {Container, Row} from "react-bootstrap";

export default function IndexPage({data}) {
	const {BodyText, Title} = data.strapiHomePage;
	return (
		<HomePageLayout>
			<ImageCarousel/>
			<Container>
				<Row>
					<h1>{Title}</h1>
				</Row>
				<Row className={styles.homePage__bodyText}>
					{BodyText}
				</Row>
			</Container>
		</HomePageLayout>
	);
}

export const query = graphql`
query MyQuery {
  strapiHomePage(UID: {eq: "homepage"}) {
    id
    Title
    BodyText
  }
}
`;
