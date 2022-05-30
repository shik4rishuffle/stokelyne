import React from "react";
import {Modal} from "react-bootstrap";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function GalleryPopup(props) {
    let fullImage = "Image not found. How did you get here?"
    let visible = props.show;
    if (props.image !== null) {
        fullImage = <GatsbyImage className='img-full img-fluid' image={getImage(props.image.localFile)} objectFit="cover"
                                       loading="lazy" alt=""/>
    }
    return (
        <Modal
            show={visible}
            size="xxl-down"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen="true"
            onHide={props.handleModalClose}
            dialogClassName="img-modal"
        >
            <Modal.Body>
                <div className="img-container">
                    {fullImage}
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default GalleryPopup;
