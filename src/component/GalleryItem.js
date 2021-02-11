import React from "react";
import PropTypes from "prop-types";

const GalleryItem = ({ images, clickModal }) =>
  images.map(({ id, webformatURL, tags, largeImageURL }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => {
          clickModal(largeImageURL);
        }}
      />
    </li>
  ));

GalleryItem.propTypes = {
  clickModal: PropTypes.func,
  images: PropTypes.array,
};

export default GalleryItem;
