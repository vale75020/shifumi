import React from 'react';


const Player = (props)=>{
    const style = {
        backgroundColor : props.color ,
    color: "white"   }
 return(
   <div>
   <div className="player" style={style}>
     <h4>{props.name}</h4>
     </div>
   </div>
 )
}


export default Player