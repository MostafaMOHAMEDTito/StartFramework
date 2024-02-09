import React, { Component } from 'react'

export default class Children extends Component {


  render() {
    console.log(this.props.img);
    const newImg = this.props.img
    const index = this.props.ind
    const showImg = this.props.show

    return <>
            <div className="col-md-4  ">
          <div className='position-relative roate'>
            <img className='w-100 ' src={newImg} alt="img" />
            <div onClick={()=>{showImg(index)}} className='w-100 h-100 hover position-absolute  bg-success d-flex justify-content-center align-items-center'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>
          </div>
        </div>
    </>
  }
}
