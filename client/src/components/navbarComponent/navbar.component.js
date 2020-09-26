import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/books">VIEW</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Home</a>
    </li>
    {/* <li className="nav-item">
      <a className="nav-link" href="#">Link 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 3</a>
    </li> */}
  </ul>
</nav>
            </div>
        )
    }
}
