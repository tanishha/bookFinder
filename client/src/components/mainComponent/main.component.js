import React, { Component } from "react";
import "./main.component.css";
import axios from "axios";
import AlertDialog from "./../../util/details";
import notification from "../../util/notification";
import { Loader } from "../loader/loader.component";

const apiKey = "AIzaSyBf9U8DPeKp7vec9R6D2xohuSirRrGC4tg";

export default class MainComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        book: "",
      },
      books: [],
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState((pre) => ({
      data: {
        ...pre.data,
        [name]: value,
      },
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var changedSearch = this.state.data.book.replace(" ", "+");

    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          changedSearch +
          "&maxresults=30&key=" +
          apiKey
      )
      .then((response) => {
        this.setState({
          books: response.data.items,
        });
        console.log(this.state.books);
        this.state.books.forEach((books) =>
          console.log("books>>>", books.volumeInfo.title)
        );
      })
      .catch((err) => {
        notification.showWarnings("BOOK NOT FOUND!!!");
        this.setState({});
      });
  };
  render() {
    let content =
      this.state.books === undefined ? (
        <Loader></Loader>
      ) : (
        this.state.books.map((books) => (
          <div className="col-lg-12 col-md-12 col-12 mx-auto " key={books.id}>
            <div className="card">
              <div>
                <img
                  className="card-img-top"
                  src={books.volumeInfo.imageLinks.thumbnail}
                  alt="Card image cap"
                />
              </div>

              <div className="card-body">
                <h4 className="card-title">{books.volumeInfo.title}</h4>

                <AlertDialog
                  title={books.volumeInfo.title}
                  description={books.volumeInfo.description}
                  image={books.volumeInfo.imageLinks.thumbnail}
                  previewLink={books.volumeInfo.previewLink}
                ></AlertDialog>
                <button className="btn btn-secondary">
                  {" "}
                  Save
                  <i className="far fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      );
    return (
      <>
        <div className="s01">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>"Keep Reading"</legend>
            </fieldset>
            <div className="inner-form">
              <div className="input-field first-wrap">
                <input
                  id="search"
                  type="text"
                  className="form-control"
                  name="book"
                  placeholder="Search By Volume....."
                  value={this.state.data.book}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {/* <div className="input-field second-wrap">
            <input id="location" type="text" placeholder="location" />
          </div> */}
              <div className="input-field third-wrap">
                <button className="btn-search" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="container">
          <div className="card-deck row">
            <div> {content}</div>
            <div className="container">
              <img
                className="img-responsive mx-auto"
                src="images/quote.jpg"
                alt="Chania"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
