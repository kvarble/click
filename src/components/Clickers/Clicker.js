import React from "react";
import "./Clicker.css";


const Clicker = props => (
    
<div className="photo" 
// value={props.id}
onClick={() => props.click(props.id)}>

    <div className="img-container">
    <img alt={props.id} src={props.image} />
    </div>
    {/* <div className="content">
    </div>    */}
    </div>

)
export default Clicker;