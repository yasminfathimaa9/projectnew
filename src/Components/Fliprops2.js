import React from 'react'

function Fliprops2(props) {
    return (
        <div className='aaa'>
            <>
                <img style={{width:"55%",height:"45%"}} src={props.src} />
                <p>{props.name}</p>
                <i> <p>{props.color}</p></i>
                <i> <p >{props.id}</p></i>
               
                </>
                
      </div>
    )
}

export default Fliprops2