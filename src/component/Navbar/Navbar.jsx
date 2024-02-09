import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
    <Link className="navbar-brand my-2" to="/StartFramWork">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active p-3" aria-current="page" to="About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-3" to="Portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-3" to="Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  }
}
