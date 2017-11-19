import React, { Component } from 'react';


const handle = {
  position: "absolute",
  transform: 'translate(-35%, -35%)',
  width: "15px",
  height: "15px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "solid 3px",
  borderColor: 'rgba(0, 0, 0, .7)',
  backgroundColor: "white"
};



export default class Handle extends Component {
  render(){
    const handleStyle = Object.assign({ left: `${this.props.offset}%` }, handle);
    
    return(
      <div style={handleStyle}/>
    )
  }
}