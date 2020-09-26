import React, { Component } from "react";
import "./footer.component.css";

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <section>
          <h3>Hover over the circle below</h3>
        </section>
        <div className="footer">
          <div id="button"></div>
          <div id="container">
            <div id="cont">
              <div className="footer_center">
                <h3>
                  <i className="fas fa-copyright"></i>2020 Tanisha. All rights
                  reserved
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
