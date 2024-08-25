import React from 'react'

const Addwidget = () => {
    return (
        <div >
            <div className="card  col-sm-4 mx-5 my-5"  style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
                <div class="container">
                    <div class="vertical-center">
                        <button>Centered Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addwidget
