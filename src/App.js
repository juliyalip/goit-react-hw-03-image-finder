import { Component } from "react";
import { ToastContainer } from "react-toastify";

import Searchbar from "./component/Searchbar";
import ImageGallery from "./component/ImageGallery";

export default class App extends Component {
  state = {
    imageName: "",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/*<ImageGallery images={this.state.imagesName}/> */}
        <ImageGallery imageName={this.state.imageName} />{" "}
        {/*Прокинули через проп значение state*/}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
