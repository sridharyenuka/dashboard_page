import React from 'react'
import pieChart from "./images/pieChart.png"
import Addwidget from './Addwidget'

const CNPP_D = () => {
  return (
    <div >
        <div className='my-2'>
        <p>CWPP Dashboard</p>
        </div>
        
      <div className="row my-0">
            <div className=" card  col-sm-4" style={{width: `18rem`}} >
                <img src={pieChart} className="card-img-top" alt="..." />
                <div className="well">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card  col-sm-4" style={{width: `18rem`}} >
                <img src={pieChart} className="card-img-top" alt="..." />
                <div className="well">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <Addwidget  />
        </div>
    </div>
  )
}

export default CNPP_D
