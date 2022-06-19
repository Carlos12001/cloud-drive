import React from "react";
import './Popup.css';

/**
 *
 * @param props
 * @returns {JSX.Element|string}
 * @constructor objeto que crea el Popup para settear informacion de la pag principal
 */
function Popup(props){
    return(props.trigger) ?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>X</button>
                {props.children}
            </div>

        </div>
    ):"";
}
export default Popup