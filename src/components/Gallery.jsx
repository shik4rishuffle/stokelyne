import React from "react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const GalleryComponent = ({data}) => {
  //   const images = data.allFile.edges.map(({ node }) => node.childImageSharp)
  // `images` is an array of objects with `thumb` and `full
  console.log(data);
  return (<GatsbyImage image={getImage(data.optionalComponents?.images.localFile)}/>);
};

export default GalleryComponent;

export const imageQuery = graphql `
  query galleryQuery($slug: String) {
    strapiBasicPages(slug: { eq: $slug }) {
      optionalComponents
    }
  }
`;
