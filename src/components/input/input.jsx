import React from "react";

function Input ({customClass, hendlerChange, value}) {
    return(
        <input type='text' className={customClass} onChange={hendlerChange} value={value}></input>
    )
} 

export default Input;