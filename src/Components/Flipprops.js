import React from 'react'

function Fliprops(props) {
    return (
        <div className='flex'>
            <>
                <img style={{width:"45%",height:"40%"}} src={props.src} alt="img" />
                <p>{props.name}</p>
                <i> <p>{props.color}</p></i>
                <p >{props.id}</p>
               
                </>
                
      </div>
    )
}

export default Fliprops