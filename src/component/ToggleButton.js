import React from 'react'
import { useState } from "react";
import  "./togglebutton.scss";
export default function ToggleButton(props) {
    const {onToggleStateChange}=props
    const [on, setOn] = useState(false);
  return (
    <div className={on ? "switch on" : "switch"}onClick={()=>{
        setOn(!on);
        onToggleStateChange(!on)
      }}>
        <div className={on ? "circle on" : "circle"} ></div>
      </div>
  )
}
