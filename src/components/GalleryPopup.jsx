import React from "react";
import {Modal} from "react-bootstrap";
import GalleryPopupImage from "./GalleryPopupImage";
import {XCircle, ArrowRightCircle, ArrowLeftCircle} from "react-bootstrap-icons";

function GalleryPopup(props) {
	let visible = props.show;
	let modalImage = <div>No image...</div>;

	// Check if image array exists and return nothing if not.
	if (!props.images) {
		return null;
	}

	// Check if image exists and create image component if it does.
	if (props.images[props.index]) {
		modalImage = <GalleryPopupImage image={props.images[props.index].localFile}/>;
	}

	// Handle next button click. Adds one to index if it does and sets index to the start if it doesn't.
	function handleModalIndexNext(e) {
		e.preventDefault();
		if (props.images[props.index + 1]) {
			props.setCurrentModalImageIndex(props.index + 1);
		}
		if (props.index === (props.images.length - 1)) {
			props.setCurrentModalImageIndex(0);
		}
	}

	// Handle previous button click. Subtracts one from index if there's a previous index or sets to last index in array if not.
	function handleModalIndexPrev(e) {
		e.preventDefault();
		if (props.images[props.index - 1]) {
			props.setCurrentModalImageIndex(props.index - 1);
		}
		if (props.index === 0) {
			props.setCurrentModalImageIndex(props.images.length - 1);
		}
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
					{modalImage}
				</div>
			</Modal.Body>
			<Modal.Footer className="modal-buttons">
				<ArrowLeftCircle id='prev' onClick={handleModalIndexPrev} className="fs-1"/>
				<XCircle id='close' onClick={props.handleModalClose} className="fs-1"/>
				<ArrowRightCircle id='next' onClick={handleModalIndexNext} className="fs-1"/>
			</Modal.Footer>
		</Modal>
	);
}

export default GalleryPopup;