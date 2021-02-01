import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Batton";
import Modal from "./Modal";

const key = "19520072-2a079db9835241cceccf8dd5b";
const page = 1;

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({
        loading: true,
        images: [],
      });

      setTimeout(() => {
        fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${nextName}
           &language=en&page=${page}&per_page=12&key=${key}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(`Введите правельный запрос`));
          })
          .then(({ hits }) => this.setState({ images: [...hits] }))
          .catch((error) => this.setState({ error }))
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  toggleModal = () => {
    return this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { loading, images, error, showModal } = this.state;

    return (
      <>
        {error && <h1>{error.message}</h1>}
        {loading && (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        )}

        {images && (
          <ul className="ImageGallery">
            <ImageGalleryItem images={images} clickModal={this.toggleModal} />
          </ul>
        )}

        {images.length > 0 && <Button />}

        {showModal && <Modal clickModal={this.toggleModal} />}
      </>
    );
  }
}
