import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="container-floud  py-5">
        <div className="my-5 text-white">     
             <h1 className="text-center ">ABOUT COMPONENT</h1>
          <div className="d-flex justify-content-center align-items-center my-3">
            <div className="line me-3 bg-white"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="line ms-3 bg-white"></div>
          </div>
          <div className="container d-flex justify-content-between align-item-center ">
            <div className="col-md-6">            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p></div>
            <div className="col-md-6">            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p></div>
          </div></div>
        </div>
      </>
    );
  }
}
