import React from "react";

const ImageGalleryItem = ({ images, clickModal }) =>
  images.map(({ id, webformatURL, tags }) => (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} onClick={clickModal} />
    </li>
  ));

export default ImageGalleryItem;
