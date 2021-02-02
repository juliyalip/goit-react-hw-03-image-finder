import React, { Component } from "react";

export default class Modal extends Component {
  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
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
