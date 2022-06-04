import React from "react";
import {Container} from "react-bootstrap";
import '../styles/views-page.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import GalleryPopup from './GalleryPopup';

export default function ImageGallery(data) {
    const images = data.data.strapiBasicPages.image_gallery.gallery;
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalImage, setModalImage] = React.useState(null);

    function handleModalClose() {
        setModalVisible(false);
    }

    return (
            <Container className='img-gallery'>
                {
                    images.map((image, index) => {
                        return (
                                <GatsbyImage id={index}
                                             onClick={() => {
                                                 setModalImage(images[index]);
                                                 setModalVisible(true);
                                             }}
                                             className='img-thumb' image={getImage(image.localFile)} objectFit="cover" loading="lazy" alt="" />
                        )
                    })
                }
                <GalleryPopup show={modalVisible} image={modalImage} handleModalClose={handleModalClose} />
            </Container>
    );
}