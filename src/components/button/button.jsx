
import React from "react";

function Button ({title, img, customClass,Children, onClick, buttonDisabled, children}){
    return(
        <button className={customClass} onClick={onClick} disabled={buttonDisabled}>{img}{title}{children}</button>
    )
}

export default Button;