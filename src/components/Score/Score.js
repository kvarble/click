import React from "react";
import "./Score.css";


const Score = props => (
<div className="score">

  <p>Click on on each of the images once. The best score is 20!</p>

<ul className="nav nav-pills" role="tablist">
  <li role="presentation" className="active"><p>Score<span className="badge one">{props.currentScore} </span></p></li> 
  <li role="presentation" className="active"><p>Best Score<span className="badge two">{props.bestScore} </span></p></li>
</ul>
{/* <div>
    Best Score
  {props.bestScore}  
</div>
  <div>
      Score
  {props.currentScore}  
</div> */}
</div>

)
export default Score;