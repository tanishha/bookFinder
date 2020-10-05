import React, { Component } from "react";
import httpClient from "./httpClient";
import notification from "./notification";

export default class Save extends Component {
  handleSave = (e) => {
    console.log(this.props.title);
    httpClient
      .POST("/books", this.props)
      .then((response) => {
        notification.showSuccess("Book saved successfully!");
      })
      .catch((err) => {
        notification.showWarnings("Book already saved!!!");
      });
  };

  render() {
    return (
      <>
        <button className="btn btn-secondary" onClick={this.handleSave}>
          {" "}
          Save
          <i className="far fa-bookmark"></i>
        </button>
      </>
    );
  }
}
