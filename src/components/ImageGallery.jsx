import React from "react";
import {Container} from "react-bootstrap";
import "../styles/views-page.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import GalleryPopup from "./GalleryPopup";

export default function ImageGallery(data) {
	const images = data.data.strapiBasicPages.image_gallery.gallery;
	const [currentModalImageIndex, setCurrentModalImageIndex] = React.useState(null);
	const [modalVisible, setModalVisible] = React.useState(false);

	// Sets modal visibility to hide and cleans up image index on modal close.
	function handleModalClose() {
		setModalVisible(false);
		setCurrentModalImageIndex(null);
	}

	return (
		<Container className='img-gallery'>
			{
				images.map((image, index) => {
					return (
						<GatsbyImage key={index} id={index}
							onClick={() => {
								setCurrentModalImageIndex(index);
								setModalVisible(true);
							}}
							className='img-thumb' image={getImage(image.localFile)} objectFit="cover" loading="lazy" alt="" />
					);
				})
			}
			<GalleryPopup show={modalVisible} index={currentModalImageIndex} setCurrentModalImageIndex={setCurrentModalImageIndex} images={images} handleModalClose={handleModalClose} />
		</Container>
	);
}