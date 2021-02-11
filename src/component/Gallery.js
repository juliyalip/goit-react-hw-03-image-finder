import React, { Component } from "react";
import PropTypes from "prop-types";

import imageApi from "../service/api";
import Form from "./Form";
import GalleryItem from "./GalleryItem";
import Modal from "./Modal";
import Button from "./Batton";

export default class Gallery extends Component {
  state = {
    images: [],
    showModal: false,
    imageSrc: "",
    currentPage: 1,
    searchQuery: "",
  };

  static propTypes = {
    toggleModal: PropTypes.func,
    onChangeQuery: PropTypes.func,
    fetchImages: PropTypes.func,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = (bigImage) => {
    return this.setState((prevState) => ({
      showModal: !prevState.showModal,
      imageSrc: bigImage,
    }));
  };

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    });
  }; /*submit form*/

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      currentPage,
      searchQuery,
    };

    imageApi.fetchImages(options).then((response) => {
      this.setState((prevState) => ({
        images: [...prevState.images, ...response.data.hits],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };

  render() {
    const { showModal, images, imageSrc } = this.state;

    return (
      <>
        <Form onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          <GalleryItem images={images} clickModal={this.toggleModal} />
        </ul>
        {showModal && <Modal clickModal={this.toggleModal} url={imageSrc} />}

        {images.length > 0 && <Button onClickButton={this.fetchImages} />}
      </>
    );
  }
}
