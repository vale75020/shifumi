import React from 'react'

const Images = (props) => {
    return(
     <div>
        <img src={`./img/${props.result}.jpg`} />
     </div>
    )
}

 export default Images