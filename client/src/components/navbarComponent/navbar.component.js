import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.component.css";

export default class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
          <h2 className="book_title">BookFinder</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button className="btn btn-light">
                  {" "}
                  <NavLink className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </button>
              </li>
              <br />
              <li className="nav-item">
                <button className="btn btn-light">
                  {" "}
                  <NavLink className="nav-link" to="/save">
                    Saved
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
