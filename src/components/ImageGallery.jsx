import React from "react";
import {Container, Row, Col, Image} from "react-bootstrap";
import '../styles/views-page.css';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

export default function ImageGallery(data) {
    const images = data.data.strapiBasicPages.image_gallery.galleryimages;

    return (
        <Container className='img-gallery'>
            {
                images.map((image) => {
                    return (
                        <GatsbyImage image={getImage(image.localFile)} objectFit="cover" loading="lazy" alt="" />
                    )
                })
            }
        </Container>
    );
}
