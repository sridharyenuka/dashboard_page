import React from 'react'

const Addwidget = () => {
    const handleEvent=()=>{
        console.log("added widget")
    }
    return (
        <div >
            <div className="card  col-sm-4 mx-5 my-5" style={{
                position: 'absolute', left: '80%', top: '80%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div className="container">
                    <div className="vertical-center" style={{ left: '38%' }}>
                        <button style={{ left: '50%' }} onClick={handleEvent}>Add widget</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addwidget
