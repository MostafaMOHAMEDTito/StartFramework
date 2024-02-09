import React, { Component } from "react";
import Children from "../Children/Children";
import img1 from "../../img/poert1.png";
import img2 from "../../img/port2.png";
import img3 from "../../img/port3.png";
import "./PortFolio.css";

export default class Portfolio extends Component {
  state = {
    allImg: [img1, img2, img3, img1, img2, img3],
    index: [],
  };
  showImg = (index) => {
    console.log(index);
    const newIndex = JSON.parse(JSON.stringify(this.state.index));
    newIndex.push(index);
    this.setState({ index: newIndex });
  };
  render() {
    return (
      <div className="container-fluid bg-light">
        <h1 className="text-center text-black mt-5">PORTFOLIO COMPONENT</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="line me-3 bg-black"></div>
          <i className="fa-solid fa-star text-black"></i>
          <div className="line ms-3 bg-black"></div>
        </div>
        {this.state.index.length >0  ? <div  className=" position-absolute roate-img d-flex justify-content-center align-items-center"><img
            className="w-50 m-auto"
            src={this.state.allImg[this.state.index]}
            alt="img"
          />
        </div> : null }
        <div className="container mb-5 row g-5 m-auto">
          {this.state.allImg.map((img, index) => (
            <Children key={index} img={img} ind={index} show={this.showImg} />
          ))}
        </div>
      </div>
    );
  }
}
