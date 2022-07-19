import {graphql} from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/events-page.module.css";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import EventPopup from "../components/EventPopup";


export default function Events({data}) {
	const eventData = data.allStrapiEvents.nodes;
	const [modalShow, setModalShow] = React.useState(false);
	const [modalData, setModalData] = React.useState({});

	return (
		<Layout>
			<div className={styles.events}>
				<h2>Village Events</h2>
				<h3>Upcoming Events:</h3>
				<div className={styles.upcomingContainer}>
					{eventData.map(event => (
						<div key={event.id} className={styles.event}
							onClick={() => {
								setModalData(event);
								setModalShow(true);
							}}>
							<GatsbyImage image={getImage(event?.EventPhoto?.localFile)} alt="event photo"/>
							<h4>{event.EventTitle}</h4>
							<span>{event.EventDate}</span>
							<p>{event.Description}</p>
						</div>
					))}
					<EventPopup
						show={modalShow}
						data={modalData}
						onHide={() => setModalShow(false)}
					></EventPopup>

				</div>
			</div>

		</Layout>
	);
}
export const query = graphql`
  {
    allStrapiEvents {
      nodes {
        ContactEmail
        Description
        EventDate
        EventTitle
        EventPhoto {
            localFile {
            childImageSharp {
                gatsbyImageData(
                    width: 200
                )
            }
            }
        }
      }
    }
  }
  `;
