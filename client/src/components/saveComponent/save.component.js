import React, { Component } from "react";
import httpClient from "../../util/httpClient";
import notification from "../../util/notification";
import Unsave from "../../util/unsave";
import "./save.component.css";

export default class SaveComponent extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    httpClient
      .GET("/books")
      .then((response) => {
        this.setState({
          books: response.data,
        });
      })
      .catch((err) => {
        notification.handleError(err);
      });
  }
  remove = (props, id, index) => {
    //eslint-disable-next-line no-restricted-globals

    httpClient
      .DELETE(`/books/${id}`, true)
      .then((response) => {
        notification.showInfo("Book unsaved!!");
        const { books } = this.state;
        books.splice(index, 1);
        this.setState({
          books,
        });
      })
      .catch((err) => {
        notification.handleError(err);
      });
  };
  render() {
    let saved =
      this.state.books.length === 0 ? (
        <div className="container">
          <div className="card-deck row">
            <div className="container">
              <h2 className="img_text">No Books Available!!!</h2>
              <img
                className="img-responsive rounded"
                src="images/saved.png"
                alt="Chania"
              />
            </div>
          </div>
        </div>
      ) : (
        this.state.books.map((item, i) => (
          <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front my-auto">
                <h2>{item.title}</h2>
              </div>
              <div className="flip-card-back">
                <h1>Published By:</h1>
                <h1>{item.publisher}</h1>
                <a
                  href={item.previewLink}
                  target="_blanl"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-secondary">Visit Site</button>
                </a>
                <br />
                <br />
                <p>
                  <Unsave
                    title="Are you sure?"
                    submitCallback={() => this.remove(this.props, item._id, i)}
                  ></Unsave>
                </p>
              </div>
            </div>
          </div>
        ))
      );
    return <div>{saved}</div>;
  }
}
