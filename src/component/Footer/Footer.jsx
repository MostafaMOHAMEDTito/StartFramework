import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div>
          <div className="footer-row p-5">
            <div className=" row container d-flex justify-content-md-between align-items-md-center text-center mx-auto">
              <div className="col-md-4">
                <h3>LOCATION</h3>
                <p className="m-0">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4">
                <h3>AROUND THE WEB</h3>
                <div>
                  <i className="fa-brands fa-facebook m-1"></i>
                  <i className="fa-brands fa-twitter m-1"></i>
                  <i className="fa-brands fa-linkedin-in  m-1"></i>
                  <i className="fa-solid fa-globe m-1"></i>
                </div>
              </div>
              <div className="col-md-4">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
          <div className="text-center bg-dark text-bg-dark">
            <p className="p-3 m-0">Copyright © Your Website 2021</p>
          </div>
        </div>
      </>
    );
  }
}
