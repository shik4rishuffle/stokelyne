import React from "react";
import {Container} from "react-bootstrap";
import '../styles/views-page.css';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import GalleryPopup from './GalleryPopup';

export default function ImageGallery(data) {
    const images = data.data.strapiBasicPages.image_gallery.galleryimages;
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalImage, setModalImage] = React.useState(null);

    function handleModalClose() {
        setModalVisible(false);
    }

    return (
        <>
            <Container className='img-gallery'>
                {
                    images.map((image, index) => {
                        console.log(images[index]);
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
            </Container>
            <GalleryPopup show={modalVisible} image={modalImage} handleModalClose={handleModalClose} />
        </>
    );
}
