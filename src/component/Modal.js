import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  static propTypes = {
    handleBackdropClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  compponentWIllUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.clickModal();
    }
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.clickModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.url} alt="foto" className="Modal" />
        </div>
      </div>
    );
  }
}
