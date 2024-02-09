import React, { Component } from "react";
import "./Home.css"
import img1 from '../../img/avataaars.svg'

export default class Home extends Component {
  render() {
    return <>
    <div className="container-floud d-flex justify-content-center align-items-center  text-white text-center">
    <div>
    <div className="w-100 m-auto p-4"><img className="w-75" src={img1} alt="avatar" /></div>

      <div className="p-3">
        <h1>START FRAMEWORK</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
        <div className="line me-3 bg-white"></div>
        <i class="fa-solid fa-star text-white" ></i>
        <div className="line ms-3 bg-white"></div>
      </div>
        <p >Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
    </div>
    </>;
  }
}
