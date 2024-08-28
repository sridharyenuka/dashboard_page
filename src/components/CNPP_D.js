import React from 'react'
import pieChart from "./images/pieChart.png"
import Addwidget from './Addwidget'

const CNPP_D = () => {
    const handleEvent=()=>{
        console.log("added widget")
    }
  return (
    <div >
        <div className='my-2'>
        <p>CWPP Dashboard</p>
        </div>
        
      <div className="row my-0">
            <div className=" card  col-sm-4" style={{width: `18rem`}} >
                <img src={pieChart} className="card-img-top" alt="..." />
                <div className="well">
                    <h5 className="card-title">Item1</h5>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card  col-sm-4" style={{width: `18rem`}} >
                <img src={pieChart} className="card-img-top" alt="..." />
                <div className="well">
                    <h5 className="card-title">Item2</h5>
                    <div style={{margin:`10px`}}>
                    {/* <a href="#" className="btn btn-primary margin" >Go somewhere</a> */}
                    </div>
                </div>
            </div>
            <Addwidget  />
        </div>
    </div>
  )
}

export default CNPP_D
