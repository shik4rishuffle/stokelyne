import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function GalleryPopupImage(props) {
	return (
		<GatsbyImage className='img-full img-fluid' image={getImage(props.image)} objectFit="cover" loading="lazy" alt=""/>
	);
}

export default GalleryPopupImage;