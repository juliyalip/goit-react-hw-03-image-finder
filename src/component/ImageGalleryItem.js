import React from "react";

const ImageGalleryItem = ({ images, clickModal }) =>
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

export default ImageGalleryItem;
