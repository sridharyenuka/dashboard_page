import React from 'react'
import pieChart from "./images/pieChart.png"
import Addwidget from './Addwidget'
const RegistryScan = () => {
    const handleEvent=()=>{
        console.log("added widget")
    }
    return (
        <div>
            <div className='my-2'>
                <p>Registry Scan</p>
            </div>
            <div className="row my-0">
                <div className=" card  col-sm-4" style={{ width: `18rem` }} >
                    <img src={pieChart} className="card-img-top" alt="..." />
                    <div className="well">
                        <h5 className="card-title">Item1</h5>
                        <div style={{ margin: `10px` }}>
                            {/* <a href="#" className="btn btn-primary margin">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div className="card  col-sm-4" style={{ width: `18rem` }} >
                    <img src={pieChart} className="card-img-top" alt="..." />
                    <div className="well">
                        <h5 className="card-title">Item2</h5>
                        <div style={{ margin: `10px` }}>
                            {/* <a href="#" className="btn btn-primary margin">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                <div >
                    <div className="card  col-sm-4 mx-5 my-5" style={{
                        position: 'absolute', left: '80%', top: '130%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <div className="container">
                            <div className="vertical-center" style={{ left: '38%' }}>
                                <button style={{ left: '60%' }} onClick={handleEvent}>Add widget</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistryScan
