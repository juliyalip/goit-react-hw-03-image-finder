import React, { Component } from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Batton";
import Modal from "./Modal";
import imageAPI from "../service/api";

export default class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    showModal: false,
    imageSrc: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const { page } = this.state;
    if (prevName !== nextName) {
      this.setState({
        loading: true,
        images: [],
      });

      imageAPI
        .fetchImage(nextName, page)
        .then(({ hits }) => this.setState({ images: [...hits] }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  toggleModal = (bigImage) => {
    return this.setState((prevState) => ({
      showModal: !prevState.showModal,
      imageSrc: bigImage,
    }));
  };

  incrementPage = () => {
    imageAPI
      .fetchImage(this.props.imageName, this.state.page)
      .then(({ hits }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }))
      );
  };

  render() {
    const { loading, images, error, showModal, imageSrc } = this.state;

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

        {images.length > 0 && <Button onClickButton={this.incrementPage} />}

        {showModal && <Modal clickModal={this.toggleModal} url={imageSrc} />}
      </>
    );
  }
}
