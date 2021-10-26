import React from "react";
import {useHistory} from "react-router-dom";
const style={
   container:{
    "height":"250px",
    "display":"flex",
    "flexDirection":"column",
    "alignItems":"center",
    "justifyContent":"center"
   },
   logo:{
    "color":"green"
   },
   heading:{
    "fontFamily":"inherit",
    "fontWeight":"lighter"
   },
   home:{
        "fontSize": "15px",
        "backgroundColor": "rgb(115, 156, 245)",
        "width": "100%",
        "height": "2.2rem",
        "marginBottom": "-172px",
        "border":"none",
        "marginTop":"1rem",
        "borderRadius":"5px",
        "cursor": "pointer",
   }
}
const Success=()=>{
    const history=useHistory();
    const handleClick=(e)=>{
        e.preventDefault();
        history.push('/');
    }
    return (
        <div className="container" style={style.container}>
            <h1 style={style.heading}>
            <i className="fas fa-check-circle" style={style.logo}></i>
            Details saved</h1>
            <button onClick={handleClick} style={style.home}>Home</button>
        </div>
    )
    
}
export default Success;