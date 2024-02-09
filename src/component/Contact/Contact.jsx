import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="my-5">
        <h1 className="text-center">CONATCT SECTION</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div className="line me-3 bg-black"></div>
          <i class="fa-solid fa-star text-black"></i>
          <div className="line ms-3 bg-black"></div>
        </div>
     <div className="w-50 m-auto">
     <form action="" className="form-control">
          <label htmlFor="UserName" className="form-label mt-3 form-floating">UserName:</label>
          <input className="form-control " type="text" name="" id="UserName" placeholder="UserName..." />
          <label htmlFor="UserAge" className="mt-3">UserAge:</label>
          <input className="form-control " type="number" name="" id="UserAge" placeholder="UserAge..." />
          <label className="mt-3" htmlFor="UserEmail">UserEmail:</label>
          <input
          className="form-control "
            type="email"
            name=""
            id="UserEmail"
            placeholder="UserEmail..."
          />
          <label className="mt-3" htmlFor="Userpassword">Userpassword:</label>
          <input className="form-control" type="password" name="" id="Userpassword" placeholder="Userpassword..." />
          <button type="button" className="btn btn-outline-success mt-3 p-3"> Send Message </button>
        </form>
     </div>
      </div>
    );
  }
}
