import React from 'react'

function Fliprops1(props) {
    return (
        <div className='divi'>
            <>
                <img style={{width:"55%",height:"40%",backgroundColor:"pink"}} src={props.src} />
                <p>{props.name}</p>
                <i> <p>{props.color}</p></i>
              <i>  <p >{props.id}</p></i>
               
                </>
                
      </div>
    )
}

export default Fliprops1