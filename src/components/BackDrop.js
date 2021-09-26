import React from 'react'
import './BackDrop.css'
function BackDrop({hide}) {
    return (
        <div className="backdrop" onClick={hide}>
            
        </div>
    )
}

export default BackDrop
